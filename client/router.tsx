import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Start from './components/Start'
import Example from './components/Example'
import Elevator from './components/Elevator'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Start />} />
      <Route path="/example" element={<Example />}></Route>
      <Route path="/game/evelator" element={<Elevator />}></Route>
      {/* <Route path="path/:params" element={<Component />}></Route> */}
    </Route>
  )
)

export default router
