import { useState } from 'react'
import './App.css'
import GamePlay from './components/GamePlay';
import FirstPage from './components/FirstPage';


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {
      setIsGameStarted ((prev) => !prev);
  }

  return (
    <>
      {isGameStarted?<GamePlay /> : <FirstPage toggle={toggleGamePlay} />}
    </>
  )
}

export default App
