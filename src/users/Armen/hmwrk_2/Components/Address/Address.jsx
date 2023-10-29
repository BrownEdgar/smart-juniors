import './Address.scss';
import PropTypes from 'prop-types';

export default function Address({ address, addressStatus }) {
	return (
		<div className={`Address ${addressStatus[0] === 'opened' ? 'Address_opened' : 'Address_closed'}`}>
			<p className="Address-street">
				<span>street</span> {address.street}
			</p>
			<p className="Address-suite">
				<span>suite</span> {address.suite}
			</p>
			<p className="Address-city">
				<span>city</span> {address.city}
			</p>
			<p className="Address-zipcode">
				<span>zipcode</span> {address.zipcode}
			</p>
			<div className="Address-geo">
				<span>
					geo
					<small className="Address-latitude">latitude {address.geo.lat}</small>
					<small className="Address-longitude">longitude {address.geo.lng}</small>
				</span>
			</div>
		</div>
	);
}

Address.propTypes = {
	address: PropTypes.exact({
		street: PropTypes.string.isRequired,
		suite: PropTypes.string.isRequired,
		city: PropTypes.string.isRequired,
		zipcode: PropTypes.string.isRequired,
		geo: PropTypes.exact({
			lat: PropTypes.string.isRequired,
			lng: PropTypes.string.isRequired,
		}),
	}),
	addressStatus: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
