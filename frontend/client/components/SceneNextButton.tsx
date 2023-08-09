import { Link, useParams } from 'react-router-dom'
import { toggleTimer } from '../actions/user'
import { useAppDispatch } from '../hooks/hooks'
import { useEffect } from 'react'
import { finishGameThunk } from '../actions/user'

interface Props {
  curScene: Level
}

interface Level {
  levelId: number
  final: boolean
}

export default function SceneNextButton({ curScene }: Props) {
  const dispatch = useAppDispatch()
  const { userId } = useParams()

  useEffect(() => {
    if (curScene?.final) {
      dispatch(toggleTimer(false))
      dispatch(finishGameThunk(Number(userId)))
    }
  })

  return (
    <>
      {curScene?.final ? (
        <Link to={`/complete`}>
          <button className="blue-button">Close</button>
        </Link>
      ) : (
        <Link to={`level/${curScene?.levelId}`}>
          <button className="blue-button">Close</button>
        </Link>
      )}
    </>
  )
}
