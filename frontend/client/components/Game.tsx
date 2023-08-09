import { Outlet } from 'react-router-dom'
import GameNav from '../components/GameNav'

export default function Game() {
  return (
    <>
      <GameNav />
      <Outlet />
    </>
  )
}
