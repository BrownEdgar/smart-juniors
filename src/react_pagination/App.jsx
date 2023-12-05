import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import ROUTES from './routes/routes'
import Layouts from './components/Layouts/Layouts'
import { Home, Slides } from './pages'

import "./App.scss"

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.SLIDES} element={<Slides />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}
