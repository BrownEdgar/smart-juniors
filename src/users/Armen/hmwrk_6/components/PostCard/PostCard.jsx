import './PostCard.scss';
import PropTypes from 'prop-types';
import { REMOVE_POST } from '../../actionTypes';

export default function PostCard({ post, dispatch }) {
	const handleRemoveClick = (postID) => {
		dispatch({ type: REMOVE_POST, payload: { postID: postID } });
	};

	return (
		<div className="PostCard">
			<button className="PostCard-removePost" onClick={() => handleRemoveClick(post.id)}>
				Удалить
			</button>
			<p className="PostCard-userId">{post.userId}</p>
			<p className="PostCard-id">{post.id}</p>
			<p className="PostCard-title">{post.title}</p>
			<p className="PostCard-body">{post.body}</p>
		</div>
	);
}

PostCard.propTypes = {
	post: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired,
};
