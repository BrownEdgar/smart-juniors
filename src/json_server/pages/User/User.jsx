import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import './User.scss';
import ROUTES from '../../routes/routes';

export default function User() {
	const { id } = useParams();
	const [currentUser, setCurrentUser] = useState({});
	const [ageNow, setAgeNow] = useState(null);

	useEffect(() => {
		axios(`http://localhost:3000/users/${id}`)
			.then((res) => {
				setCurrentUser(res.data);
				setAgeNow(new Date() - new Date(`${res.data.birthyear}-${res.data.birthmonth}-${res.data.birthday}`));
			})
			.catch((err) => console.log('Error:', err));
	}, []);

	return (
		<div className="User">
			<Link className="User-return" to={`/${ROUTES.USERS}`}>
				<IoReturnUpBackOutline />
				<span>Return</span>
			</Link>
			<div className="User-content">
				<div className="User-wrapper">
					<div className="User-mainInfo">
						<div className="User-imgWrapper">
							<img src={`/${currentUser.profile_image}`} alt={`abc`} />
						</div>
						<h2 className="User-name">
							{currentUser.firstname} {currentUser.lastname}
						</h2>
						<p className="User-knownAs">{currentUser.known_as}</p>
						<p className="User-age">{Math.round(ageNow / 1000 / 60 / 60 / 24 / 365)} years old</p>
					</div>
					<div className="User-additionalInfo">
						<p className="User-username">{currentUser.username}</p>
						<div className="User-about">
							<h2 className="infoTitle">About</h2>
							<>{currentUser.about}</>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
