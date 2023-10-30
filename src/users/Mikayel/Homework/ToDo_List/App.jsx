import { useState, useEffect } from 'react';
import axios from 'axios'
import Modal from './Modal';
import List from './List';
import './App.scss';

export default function App() {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    const [editText, setEditText] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todoCount, setTodoCount] = useState(0);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('todoData')) || [];
        setTodos([...storedData]);
    }, []);

    useEffect(() => {
        setTodoCount(todos.length);
    }, [todos]);

    useEffect(() => {
        axios.get('https://dummyjson.com/todos')
            .then((res) => setTasks(res.data.todos.map(item => item.todo)))
            .catch(err => console.log(err))
    }, [])

    const updateLocalStorage = () => {
        localStorage.setItem('todoData', JSON.stringify([...todos]));
    };

    const generateRandomTasks = () => {
        const selectedTasks = [];
        const tasksCopy = [...tasks];
        while (selectedTasks.length < 10 && tasksCopy.length > 0) {
            const randomIndex = Math.floor(Math.random() * tasksCopy.length);
            selectedTasks.push(tasksCopy[randomIndex]);
            tasksCopy.splice(randomIndex, 1);
        }
        setTodos([...todos, ...selectedTasks.map(task => ({ text: task, checked: false }))]);
        updateLocalStorage();
    };

    const addTodo = () => {    
        if (inputText.trim() === '') {
            alert("You must write something!");
            return;
        }
        if (todos.some(todo => todo.text === inputText.trim())) {
            alert("Todo already exists!");
            setInputText('');
            return;
        }
        setTodos([...todos, { text: inputText.trim(), checked: false }]);
        setInputText('');
        updateLocalStorage();
    };

    const deleteTodo = (event, index) => {
        event.stopPropagation();
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
        updateLocalStorage();
    };

    const toggleTodo = index => {
        const updatedTodos = [...todos];
        updatedTodos[index].checked = !updatedTodos[index].checked;
        setTodos(updatedTodos);
        updateLocalStorage();
    };

    const openEditModal = (event, index) => {
        event.stopPropagation();
        setEditIndex(index);
        setIsModalOpen(true);
        setEditText(todos[index].text);
    };

    const saveEdit = () => {
        if (editText.trim() !== '') {
            const updatedTodos = [...todos];
            updatedTodos[editIndex].text = editText;
            setTodos(updatedTodos);
            setEditIndex(null);
            updateLocalStorage();
        } else {
            alert('You must write something!');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditIndex(null);
    };

    return (
        <div className="App">
            <div className="App-header">
                <h2>My To Do List</h2>
                <p className="App-todo-count">Todos: {todoCount}</p>
                <div className='App-wrapper'>
                    <button className="App-btn" onClick={generateRandomTasks}>
                        Generate ToDos
                    </button>
                    <input
                        type="text"
                        placeholder="Title..."
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                    />
                    <button className="App-btn" onClick={addTodo}>
                        Add
                    </button>
                </div>
            </div>
            <List 
                todos={todos}
                toggleTodo={toggleTodo}
                openEditModal={openEditModal}
                deleteTodo={deleteTodo}
            />
            {editIndex !== null && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onEdit={saveEdit}
                    editText={editText}
                    setEditText={setEditText}
                />
            )}
        </div>
    );
};

