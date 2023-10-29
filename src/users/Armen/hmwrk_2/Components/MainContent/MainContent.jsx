import Address from '../Address/Address';
import Company from '../Company/Company';
import './MainContent.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';

export default function MainContent(props) {
	const [addressStatus, setAddressStatus] = useState(['closed']);
	const [companyStatus, setCompanyStatus] = useState(['closed']);

	return (
		<div className="MainContent">
			<h2 className="MainContent-id">{props.id}</h2>
			<h2 className="MainContent-name" style={{ '--width': props.name.length }}>
				{props.name}
			</h2>
			<span className="MainContent-username">
				<span>username</span> {props.username}
			</span>
			<span className="MainContent-email">
				<span>email</span> {props.email}
			</span>
			<span className="MainContent-phone">
				<span>phone</span> {props.phone}
			</span>
			<span className="MainContent-website">
				<span>website</span> {props.website}
			</span>
			<div className="address">
				<button
					id="addr"
					className="MainContent-viewAddress"
					onClick={() =>
						setAddressStatus(() => {
							return [addressStatus[0] === 'opened' ? 'closed' : 'opened', props.id];
						})
					}
				>
					address
					<i
						className={classNames('fa-solid fa-chevron-down', {
							[`MainContent-viewAddress${addressStatus[0] === 'opened' ? '_opened' : '_closed'}`]: true,
						})}
					></i>
				</button>
				<Address address={props.address} addressStatus={addressStatus} />
			</div>
			<div className="company">
				<button
					id="comp"
					className="MainContent-viewCompany"
					onClick={() =>
						setCompanyStatus(() => {
							return [companyStatus[0] === 'opened' ? 'closed' : 'opened', props.id];
						})
					}
				>
					company
					<i
						className={classNames('fa-solid fa-chevron-down', {
							[`MainContent-viewCompany${companyStatus[0] === 'opened' ? '_opened' : '_closed'}`]: true,
						})}
					></i>
				</button>
				<Company company={props.company} companyStatus={companyStatus} />
			</div>
		</div>
	);
}

MainContent.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	website: PropTypes.string.isRequired,
	address: PropTypes.object.isRequired,
	company: PropTypes.object.isRequired,
};
