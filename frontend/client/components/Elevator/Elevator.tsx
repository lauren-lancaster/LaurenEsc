import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link, useParams } from 'react-router-dom'
import { useRef, useState } from 'react'
import { useSound } from 'use-sound'
import liftDoorUrl from '/sounds/elevator-door.wav'
import slackUrl from '/sounds/knock-brush.mp3'
import ElevatorCode from './ElevatorCode'
import ElevatorLevel from './ElevatorLevel'
import Hintss from '../GetAHint'
import Background from './Background'

import eye from '/images/eye.png'
import chair from '/images/chair.png'
import tenticle from '/images/tenticle.png'
import bg1 from '/images/bg1.png'

export default function Elevator() {
  const [lift, setLift] = useState('/images/lift.png')
  const [viewExit, setViewExit] = useState(false)
  const [viewOpen, setViewOpen] = useState(true)
  const [levelNum, setLevelNum] = useState('3')
  const [codeCracked, setCodeCracked] = useState(false)
  const [playLiftDoor] = useSound(liftDoorUrl, { volume: 0.2 })
  const [playSlackUrl] = useSound(slackUrl, { volume: 0.5 })
  const ref = useRef()
  const { userId } = useParams()

  const handleClick = () => {
    setLift('/images/lift.gif')
    setViewExit(true)
    setViewOpen(false)
    liftDoorFx()
  }

  const liftDoorFx = () => {
    playLiftDoor()
  }

  const handlePlayFx = () => {
    playSlackUrl()
  }

  return (
    <>
      <div className="elevator-shaft">
        <Parallax
          pages={6}
          ref={ref}
          style={{
            width: '105%',
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <ParallaxLayer
            offset={0}
            speed={1}
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: 'cover',
            }}
            factor={4}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={1}
            // style={{
            //   backgroundImage: `url(${})`,
            //   backgroundSize: 'cover',
            // }}
            factor={5}
          ></ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 0.1, end: 6.9 }}
            style={{
              textAlign: 'left',
              width: '25%',
              height: '90VH',
              marginRight: '70px',
            }}
          >
            <div id="lift">
              <img
                src={lift}
                style={{ minWidth: '300px%' }}
                id="lift-pic"
                alt="lift"
              />
              <div id="lift-number">
                <p className="number" style={{ textAlign: 'center' }}>
                  {levelNum}
                </p>{' '}
                <p>↓</p>
              </div>
            </div>
          </ParallaxLayer>
          <Background />
          <ElevatorLevel
            refProp={ref}
            levelNum={levelNum}
            setLevelNum={setLevelNum}
          />

          {/* <Lift levelNum={levelNum} lift={lift} /> */}

          {/* PIN CODE LAYERS */}
          <ParallaxLayer
            offset={5.2}
            style={{ textAlign: 'center', zIndex: '3' }}
          >
            <div>
              <ElevatorCode
                codeCracked={codeCracked}
                setCodeCracked={setCodeCracked}
              />
              {viewOpen && codeCracked && (
                <button className="blue-button" onClick={handleClick}>
                  Open Doors
                </button>
              )}
              {viewExit && (
                <Link to={`/game/${userId}/scene/2`}>
                  <button
                    className="blue-button"
                    onClick={() => handlePlayFx()}
                  >
                    Escape
                  </button>
                </Link>
              )}
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5.5}
            style={{ textAlign: 'right' }}
            speed={0.5}
          >
            <img
              // style={{ width: '30%', textAlign: 'right' }}
              src={tenticle}
              alt="tenticle"
            />
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 2.5, end: 2.6 }}
            style={{ textAlign: 'left', width: '10%' }}
          >
            <img
              style={{ width: '100%', textAlign: 'right', height: 'auto' }}
              src={eye}
              alt="eye"
            />
          </ParallaxLayer>
          {/* 
          <ParallaxLayer
            sticky={{ start: 3.5, end: 5.6 }}
            style={{ textAlign: 'left', width: '100%' }}
          >
            <img
              style={{ width: '30%', textAlign: 'right' }}
              src={chair}
              alt="chair"
            />
          </ParallaxLayer> */}
        </Parallax>
        <Hintss level_id={2} />
      </div>
    </>
  )
}
