import PropTypes from 'prop-types';
import './Post.scss';

export default function Post({ post }) {
	return (
		<div className="Post">
			{/* <div className="Post-backPostWrapper">{post.body}</div> */}
			<div className="Post-title">
				<h4>{post.title}</h4>
			</div>
		</div>
	);
}

Post.propTypes = {
	post: PropTypes.object.isRequired,
};
