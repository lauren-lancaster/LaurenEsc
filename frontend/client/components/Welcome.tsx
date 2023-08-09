import { useEffect, useState } from 'react'
import { User } from '../../models/users'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { Link } from 'react-router-dom'
import * as actions from '../actions/user'
import slackUrl from '/sounds/knock-brush.mp3'
import ambienceUrl from '/sounds/ambience.wav'
import { useSound } from 'use-sound'

export default function Welcome() {
  const dispatch = useAppDispatch()
  const [play] = useSound(slackUrl, { volume: 0.5 })

  const [playing, setPlaying] = useState(false)
  const [playAmbience] = useSound(ambienceUrl, {
    volume: 0.9,
    loop: true,
    playbackRate: 3,
    interrupt: true,
  })

  const handlePlayFx = () => {
    play()
    timer()
  }

  const handlePlay = () => {
    if (!playing) {
      playAmbience()
      setPlaying(true)
    }
  }

  function timer() {
    dispatch(actions.toggleTimer(true))
  }

  useEffect(() => {
    dispatch(actions.getPlayingUserThunk())
  }, [dispatch])

  const user = useAppSelector((state) => state.user) as User

  return (
    <>
      <div className="grey-background" onClick={() => handlePlay()}>
        <div className="screen">
          <h1 className="screen-message typewriter">
            ...hello {user.username}, do you want to play a game?
          </h1>

          <Link to={`/game/${user.id}/scene/1`}>
            <button className="blue-button" onClick={() => handlePlayFx()}>
              Start Game
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
