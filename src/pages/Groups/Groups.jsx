import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddBox } from 'react-icons/md';
import './Groups.scss';
import ROUTES from '../../routes/routes';
import { Company } from '../../components';

export default function Groups() {
	const groups = useSelector((state) => state.groups);

	return (
		<section className="Groups">
			<h1 className="pageTitle">Companies</h1>
			<div className="Groups-content">
				{groups.length > 0 ? (
					groups.map((group, index) => {
						return <Company group={group} index={index} key={group.id} />;
					})
				) : (
					<h3 className="Groups-noData">NO DATA</h3>
				)}
				<Link to={`/${ROUTES.ADD_GROUP}`}>
					<span className="Groups-addGroup" title="add new group">
						<MdAddBox />
					</span>
				</Link>
			</div>
		</section>
	);
}
