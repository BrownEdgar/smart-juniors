import {useDispatch} from "react-redux"
import {addUser} from "../../feauters/users/usersSlice"
import './Form.scss'

export default function Form() {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault
        const {name} = e.target
        const {lastname} = e.target
        dispatch(addUser({name: name.value, lastname: lastname.value}))
    }

    return (
            <div className="Form">
                <form action="" onSubmit={handleSubmit} >
                    <input type="text" id="name" required placeholder="name"/>
                    <input type="text" id="lastname" required placeholder="lastname"/>
                    <input type="submit" value='save' className="Submit"/>
                </form>
            </div>
    )
}
