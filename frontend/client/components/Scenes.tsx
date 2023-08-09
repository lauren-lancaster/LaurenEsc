/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from 'react-router-dom'
import { Scene } from '../../models/scenes'
import * as actions from '../actions/scene'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useState, useEffect } from 'react'
import logo from '/images/slack-icon.png'
import pfp from '/images/Haiti.png'
import slackbot from '/images/slackbot.png'
import glitch from '/images/endscreen.gif'
import SceneNextButton from './SceneNextButton'
import slackUrl from '/sounds/wow.mp3'
import { useSound } from 'use-sound'

export function getScenes() {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  //add current time to slackbot
  const today = new Date()
  const hours = today.getHours()
  const minutes = today.getMinutes()
  const amPm = hours >= 12 ? 'pm' : 'am'
  const time = hours + ':' + minutes + amPm

  // slack notification sound
  const [play] = useSound(slackUrl, { volume: 0.5 })

  const handlePlayFx = () => {
    play()
  }

  // setting slackBot text to appear
  const [audioPlay, setAudioPlay] = useState(false)
  const [showContent, setShowContent] = useState(false)

  setTimeout(() => {
    console.log('delayed for 1 second')
    setShowContent(true)
    if (!audioPlay) {
      setAudioPlay(true)
      handlePlayFx()
    }
  }, 5000)

  // Finding correct scene by ID

  const scene = useAppSelector((state) => state.scene) as Scene[]
  const curScene = scene[0]

  useEffect(() => {
    dispatch(actions.getOneScene(Number(id)))
  }, [dispatch, id])

  return (
    <>
      <div className="grey-background">
        <div className="screen" style={{ animation: 'none' }}>
          <div className="slack-card">
            <div className="slack-sidecard">
              <img src={logo} className="logo" alt="slack-icon" />
              <div className="slack-text">
                <strong>#2023_Piwakawaka</strong>
                <br />
                <strong>#code-help-desk</strong>
                <br />
                <br />
                <strong> ⬇ Direct Messag..</strong>
                <br />
                📨
              </div>
            </div>
            <div className="slack-messagecard">
              <div className="slack-message-container">
                <img src={pfp} className="pfp" alt="icon" />
                <div className="slackbot-message-text">
                  <p>
                    <b>Facilitator-Piwakawaka-23 </b>
                    {time}
                  </p>
                  <p className="message-txt">{curScene?.text} </p>
                </div>
              </div>
              {showContent && (
                <>
                  <div className="slack-message-container slackbot-blue">
                    <img
                      src={slackbot}
                      className="slackbot"
                      alt="slackbot-icon"
                    />
                    <div className="slackbot-message-text">
                      <p>
                        <b>Slackbot-Piwakawaka-23 </b>
                      </p>
                      <p className="message-txt">{curScene?.slack} </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {curScene?.final ? (
            <div>
              <img src={glitch} className="glitch" alt="glitch-bg" />
            </div>
          ) : (
            <div></div>
          )}
          <SceneNextButton curScene={curScene} />
        </div>
      </div>
    </>
  )
}

export default getScenes
