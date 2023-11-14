import {Home,About,Blog,Posts,Register,Post,Errorpage} from './Pages'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom"
import ROUTES from "./routes/routes"
import { useState } from "react"
import Layouts from "./Components/Layouts/Layouts"
import './App.scss'
import { postsByLoader } from './Pages/Posts'



export default function App() {
  
  const [value, setValue] = useState('Lorem ipsum dolor sit.') 
  
  const router=createBrowserRouter(
    createRoutesFromElements(
    <Route path={ROUTES.HOME}      element={<Layouts/>} >
    <Route index                   element={ <Home/>}/>
    <Route path={ROUTES.ABOUT}     element={ <About/>}/>
    <Route path={ROUTES.BLOG}      element={ <Blog value={value}/>} />
    <Route path={ROUTES.POSTS}     element={ <Posts />} loader={postsByLoader} />
    <Route path={ROUTES.POST}      element={ <Post/>}/> 
    <Route path={ROUTES.REGISTER}  element={ <Register/>} />
    <Route path="*"                element={ <Errorpage/>}/>
  </Route>    
  ))

  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}
