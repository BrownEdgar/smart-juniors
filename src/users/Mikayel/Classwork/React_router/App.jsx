import { useState } from 'react'
import { Home, About, Blog, ErrorPage, Posts, Post } from './pages'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ROUTES from './routes/routes'
import Layouts from './components/Layouts/Layouts'
import { postLoader } from './pages/Posts'
import './App.scss'


export default function App() {
  const [value, setValue] = useState("Lorem ipsum dolor sit.")

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />} >
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.BLOG} element={<Blog value={value} />} />
        <Route path={ROUTES.POSTS} element={<Posts />} loader={postLoader} />
        <Route path={ROUTES.POST} element={<Post />} />
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
