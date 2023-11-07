
import Navbar from '../Register/Components/Navbar'
import Users from './Pages/Users'
import Register from './Pages/register'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layouts from './Components/Layaout/Layouts'
import "./App.scss"
import { useState, useEffect } from 'react'
import ROUTES from './Routes/routes'

export default function App() {
    const[users, setUsers] = useState([44])
    

    const router = createBrowserRouter(
        createRoutesFromElements(
        <Route path= {ROUTES.REGISTER} element={<Layouts />}>
            <Route index element={<Register setUsers= {setUsers} users={users} />} />
            <Route path={ROUTES.USERS} element={<Users users={users} /> } />
            <Route path='*' element='/register' />
        </Route>
        )
    )
  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  )
}
