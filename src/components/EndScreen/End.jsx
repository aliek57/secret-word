import './End.css'

const End = ({retry}) => {
  return (
    <div>
      <h1>Fim de jogo</h1>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default End