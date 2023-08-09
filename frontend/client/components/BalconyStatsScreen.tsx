import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useEffect } from 'react'
import { User } from '../../models/users'
import * as actions from '../actions/user'

export default function BalonyStatsScreen() {
  const user = useAppSelector((state) => state.user) as User

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(actions.getPlayingUserThunk())
  }, [dispatch])

  return (
    <>
      <div className="screen" id="game-stats">
        <p>{user.username}</p>
        <p>
          <strong>Vapes:</strong>
        </p>
          <p id="vape-count"></p>
        {/* <strong>Pipes:</strong>
        <p id="pipe-count"></p>{' '} */}
        <p>
          <strong>Lives:</strong>
        </p>
        <p id="missed-score"></p>
      </div>
    </>
  )
}
