import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div className='game'>
      <p className='points'>
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica: <span>Categoria</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="letter">B</span>
        <span className="letter">C</span>
        <span className="blankSquare"></span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button onClick={verifyLetter} className="verifyButton">Verificar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        <span className="wrongLetter">X, </span>
        <span className="wrongLetter">Y, </span>
      </div>
    </div>
  )
}

export default Game