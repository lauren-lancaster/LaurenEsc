import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BalconyGame from './BalconyGame'
import ReactRain from 'react-rain-animation'

// import all the styles
import 'react-rain-animation/lib/style.css'

export default function Balcony() {
  const [playing, setPlaying] = useState(false)
  const { userId } = useParams()
  const [start, setStart] = useState(false)

  function handlePlay() {
    setStart(true)
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

  useEffect(() => {
    // Run JavaScript script on this comp
    const script = document.createElement('script')
    script.src = '/scripts/balconycatch.js'
    script.async = true
    document.body.appendChild(script)

    // Attach CSS to this comp
    const link = document.createElement('link')
    link.href = '/styles/balcony.css'
    link.rel = 'stylesheet'
    link.type = 'text/css'
    document.head.appendChild(link)

    // Clean upon component unmount
    return () => {
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  return (
    <>
      <ReactRain numDrops="30" />
      <BalconyGame />
      <div>
        <Link to={`/game/${userId}/scene/5`} id="balcony-exit">
          {/* <button
              style={{ position: 'fixed', bottom: '0' }}
              className="blue-button"
              onClick={() => handleStop()}
            >
              Exit
            </button> */}
        </Link>
      </div>
    </>
  )
}
