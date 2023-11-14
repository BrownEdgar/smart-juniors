import { Link, useNavigate } from "react-router-dom"
import ROUTES from "../routes/routes"




export default function ErrorPage() {
 const navigate = useNavigate()
const goHome=()=>{
    navigate({pathname:ROUTES.HOME}) // use useNavigate afther register button click!!!
}
    return (
    <div>
        <h1>404 | Page not found</h1>
        <Link to={ROUTES.HOME} >Go to home</Link> 
        <button onClick={goHome}>Go home</button>
    </div>
  )
}
