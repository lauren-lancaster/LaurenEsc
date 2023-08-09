import Board from './LightsOffBoard'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Hintss from './GetAHint'

export default function LightsOff() {
  const { userId } = useParams()
  // const [nextButton, setnextButton] = useState(true)

  return (
    <>
      <div className="lightoff-background">
        <div className="lightoff-img-overlay">
          <Hintss level_id={1} />
          <Board />
        </div>
      </div>
      {/* {nextButton && (
        <Link to={`/game/${userId}/scene/1/level/2`}>
          <button
            style={{ position: 'fixed', bottom: '0' }}
            className="blue-button"
          >
            Exit
          </button>
        </Link>
      )} */}
    </>
  )
}

//SOURCE
//https://github.com/luciatruden/lights-out?ref=reactjsexample.com
