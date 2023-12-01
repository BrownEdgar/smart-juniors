import { useDispatch, useSelector } from 'react-redux'
import { getAllCountrySelector, updateFilter } from '../../feauters/books'
import './Select.css'
export default function Select() {

const uniqueCountry = useSelector(getAllCountrySelector)
const dispatch=useDispatch()

const handleChange=(e)=>{
    dispatch(updateFilter(e.target.value))
}

  return (
    <select name="country" id="country" defaultValue='all' onChange={handleChange}>
       <option value="all">All</option>
        {uniqueCountry.map(country=>{
            return <option value={country} key={country}>{country}</option>
        })}
    </select>
  )
}
