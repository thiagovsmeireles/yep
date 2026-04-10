import { motion } from 'framer-motion'

export default function StarField() {
  // Generate random stars for parallax effect
  const backgroundStars = Array.from({ length: 100 }).map(() => ({
    id: Math.random(),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 5 + 5,
  }))

  return (
    <div className="absolute inset-0">
      {/* Deep background stars - slowest */}
      <div className="absolute inset-0 opacity-30">
        {backgroundStars.slice(0, 30).map((star) => (
          <motion.div
            key={`bg-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: star.duration, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Mid layer stars - medium speed */}
      <div className="absolute inset-0 opacity-50">
        {backgroundStars.slice(30, 60).map((star) => (
          <motion.div
            key={`mid-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size * 1.5,
              height: star.size * 1.5,
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: star.duration * 0.8, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Foreground stars - fastest */}
      <div className="absolute inset-0 opacity-70">
        {backgroundStars.slice(60, 100).map((star) => (
          <motion.div
            key={`fg-${star.id}`}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size * 2,
              height: star.size * 2,
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: star.duration * 0.6, repeat: Infinity }}
          />
        ))}
      </div>

      {/* Occasional shooting star */}
      <motion.div className="absolute w-1 h-1 bg-white rounded-full pointer-events-none">
        <motion.div
          className="w-96 h-0.5 bg-gradient-to-r from-white to-transparent absolute"
          initial={{ x: -400, y: -50, opacity: 0 }}
          animate={{
            x: [0, 400],
            y: [0, 200],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2,
            delay: Math.random() * 10,
            repeat: Infinity,
            repeatDelay: Math.random() * 5 + 5,
          }}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 40 + 10}%`,
          }}
        />
      </motion.div>
    </div>
  )
}
