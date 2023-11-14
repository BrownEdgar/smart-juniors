import {Home,
    About,
    Blog,
    ErrorPages,
    Post
    } from './Pages'

import './App.scss'
// import ErrorPages from './Pages/ErrorPages'
import Layouts from './Components/Layouts/Layouts'
import { Navigate, Route, Routes,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import ROUTES from './routes/routes'
import { useState } from 'react'
import Register from './Pages/Register'
import Posts, { postLoader } from './Pages/Posts'



export default function App() {
const [value, seTvalue] = useState('Lorem ipsum dolor sit.') 

const router=createBrowserRouter(
    createRoutesFromElements(
     <Route path={ROUTES.HOME} element={<Layouts/>}>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.ABOUT} element={<About/>}/>
        <Route path={ROUTES.BLOG}  element={<Blog value={value}/>}/>
        <Route path={ROUTES.REGISTER} element={<Register/>}/>
        <Route path={ROUTES.POSTS} element={<Posts/>}  loader={postLoader}/>
        <Route path={ROUTES.POST} element={<Post/>}/>
        <Route path = '*'          element={<Navigate to={ROUTES.HOME}/>}/>
        {/* <Route path='*'        element={<ErrorPages/>}/> */}
    </Route>       
    )
)

return (
<div>
    <RouterProvider router={router}/>
</div>
)
}
