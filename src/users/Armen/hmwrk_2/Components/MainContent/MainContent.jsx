import Address from '../Address/Address';
import Company from '../Company/Company';
import './MainContent.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function MainContent(props) {
	const [addressStatus, setAddressStatus] = useState(['closed']);
	const [companyStatus, setCompanyStatus] = useState(['closed']);

	const handleMouseEnter = (e, id) => {
		if (e.target.tagName === 'BUTTON' && e.target.id === 'addr') {
			setAddressStatus(['opened', id]);
		}
		if (e.target.tagName === 'BUTTON' && e.target.id === 'comp') {
			setCompanyStatus(['opened', id]);
		}
	};

	const handleMouseLeave = (e, id) => {
		if (e.target.tagName === 'BUTTON' && e.target.id === 'addr') {
			setAddressStatus(['closed', id]);
		}
		if (e.target.tagName === 'BUTTON' && e.target.id === 'comp') {
			setCompanyStatus(['closed', id]);
		}
	};

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
					onMouseEnter={(e) => handleMouseEnter(e, props.id)}
					onMouseLeave={(e) => handleMouseLeave(e, props.id)}
					// onClick={() => }
				>
					address
					<i className="fa-solid fa-chevron-down"></i>
				</button>
				<Address address={props.address} addressStatus={addressStatus.id === props.id ? addressStatus : ''} />
			</div>
			<div className="company">
				<button
					id="comp"
					className="MainContent-viewCompany"
					onMouseEnter={(e) => handleMouseEnter(e, props.id)}
					onMouseLeave={(e) => handleMouseLeave(e, props.id)}
					// onClick={() => }
				>
					company
					<i className="fa-solid fa-chevron-down"></i>
				</button>
				<Company company={props.company} companyStatus={companyStatus.id === props.id ? companyStatus : ''} />
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
