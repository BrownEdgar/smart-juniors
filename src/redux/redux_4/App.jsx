import Users from './components/Users/Users';
import UsersForm from './components/UsersForm/UsersForm'

import TodosForm from './components/TodosForm/TodosForm';
import Todos from './components/Todos/Todos';

import "./App.scss"

export default function App() {
  return (
    <div className='App'>
      <div className='App-leftSide'>
        <UsersForm />
        <Users />
      </div>
      <div className='App-rightSide'>
        <TodosForm />
        <Todos />
      </div>
    </div>
  )
}
