
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <footer>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ad!
         Debitis eveniet minima praesentium? Corrupti dolor alias illum il
         lo temporibus obcaecati magnam debitis mollitia, iusto perferendi
         s exercitationem dolorum unde eveniet pariatur, accusantium susci
         pit molestias ut fuga reiciendis! Eius ex doloremque at. Placeat 
         in explicabo quidem quod delectus debitis necessitatibus ad. Mole
         stiae eveniet delectus beatae voluptatibus ab ut consequuntur nu
         lla adipisci!</p>
      </footer>
    </div>
  )
}
