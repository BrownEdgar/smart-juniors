import React, { useState } from 'react'
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from "react-router-dom";
import { Home, About, Blog, News, SignUp, Users, ErrorPage } from "./pages/index";

import "./App.scss"
import ROUTES from './routes/routes';
import Layouts from './components/Layouts/Layouts';

export default function App() {
  const [users, setUsers] = useState([])
console.log(users);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts/>}>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.ABOUT} element={<About/>}/>
        <Route path={ROUTES.NEWS} element={<News/>}/>
        <Route path={ROUTES.BLOG} element={<Blog/>}/>
        <Route path={ROUTES.SIGNUP} element={<SignUp users={users} setUsers={setUsers}/>}/>
        <Route path={ROUTES.USERS} element={<Users users={users}/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
