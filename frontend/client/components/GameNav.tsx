import logo from '/images/static-esc-logo.png'
import Timer from '../components/Timer'

function GameNav() {
  return (
    <>
      <Timer />
      <a href="/">
        <img
          src={logo}
          alt="static grey escape logo"
          className="in-game-logo"
        />
      </a>
    </>
  )
}

export default GameNav

//may have to change logo to be an a href
