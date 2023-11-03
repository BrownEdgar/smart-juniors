import PostCard from '../PostCard/PostCard';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ADD_INFO, SHUFFLE, CHANGE_POSTS_IDS } from '../../actionTypes';
import { useEffect } from 'react';
import './PostList.scss';

export default function PostList({ data, dispatch }) {
	useEffect(() => {
		axios({
			baseURL: 'https://jsonplaceholder.typicode.com/',
			url: 'posts',
			params: {
				_limit: data.count,
			},
		})
			.then((res) => dispatch({ type: ADD_INFO, payload: { posts: res.data } }))
			.catch((err) => console.log('Error:', err));
	}, []);

	const handleShuffleClick = () => {
		dispatch({ type: SHUFFLE });
	};

	const handleIDChangeClick = () => {
		dispatch({ type: CHANGE_POSTS_IDS });
	};

	return (
		<div className="PostList">
			<h2 className="PostList-title">ПОСТЫ</h2>
			<h5 className="PostList-developerName">Разработчик: {data.developers.at(-1)}</h5>
			<div className="PostList-controlSection">
				<button className="shuffleBtn" onClick={handleShuffleClick}>
					Перетасовать массив
				</button>
				<button className="idChange" onClick={handleIDChangeClick}>
					Именить ID
				</button>
				<p className="actionCount">Количество действий: {data.actions}</p>
			</div>
			{data.posts.length > 0 ? (
				<div className="PostList-content">
					{data.posts.map((post) => {
						return <PostCard post={post} dispatch={dispatch} key={post.id} />;
					})}
				</div>
			) : (
				<h2 className="PostList-noData">НЕТ ДАННЫХ</h2>
			)}
		</div>
	);
}

PostList.propTypes = {
	data: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired,
};
