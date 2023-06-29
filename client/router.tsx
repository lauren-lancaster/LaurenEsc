import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Start from './components/Start'
import Elevator from './components/Elevator'
import Scenes from './components/Scenes'
import Complete from './components/Complete'
import Game from './components/Game'
import Basement from './components/Basement'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Start />} />
      <Route path="/game" element={<Game />}></Route>
      <Route path="/game/:userId/scene/:id" element={<Scenes />}></Route>
      <Route
        path="/game/:userId/scene/:id/level/1"
        element={<Elevator />}
      ></Route>
      <Route
        path="/game/:userId/scene/:id/level/2"
        element={<Basement />}
      ></Route>
      <Route path="/game/:userId/complete" element={<Complete />}></Route>
      {/* <Route path="path/:params" element={<Component />}></Route> */}
    </Route>
  )
)

export default router
