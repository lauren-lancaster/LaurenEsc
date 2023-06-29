//CHANGE USER STATE TO ACTIVE: FALSE COMPLETE: TRUE
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { finishGameThunk } from '../actions/user'
import { useParams, Link } from 'react-router-dom'
import { useSound } from 'use-sound'
import audioUrl from '/sounds/short-music.mp3'

export default function Complete() {
  const { userId } = useParams()
  //audio.loop = true

  const [play] = useSound(audioUrl, { volume: 0.5, loop: true })

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(finishGameThunk(Number(userId)))
  }, [])

  const handlePlay = () => {
    play()
  }

  return (
    <>
      <div className="background-style" onClick={() => handlePlay()}>
        <div className="complete">
          <div className="complete-message">
            <h1>...congratulations on escaping</h1>
          </div>
          <div className="replay">
            <Link to="/">
              <button className="replay-btn">PLAY AGAIN</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
