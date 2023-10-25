import { useState, useEffect } from 'react';
import Child from './Child';
import Axios from 'axios';
import './App.scss';

export default function App() {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		Axios('https://jsonplaceholder.typicode.com/albums')
			.then((res) => setAlbums(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="App">
			<h1>App component</h1>
			<Child
				// count={count}
				// gender="male"
				// obj={{ id: 1, userId: '1', title: 'lorem', body: 'lorem ipsum' }}
				// obj2={{ id: 1, userId: '1', title: 'lorem', body: 'lorem ipsum' }}
				albums={albums}
			/>
		</div>
	);
}
