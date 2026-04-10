import { useState } from 'react'
import { motion } from 'framer-motion'
import StarField from './StarField'
import InteractiveElements from './InteractiveElements'
import MessageModal from './MessageModal'
import MusicPlayer from './MusicPlayer'

interface UniverseScreenProps {
  soundEnabled: boolean
  onSoundToggle: (enabled: boolean) => void
  onRestart: () => void
}

export default function UniverseScreen({ soundEnabled, onSoundToggle, onRestart }: UniverseScreenProps) {
  const [selectedMessage, setSelectedMessage] = useState<{
    category: string
    content: string
    emoji: string
  } | null>(null)

  return (
    <div className="space-container">
      {/* Background animated stars */}
      <StarField />

      {/* Main header */}
      <div className="absolute top-8 left-0 right-0 z-20 text-center">
        <motion.h1
          className="text-2xl md:text-4xl font-orbitron font-bold text-glow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Thiago ❤️ Mikelly
        </motion.h1>
      </div>

      {/* Interactive elements */}
      <InteractiveElements onSelectMessage={setSelectedMessage} />

      {/* Music player */}
      <MusicPlayer enabled={soundEnabled} onToggle={onSoundToggle} />

      {/* Restart button */}
      <motion.button
        onClick={onRestart}
        className="absolute bottom-8 right-8 z-30 px-6 py-3 bg-neon-purple/30 border border-neon-purple rounded-lg font-orbitron text-sm hover:bg-neon-purple/50 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ↻ Recomeçar
      </motion.button>

      {/* Message modal */}
      {selectedMessage && (
        <MessageModal message={selectedMessage} onClose={() => setSelectedMessage(null)} />
      )}
    </div>
  )
}
