import './Post.scss';
import PropTypes from 'prop-types';

export default function Post({ post }) {
	return (
		<div className="Post">
			<h2 className="Post-userId">{post.userId}</h2>
			<h1 className="Post-title">{post.title}</h1>
			<p className="Post-body">{post.body}</p>
			<button className="Post-delete">
				<i className="fa-regular fa-circle-xmark"></i>
			</button>
		</div>
	);
}

Post.propTypes = {
	post: PropTypes.object.isRequired,
};
