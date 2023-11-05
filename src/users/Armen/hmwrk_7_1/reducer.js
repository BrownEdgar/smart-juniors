import { GET_TODOS, ALL_DONE, REMOVE_BY_ID, ADD_TODO, TO_JSON, TODO_DONE, REMOVE_VISUALLY } from './actionTypes';

export const initialValue = [];

export default function reducer(state = initialValue, { type, payload }) {
	switch (type) {
		case GET_TODOS:
			console.log(payload.todos);
			return payload.todos;
		case ALL_DONE:
			return allDone(state);
		case TODO_DONE:
			return todoDone(state, payload.todoId);
		case REMOVE_BY_ID:
			return removeById(state, payload.todoId);
		case REMOVE_VISUALLY:
			return removeVisually(state, payload.todoId);
		case ADD_TODO:
			return addTodo(state, payload.newTodo);
		case TO_JSON:
			return toJson(state);
		default:
			return state;
	}
}

function allDone(state) {
	return state.map((todo) => ({ ...todo, completed: true }));
}

function todoDone(state, todoId) {
	return state.map((todo) => (todoId === todo.id ? { ...todo, completed: true } : todo));
}

function removeById(state, todoId) {
	return state.filter((todo) => todo.id !== todoId);
}

function removeVisually(state, todoId) {
	return state.map((todo) => (todo.id === todoId ? { ...todo, removed: true } : todo));
}

function addTodo(state, newTodo) {
	const existIndex = state.findIndex((elem) => elem.todo.toLowerCase() === newTodo.toLowerCase());

	if (~existIndex && state[existIndex].completed) {
		state[existIndex] = { ...state[existIndex], completed: false };
		return [...state];
	}

	if (!~existIndex)
		return [...state, { id: Date.now(), userId: Math.ceil(Math.random() * 99), todo: newTodo, completed: false }];
}

function toJson(state) {
	return JSON.stringify(state);
}
