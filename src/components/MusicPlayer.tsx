import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface MusicPlayerProps {
  enabled: boolean
  onToggle: (enabled: boolean) => void
}

export default function MusicPlayer({ enabled, onToggle }: MusicPlayerProps) {
  const audioContextRef = useRef<AudioContext | null>(null)
  const nodesRef = useRef<{
    master?: GainNode
    drone1?: OscillatorNode
    drone2?: OscillatorNode
    noise?: AudioBufferSourceNode
    lfo?: OscillatorNode
    lfoGain?: GainNode
  }>({})

  const stopSpaceSound = () => {
    const { master, drone1, drone2, noise, lfo, lfoGain } = nodesRef.current

    drone1?.stop()
    drone2?.stop()
    noise?.stop()
    lfo?.stop()

    master?.disconnect()
    drone1?.disconnect()
    drone2?.disconnect()
    noise?.disconnect()
    lfo?.disconnect()
    lfoGain?.disconnect()

    nodesRef.current = {}
  }

  const startSpaceSound = async () => {
    const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext

    if (!AudioCtx) {
      return
    }

    const context = audioContextRef.current ?? new AudioCtx()
    audioContextRef.current = context

    if (context.state === 'suspended') {
      await context.resume()
    }

    const master = context.createGain()
    master.gain.value = 0.08
    master.connect(context.destination)

    const lfo = context.createOscillator()
    const lfoGain = context.createGain()
    lfo.frequency.value = 0.08
    lfoGain.gain.value = 10
    lfo.connect(lfoGain)

    const drone1 = context.createOscillator()
    drone1.type = 'sine'
    drone1.frequency.value = 55

    const drone1Gain = context.createGain()
    drone1Gain.gain.value = 0.7
    drone1.connect(drone1Gain)
    drone1Gain.connect(master)
    lfoGain.connect(drone1.frequency)

    const drone2 = context.createOscillator()
    drone2.type = 'sine'
    drone2.frequency.value = 110

    const drone2Gain = context.createGain()
    drone2Gain.gain.value = 0.35
    drone2.connect(drone2Gain)
    drone2Gain.connect(master)
    lfoGain.connect(drone2.frequency)

    const filter = context.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 900
    filter.Q.value = 0.7

    const noiseBuffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate)
    const channel = noiseBuffer.getChannelData(0)
    for (let i = 0; i < channel.length; i += 1) {
      channel[i] = (Math.random() * 2 - 1) * 0.18
    }

    const noise = context.createBufferSource()
    noise.buffer = noiseBuffer
    noise.loop = true

    const noiseGain = context.createGain()
    noiseGain.gain.value = 0.15
    noise.connect(filter)
    filter.connect(noiseGain)
    noiseGain.connect(master)

    const chime = context.createOscillator()
    chime.type = 'triangle'
    chime.frequency.value = 523.25
    const chimeGain = context.createGain()
    chimeGain.gain.value = 0.2
    chime.connect(chimeGain)
    chimeGain.connect(master)
    chime.start()
    chime.stop(context.currentTime + 1.2)

    lfo.start()
    drone1.start()
    drone2.start()
    noise.start()

    nodesRef.current = {
      master,
      drone1,
      drone2,
      noise,
      lfo,
      lfoGain,
    }
  }

  const handleToggle = async () => {
    if (enabled) {
      stopSpaceSound()
      onToggle(false)
      return
    }

    await startSpaceSound()
    onToggle(true)
  }

  useEffect(() => {
    return () => {
      stopSpaceSound()
      audioContextRef.current?.close().catch(() => undefined)
    }
  }, [])

  return (
    <div className="absolute bottom-8 left-8 z-30">
      <motion.button
        onClick={handleToggle}
        className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-2xl transition-all ${
          enabled
            ? 'bg-neon-purple/30 border-neon-purple text-neon-pink'
            : 'bg-gray-800/30 border-gray-600 text-gray-400'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {enabled ? '🔊' : '🔇'}
      </motion.button>
    </div>
  )
}
