import ESCLogo from './ESCLogo'
import StartGameForm from './StartGameForm'
import audioUrl from '/sounds/short-music.mp3'
import { useSound } from 'use-sound'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MainNav from './MainNav'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import * as userActions from '../actions/user'
import { User } from '../../models/users'

function Start() {
  const dispatch = useAppDispatch()
  const [playing, setPlaying] = useState(false)
  const [viewForm, setViewForm] = useState(true)
  const [viewStart, setViewStart] = useState(false)
  const [play, { stop }] = useSound(audioUrl, { volume: 0.5, loop: true })

  useEffect(() => {
    dispatch(userActions.getUsersThunk())
  }, [dispatch])

  const players = useAppSelector((state) => state.user) as User[]

  useEffect(() => {
    dispatch(userActions.setUserStatusThunk(players))
  }, [])

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
          <div className="main-nav-container">
            <MainNav />
          </div>
      <div>
        <div className="grey-background" onClick={() => handlePlay()}>
          <div id="esc-logo-container">
            <div id="esc-logo">
              <ESCLogo />
            </div>
          </div>
          <div className="screen form-screen">
            {viewForm && (
              <StartGameForm
                viewForm={viewForm}
                setViewForm={setViewForm}
                viewStart={viewStart}
                setViewStart={setViewStart}
              />
            )}
            {viewStart && (
              <Link to="/game/welcome">
                <button className="blue-button" onClick={() => handleStop()}>
                  Set
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Start
