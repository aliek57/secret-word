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

  return (
    <div className='App'>
      {stage === 'start' && <Start />}
      {stage === 'game' && <Game />}
      {stage === 'end' && <End />}
    </div>
  )
}

export default App
