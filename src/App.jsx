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
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(5);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }

  const startGame = () => {
    const { word, category } = pickWordAndCategory();

    let wordLetters = word.split('');
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

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
      {stage === 'game' && <Game 
        verifyLetter={verifyLetter} 
        pickedCategory={pickedCategory} 
        pickedWord={pickedWord} 
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {stage === 'end' && <End retry={retry}/>}
    </div>
  )
}

export default App
