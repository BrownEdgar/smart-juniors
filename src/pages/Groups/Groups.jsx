import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddBox } from 'react-icons/md';
import './Groups.scss';
import ROUTES from '../../routes/routes';

export default function Groups() {
	const groups = useSelector((state) => state.groups);

	return (
		<section className="Groups">
			<Link to={`/${ROUTES.ADD_GROUP}`}>
				<span className="Groups-addGroup" title="add new group">
					<MdAddBox />
				</span>
			</Link>
			<h1 className="pageTitle">Groups</h1>
			<div className="Groups-content">
				{groups.length > 0 ? (
					groups.map((group) => {
						return (
							<div className="Groups-group" key={group.id}>
								<h2 className="Groups-groupName">{group.name}</h2>
								<div className="Groups-groupAddress Groups-contact">
									<p className="label">Address:</p>
									<p className="value">{group.contact.address}</p>
								</div>
								<div className="Groups-groupPhone Groups-contact">
									<p className="label">Phone:</p>
									<p className="value">{group.contact.phone}</p>
								</div>
								<div className="Groups-groupEmail Groups-contact">
									<p className="label">Email:</p>
									<p className="value">{group.contact.email}</p>
								</div>
							</div>
						);
					})
				) : (
					<h3 className="Groups-noData">NO DATA</h3>
				)}
			</div>
		</section>
	);
}
