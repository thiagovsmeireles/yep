import { useState } from 'react'
import { motion } from 'framer-motion'

interface InteractiveElementsProps {
  onSelectMessage: (message: { category: string; content: string; emoji: string }) => void
}

export default function InteractiveElements({ onSelectMessage }: InteractiveElementsProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const messages = {
    stars: [
      { category: 'gostosa', content: 'Você é a mulher mais gostosa de todo o universo. Aquele sorriso, aquele corpo... Que delicia...', emoji: '😍' },
      { category: 'gostosa', content: 'Cada noite contigo eu percebo que finalmente encontrei a pessoa perfeita pra mim, eu amo essa nossa sincronia, minha gostosa', emoji: '🔥' },
      { category: 'minha paz', content: 'estou viciado em você, sempre que estou contigo é quando percebo que finalmente estou em paz', emoji: '🕊️' },
      { category: 'minha paz', content: 'Sua presença acalma até os meus piores dias. Você é paz para minha alma.', emoji: '💆' },
      { category: 'meu vício', content: 'Não consigo parar de pensar em você. Você é meu vício que não quero curar nunca.', emoji: '😈' },
      { category: 'meu vício', content: 'eu amo ser viciado em você.', emoji: '💋' },
    ],
    planets: {
      desire: [
        { content: 'eu amo sua carinha de safada quando você começa me provocar..', emoji: '🔥' },
        { content: 'Você me faz desejar coisas que nunca desejei antes...', emoji: '⚡' },
        { content: 'Não há nada melhor que você me beijando... nada no mundo.', emoji: '💋' },
      ],
      love: [
        { content: 'Te amo muito, muito mesmo. Tenho certeza que você é a mulher da minha vida.', emoji: '❤️' },
        { content: 'Mikelly, você é Minha vida, meu amor, meu futuro.', emoji: '💕' },
        { content: 'Obrigado por existir, delicia', emoji: '🌟' },
      ],
      memories: [
        { content: 'você é o motivo da minha alegrinha, meu amor!', emoji: '😂' },
        { content: 'somos um casal foda pra krl, eu amo tudo em ti', emoji: '🎭' },
      ],
    },
    special: {
      rocket: 'De todos os universos possíveis... em todos eles eu escolho você. Sempre você.',
      astronaut: 'Vem explorar esse universo comigo? Juro que vale a pena... 😏',
    },
  }

  // Generate interactive stars
  const starPositions = [
    { x: '15%', y: '25%' },
    { x: '85%', y: '30%' },
    { x: '25%', y: '70%' },
    { x: '75%', y: '75%' },
    { x: '50%', y: '20%' },
    { x: '10%', y: '60%' },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Astronaut - floating in center */}
      <motion.div
        className="absolute text-8xl md:text-9xl cursor-pointer z-10"
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1 }}
        onClick={() =>
          onSelectMessage({
            category: 'especial',
            content: messages.special.astronaut,
            emoji: '👨‍🚀',
          })
        }
      >
        👨‍🚀
      </motion.div>

      {/* Interactive Stars */}
      {starPositions.map((pos, idx) => (
        <motion.button
          key={`star-${idx}`}
          className="absolute text-3xl md:text-4xl cursor-pointer z-5 hover:scale-125 transition-transform"
          style={{ left: pos.x, top: pos.y }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + idx * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          onClick={() =>
            onSelectMessage({
              category: messages.stars[idx % messages.stars.length].category,
              content: messages.stars[idx % messages.stars.length].content,
              emoji: messages.stars[idx % messages.stars.length].emoji,
            })
          }
        >
          ⭐
        </motion.button>
      ))}

      {/* Planet - Desire (top left) */}
      <motion.button
        className="absolute text-6xl md:text-7xl left-8 top-1/3 z-5 opacity-80 hover:opacity-100 transition-opacity"
        onClick={() => {
          const msg = messages.planets.desire[Math.floor(Math.random() * messages.planets.desire.length)];
          onSelectMessage({
            category: 'desejo',
            content: msg.content,
            emoji: '🔥',
          });
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        whileHover={{ scale: 1.1 }}
      >
        🔥
      </motion.button>

      {/* Planet - Love (bottom right) */}
      <motion.button
        className="absolute text-6xl md:text-7xl right-8 bottom-1/3 z-5 opacity-80 hover:opacity-100 transition-opacity"
        onClick={() => {
          const msg = messages.planets.love[Math.floor(Math.random() * messages.planets.love.length)];
          onSelectMessage({
            category: 'amor',
            content: msg.content,
            emoji: '💖',
          });
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        whileHover={{ scale: 1.1 }}
      >
        💖
      </motion.button>

      {/* Planet - Memories (bottom left) */}
      <motion.button
        className="absolute text-6xl md:text-7xl left-1/4 bottom-20 z-5 opacity-80 hover:opacity-100 transition-opacity"
        onClick={() => {
          const msg = messages.planets.memories[Math.floor(Math.random() * messages.planets.memories.length)];
          onSelectMessage({
            category: 'memórias',
            content: msg.content,
            emoji: '😂',
          });
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        whileHover={{ scale: 1.1 }}
      >
        😂
      </motion.button>

      {/* Rocket - moving with mouse */}
      <motion.button
        className="absolute text-5xl md:text-6xl z-5 cursor-pointer"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        style={{
          left: 'calc(10% + 20px)',
          bottom: 'calc(10% + 20px)',
        }}
        onClick={() =>
          onSelectMessage({
            category: 'especial',
            content: messages.special.rocket,
            emoji: '🚀',
          })
        }
        whileHover={{ scale: 1.2 }}
      >
        🚀
      </motion.button>

      {/* Final message hint */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-gray-400 text-sm max-w-xs"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Explore este universo... clique nos elementos 🌌
      </motion.div>
    </div>
  )
}
