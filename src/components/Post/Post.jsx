import PropTypes from 'prop-types';
import './Post.scss';

export default function Post({ post }) {
	return (
		<div className="Post">
			<h2 className="Post-title">{post.title}</h2>
		</div>
	);
}

Post.propTypes = {
	post: PropTypes.object.isRequired,
};
