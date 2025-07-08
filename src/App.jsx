import './App.css'
import { useState, useCallback, useEffect } from 'react';
import { wordsList } from './data/words';
import Start from './components/StartScreen/Start'
import Game from './components/GameScreen/Game'
import End from './components/EndScreen/End'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
];

function App() {
  const [stage, setStage] = useState(stages[0].name);

  const startGame = () => {
    setStage(stages[1].name);
  }

  const verifyLetter = () => {
    setStage(stages[2].name);
  }

  const retry = () => {
    setStage(stages[0].name);
  }

  return (
    <div className='App'>
      {stage === 'start' && <Start startGame={startGame}/>}
      {stage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {stage === 'end' && <End retry={retry}/>}
    </div>
  )
}

export default App
