import MainNav from './MainNav'

export default function GameOver() {
  return (
    <>
      <div className="main-nav-container">
        <MainNav />
      </div>
      <div className="grey-background">
        <div className="screen" id="red-screen">
          <h2>YOU DIED</h2>
          <h3 className="screen-message type-red">
            For you, Bootcamp will never be over...
          </h3>
          <a href="/">
            <button className="blue-button" id="red-btn">
              PLAY AGAIN
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
