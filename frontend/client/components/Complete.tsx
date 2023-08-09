import { useState } from 'react'
import { useSound } from 'use-sound'
import audioUrl from '/sounds/short-music.mp3'
import MainNav from './MainNav'
import Confetti from 'react-confetti'

export default function Complete() {
  const [playing, setPlaying] = useState(false)

  const [play, { stop }] = useSound(audioUrl, { volume: 0.5, loop: true })

  const handlePlay = () => {
    if (!playing) {
      play()
      setPlaying(true)
    }
  }

  const handleStop = () => {
    if (playing) {
      stop()
      setPlaying(false)
    }
  }

  return (
    <>
      <Confetti />
      <div className="grey-background" onClick={() => handlePlay()}>
        <div className="main-nav-container">
          <MainNav />
        </div>
        <div className="screen">
          <h2 className="screen-message typewriter">
            ...CONGRATULATIONS ON ESCAPING!
          </h2>
          <a href="/">
            <button className="blue-button" onClick={() => handleStop()}>
              PLAY AGAIN
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
