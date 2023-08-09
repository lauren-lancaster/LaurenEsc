import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { UserHighscore } from '../../models/users'
import { useEffect } from 'react'
import * as userActions from '../actions/user'
import { Link } from 'react-router-dom'
import logo from '/images/static-esc-logo.png'

export default function Leaderboard() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.getUsersThunk())
  }, [dispatch])

  const players = useAppSelector((state) => state.user) as UserHighscore[]
  //const sortPlayers = players
  //   .map((player) => [player.id, player.username, player.time])
  //   .sort((a, b) =>

  const sortPlayers = players.sort((a, b) => a.time - b.time)

  return (
    <>
      <div className="grey-background">
        <div className="screen" style={{ animation: 'none' }}>
          <h2 className="screen-message">HIGHSCORES</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {sortPlayers.map((player) => (
                <tr key={player.id}>
                  <td>{player.username}</td>
                  <td className="number">
                    {Math.floor((player.time % 3600) / 60)
                      .toString()
                      .padStart(2, '0')}
                    :
                    {Math.floor(player.time % 60)
                      .toString()
                      .padStart(2, '0')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/">
            <button className="blue-button blue-button-sml">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
