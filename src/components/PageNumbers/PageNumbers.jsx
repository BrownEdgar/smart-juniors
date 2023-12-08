import PropTypes from 'prop-types';
import './PageNumbers.scss';

export default function PageNumbers({ totalPosts, perPage, changePage }) {
	const numbers = new Array(Math.ceil(totalPosts / perPage)).fill().map((_, i) => i + 1);

	return (
		<div className="PageNumbers">
			{numbers.map((number) => {
				return (
					<div
						key={number}
						className="PageNumbers-pageNumber"
						onClick={() => {
							changePage(number);
						}}
					>
						{number}
					</div>
				);
			})}
		</div>
	);
}

PageNumbers.propTypes = {
	totalPosts: PropTypes.number.isRequired,
	perPage: PropTypes.number.isRequired,
	changePage: PropTypes.func.isRequired,
};
