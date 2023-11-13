import { useState } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import ROUTES from './routes/routes'
import { Home, About, Blog, ErrorPage, Posts, Post } from './pages'
import Layouts from './components/Navbar/Layouts/Layouts'
import { postLoader } from './pages/Posts'

import './App.scss'

export default function App() {
  const [value, setValue] = useState("Lorem ipsum dolor sit.")

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.BLOG} element={<Blog value={value} />} />
        <Route path={ROUTES.POSTS} element={<Posts x={1} options={'posts'} />} loader={postLoader} />
        <Route path={ROUTES.POST} element={<Post />} />
        {/* <Route path='*' element={<Navigate to={ROUTES.HOME} />} /> */}
        <Route path='*' element={<ErrorPage />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
