import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Start from './components/Start'
import Elevator from './components/Elevator/Elevator'
import Scenes from './components/Scenes'
import Complete from './components/Complete'
import Welcome from './components/Welcome'
import Game from './components/Game'
import Basement from './components/Basement'
import Leaderboard from './components/Leaderboard'
import Balcony from './components/Balcony'
import WordleForm from './components/WordleForm'
import LightsOff from './components/LightsOff'
import About from './components/About'
import GameOver from './components/GameOver'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Start />} />
      <Route path="game" element={<Game />}>
        <Route path="welcome" element={<Welcome />}></Route>
        <Route path=":userId/scene/:id" element={<Scenes />}></Route>
        <Route path=":userId/scene/:id/level/1" element={<LightsOff />}></Route>
        <Route path=":userId/scene/:id/level/2" element={<Elevator />}></Route>
        <Route path=":userId/scene/:id/level/3" element={<Basement />}></Route>
        <Route
          path=":userId/scene/:id/level/4"
          element={<WordleForm />}
        ></Route>
        <Route path=":userId/scene/:id/level/5" element={<Balcony />}></Route>
      </Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/leaderboard" element={<Leaderboard />}></Route>
      <Route path="/complete" element={<Complete />}></Route>
      <Route path="/gameover" element={<GameOver />}></Route>
      {/* <Route path="path/:params" element={<Component />}></Route> */}
    </Route>
  )
)

export default router
