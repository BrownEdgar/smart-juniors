import './App.scss';
import { useReducer } from 'react';
import reducer, { initialValue } from './reducer';
import PostList from './components/PostList/PostList';
import DataInput from './components/DataInput/DataInput';
import Modal from './components/Modal/Modal';

export default function App() {
	const [data, dispatch] = useReducer(reducer, initialValue);

	return (
		<div className="App">
			{data.modalIsOpen ? (
				<Modal>
					<DataInput data={data} dispatch={dispatch} />
				</Modal>
			) : (
				<div className="App-wrapper">
					<PostList data={data} dispatch={dispatch} />
				</div>
			)}
		</div>
	);
}
