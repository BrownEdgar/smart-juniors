import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { useState } from 'react';
import Layouts from './components/Layouts/Layouts';
import Registration from './pages/Registration/Registration';
import Users from './pages/Users/Users';
import UserDetail from './pages/UserDetail/UserDetail';
import ROUTES from './routes/routes'
import './App.scss'

export default function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.REGISTRATION} element={<Layouts />} >
        <Route index element={<Registration addUser={addUser} />} />
        <Route path={ROUTES.USERS} element={<Users users={users} />} />
        <Route path="/user/:id" element={<UserDetail users={users} />} />
        {/* <Route path='*' element={<Navigate to={ROUTES.HOME} />} /> */}
        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
