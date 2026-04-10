import { motion } from 'framer-motion'
import { useEffect } from 'react'

interface IntroScreenProps {
  onComplete: () => void
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 6000)
    return () => clearTimeout(timer)
  }, [onComplete])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 0,
      },
    },
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="space-container flex items-center justify-center">
      {/* Background stars layer */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-xl md:text-3xl text-gray-300 mb-8 font-orbitron tracking-wider"
          variants={lineVariants}
        >
          Em um universo infinito…
        </motion.p>

        <motion.p
          className="text-2xl md:text-4xl text-neon-pink font-bold mb-8 font-orbitron tracking-widest"
          variants={lineVariants}
        >
          Dois gostosos se encontraram… ✨
        </motion.p>

        <motion.div
          className="text-4xl md:text-6xl font-bold mt-12"
          variants={lineVariants}
        >
          <span className="text-white font-orbitron">Thiago</span>
          <span className="text-neon-pink mx-4">❤️</span>
          <span className="text-white font-orbitron">Mikelly</span>
        </motion.div>
      </motion.div>

      {/* Skip indicator */}
      <motion.div
        className="absolute bottom-10 text-center text-gray-400 text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Entrando no universo...
      </motion.div>
    </div>
  )
}
