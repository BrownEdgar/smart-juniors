import {useDispatch, useSelector} from "react-redux"
import {getUsersNameSelector, updateFilter} from "../../feauters/users/usersSlice"
import './Select.scss'

export default function Select() {
    const getWebsite = useSelector(getUsersNameSelector)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(updateFilter(e.target.value))
    }
    return (
            <div className="Select">
                <select name="Select" id="Select" onChange={handleChange}>
                    <option value={"allwebsites"}>All Websites</option>
                    {getWebsite.map(website => {
                        return <option value={website} key={website}>{website}</option>
                    })}
                </select>
            </div>
    )
}
