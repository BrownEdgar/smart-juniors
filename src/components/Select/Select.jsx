import { useDispatch, useSelector } from 'react-redux';
import { getALlCountrySelector, updateFilter } from '../../features/books/booksSlice';
import './Select.scss';

export default function Select() {
	const uniqueCountries = useSelector(getALlCountrySelector);
	const dispatch = useDispatch();
	const handleChange = (e) => {
		dispatch(updateFilter(e.target.value));
	};
	return (
		<select className="Select" name="country" id="country" onChange={handleChange} defaultValue="all">
			<option value="all" key="all">
				all
			</option>
			{uniqueCountries.map((country) => {
				return (
					<option value={country} key={country}>
						{country}
					</option>
				);
			})}
		</select>
	);
}
