import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../../features/todos/todosSlice';
import './TodoSection.scss'

const TodoSection = () => {
  const users = useSelector(state => state.users);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [selectedUserId, setSelectedUserId] = useState('');
  const [todo, setTodo] = useState('');

  const handleAddTodo = (userId, todo) => {
    dispatch(addTodo({ userId, todo }));
    setTodo('');
  };

  const handleDeleteTodo = (userId, todo) => {
    dispatch(deleteTodo({ userId, todo }));
  };

  const renderTodoSection = () => {
    return (
      <div className='todo-section'>
        {/* <label htmlFor="userIdSelect">Select User ID:</label> */}
        <input
          type="text"
          placeholder="Enter todo"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <div className='select-add'>
          <select id="userIdSelect" onChange={e => setSelectedUserId(e.target.value)}>
            <option value="">Select User ID</option>
            {users.map(user => (
              <option key={user.userId} value={user.userId}>
                {user.userId}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              if (selectedUserId && todo) {
                handleAddTodo(selectedUserId, todo);
              } else {
                alert('You must write something!')
              }
            }}
          >
            Add Todo
          </button>
        </div>

        <ul>
          {todos.map(todo => (
            <li key={`${todo.userId}-${todo.todo}`}>
              <p className='user-id '>{todo.userId}</p>
              <p>{todo.todo}</p>
              <button onClick={() => handleDeleteTodo(todo.userId, todo.todo)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return <>{renderTodoSection()}</>;
};

export default TodoSection;
