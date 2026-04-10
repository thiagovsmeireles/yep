import { useState } from 'react'
import IntroScreen from './components/IntroScreen'
import UniverseScreen from './components/UniverseScreen'

function App() {
  const [screen, setScreen] = useState<'intro' | 'universe'>('intro')
  const [soundEnabled, setSoundEnabled] = useState(false)

  const handleIntroComplete = () => {
    setScreen('universe')
  }

  const restartUniverse = () => {
    setScreen('intro')
  }

  return (
    <div className="w-full h-screen bg-space-dark overflow-hidden">
      {screen === 'intro' ? (
        <IntroScreen onComplete={handleIntroComplete} />
      ) : (
        <UniverseScreen 
          soundEnabled={soundEnabled}
          onSoundToggle={setSoundEnabled}
          onRestart={restartUniverse}
        />
      )}
    </div>
  )
}

export default App
