import { useState } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import ROUTES from './routes/routes'
import { Home, About, Blog, ErrorPage } from './pages'
import Layouts from './components/Navbar/Layouts/Layouts'

export default function App() {
  const [value, setValue] = useState("Lorem ipsum dolor sit.")

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.BLOG} element={<Blog value={value} />} />
        {/* <Route path='*' element={<Navigate to={ROUTES.HOME} />} /> */}
        <Route path='*' element={<ErrorPage />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
