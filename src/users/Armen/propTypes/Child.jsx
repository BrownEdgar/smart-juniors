import PropTypes from 'prop-types';

export default function Child({ albums }) {
	return (
		<div className="Child">
			{/* <h2>Count: {count}</h2>
			<h2>Name: {name.toUpperCase()}</h2>
			<h2>Name: {obj}</h2> */}
			{albums.map((album) => {
				return (
					<div key="album.id">
						<h2>{album.id}</h2>
						<h3></h3>
						<span></span>
					</div>
				);
			})}
		</div>
	);
}

// Child.defaultProps = {
// 	name: 'Karen',
// };

Child.propTypes = {
	// count: PropTypes.number.isRequired,
	// name: PropTypes.string,
	// gender: PropTypes.oneOf(['male', 'female']).isRequired,
	// age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	// obj: PropTypes.shape({
	// 	id: PropTypes.number.isRequired,
	// 	userId: PropTypes.string,
	// 	title: PropTypes.string,
	// 	body: PropTypes.string,
	// }),
	// obj2: PropTypes.exact({
	// 	id: PropTypes.number.isRequired,
	// 	userId: PropTypes.string,
	// 	title: PropTypes.string,
	// 	body: PropTypes.string,
	// }),
	arr: PropTypes.arrayOf(
		PropTypes.exact({
			userId: PropTypes.number,
			id: PropTypes.number.isRequired,
			title: PropTypes.string,
		})
	),
};
