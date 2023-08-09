import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import * as actions from '../actions/hints'
import { Hints } from '../../models/hints'
import slackbot from '/images/slackbot.png'

interface Props {
  level_id: number
}

export function Hintss(props: Props) {
  const id = props.level_id

  const [hintsButton, setHintsButton] = useState(false)
  const dispatch = useAppDispatch()

  const today = new Date()
  const hours = today.getHours()
  const minutes = today.getMinutes()
  const amPm = hours >= 12 ? 'pm' : 'am'
  const time = hours + ':' + minutes + amPm

  useEffect(() => {
    dispatch(actions.getSingleHintThunk(id))
  }, [dispatch, id])

  const hint = useAppSelector((state) => state.hints) as Hints[]

  const handleClick = () => {
    setHintsButton(true)
    if (hintsButton === true) return setHintsButton(false)
  }
  return (
    <>
      <div id="hint-container-btn">
        <button
          className="blue-button blue-button-sml green-btn-hint"
          id="green-btn"
          onClick={handleClick}
        >
          ?
        </button>
        {hintsButton && (
          <div id="hint-container" style={{ textAlign: 'left' }}>
            <div id="slackbot-container">
              <img id="sml-slackbot" src={slackbot} alt="slackbot emoji" />
            </div>
            <div id="slackbot-hint">
              <p>
                <b>Slackbot-Piwakawaka-23 </b>
                {time}
              </p>
              <p>{hint[0].text}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Hintss
