import './Post.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { useState } from 'react';

export default function Post({ post, toggleModal, setCurrentIndex }) {
	// const [removeCount, setRemoveCount] = useState(0);

	return (
		<div
			className={classNames('Post', {
				Post_removed: post.value.droped,
			})}
		>
			<h2 className="Post-userId">{post.value.id}</h2>
			<h1 className="Post-title">{post.value.title}</h1>
			<p className="Post-body">{post.value.body}</p>
			<button
				className="Post-delete"
				onClick={() => {
					toggleModal();
					setCurrentIndex(post.index);
					// setRemoveCount(removeCount + 1);
				}}
			>
				<i className="fa-solid fa-xmark"></i>
			</button>
		</div>
	);
}

Post.propTypes = {
	// posts: PropTypes.array.isRequired,
	post: PropTypes.object.isRequired,
	toggleModal: PropTypes.func.isRequired,
	setCurrentIndex: PropTypes.func.isRequired,
	// setIsEmpty: PropTypes.func.isRequired,
};
