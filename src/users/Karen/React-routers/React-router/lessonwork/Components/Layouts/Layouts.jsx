import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"



export default function Layouts() {
  return (
    <div>
        <Navbar/>
            <Outlet/>
        <footer>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Expedita, ab. Vero accusantium molestias corrupti nesciu
                ad! Laborum similique repellendus doloribus ipsum qui ma
                eius at quas error animi dignissimos, illum laboriosam d
                explicabo, inventore repudiandae perferendis molestias h</p>
        </footer>
    </div>
  )
}
