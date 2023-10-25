import './Company.scss';
import PropTypes from 'prop-types';

export default function Company({ company, companyStatus }) {
	return (
		<div className={`Company ${companyStatus === 'opened' ? 'Company_opened' : 'Company_closed'}`}>
			<p className="name">
				<span>name</span> {company.name}
			</p>
			<p className="catchPhrase">
				<span>catchPhrase</span> {company.catchPhrase}
			</p>
			<p className="bs">
				<span>bs</span> {company.bs}
			</p>
		</div>
	);
}

Company.propTypes = {
	company: PropTypes.exact({
		name: PropTypes.string.isRequired,
		catchPhrase: PropTypes.string.isRequired,
		bs: PropTypes.string.isRequired,
	}),
	companyStatus: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
