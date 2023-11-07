import React from 'react'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Navbar from './Components/NavBar/Navbar'
import { Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom'
import ROUTES from './routes/routes'
import Errorpage from './Pages/Errorpage'
import { useState } from 'react'
import Layouts from './Components/NavBar/Layouts/Layouts'


export default function App() {
    const [value, setValue] = useState("lorem ipsum dolor")

    const router = createBrowserRouter(
        createRoutesFromElements(
        <Route path= {ROUTES.HOME} element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.BLOG} element={<Blog value={value}  /> } />
            <Route path='*' element={<Navigate to= {ROUTES.HOME} />} />
        </Route>
        )
    )

  return (
    <div>
       
        <RouterProvider router= {router} />
        
    </div>
  )
}
