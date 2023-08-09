import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setUserPlayingTimeThunk } from '../actions/user'
import { useParams } from 'react-router-dom'

export default function Timer() {
  const [overTimeRed, setOverTimeRed] = useState('stopwatch-time')
  const [time, setTime] = useState(0)
  const [intervalId, setIntervalId] = useState(0)
  const { userId } = useParams()
  const dispatch = useAppDispatch()
  const toggleTimer = useAppSelector((state) => state.timer) as boolean

  const seconds = Math.floor(time % 60)
  const minutes = Math.floor((time / 60) % 60)
  // const milliseconds = time % 100

  useEffect(() => {
    if (toggleTimer) {
      runTimer()
    } else if (!toggleTimer) {
      stopTimer()
      dispatch(setUserPlayingTimeThunk(Number(userId), time))
    }
  }, [toggleTimer])

  function runTimer() {
    const newIntervalId = setInterval(() => {
      setTime((time) => time + 1)
      if (minutes > 1) {
        setOverTimeRed('red-time')
      } else {
        setOverTimeRed('stopwatch-time')
      }
    }, 1000)
    setIntervalId(newIntervalId)
  }

  function stopTimer() {
    clearInterval(intervalId)
  }

  return (
    <p id={overTimeRed} className="blinking">
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
      {/* {milliseconds.toString().padStart(2, '0')} */}
      {/* {time} */}
    </p>
  )
}
