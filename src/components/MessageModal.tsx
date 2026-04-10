import { motion, AnimatePresence } from 'framer-motion'

interface MessageModalProps {
  message: { category: string; content: string; emoji: string }
  onClose: () => void
}

export default function MessageModal({ message, onClose }: MessageModalProps) {
  const categoryColors: Record<string, string> = {
    'gostosa': 'text-red-400',
    'minha paz': 'text-blue-400',
    'meu vício': 'text-pink-400',
    'desejo': 'text-red-500',
    'amor': 'text-pink-500',
    'memórias': 'text-purple-400',
    'especial': 'text-yellow-400',
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-gradient-to-b from-space-deep to-space-purple border border-neon-purple/50 rounded-2xl p-8 md:p-12 max-w-2xl mx-4 shadow-2xl shadow-neon-purple/50"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>

          {/* Category and emoji */}
          <div className="text-5xl mb-4">{message.emoji}</div>

          {/* Category label */}
          <p className={`text-lg font-orbitron uppercase tracking-wider mb-4 ${categoryColors[message.category] || 'text-neon-pink'}`}>
            {message.category}
          </p>

          {/* Message content */}
          <p className="text-xl md:text-2xl leading-relaxed text-white mb-6 font-poppins">
            {message.content}
          </p>

          {/* Close instruction */}
          <p className="text-gray-400 text-sm text-center">
            Clique em qualquer lugar para fechar
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
