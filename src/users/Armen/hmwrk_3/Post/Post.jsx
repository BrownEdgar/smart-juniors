import './Post.scss';
import PropTypes from 'prop-types';

export default function Post({ post }) {
	return (
		<div className="Post">
			{/* <h2 className="Post-userId">1</h2>
			<h1 className="Post-title">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h1>
			<p className="Post-body">
				quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas
				totam\nnostrum rerum est autem sunt rem eveniet architecto
			</p> */}
			<h2 className="Post-userId">{post.id}</h2>
			<h1 className="Post-title">s{post.title}</h1>
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
