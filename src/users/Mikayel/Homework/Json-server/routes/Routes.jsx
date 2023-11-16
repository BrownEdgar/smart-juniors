import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Layouts from '../components/Layouts/Layouts';
import Home from '../pages/Home/Home';
import PeopleList from '../pages/PeopleList/PeopleList';
import AddPersonForm from '../pages/AddPersonForm/AddPersonForm';
import PersonDetail from '../pages/PersonDetail/PersonDetail';
import axios from 'axios';
import ROUTES from './routes'

export default function Routes() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/people');
        setPeople(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const updatePeopleList = async () => {
    try {
      const response = await axios.get('http://localhost:3000/people');
      setPeople(response.data);
    } catch (error) {
      console.error('Error updating people list:', error);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />} >
        <Route index element={<Home />} />
        <Route path={ROUTES.PEOPLE_LIST} element={<PeopleList people={people}/>} />
        <Route path={ROUTES.NEW_PERSON} element={<AddPersonForm updatePeopleList={updatePeopleList} />} />
        <Route path={ROUTES.PERSON_DETAIL} element={<PersonDetail updatePeopleList={updatePeopleList}/>} />
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

