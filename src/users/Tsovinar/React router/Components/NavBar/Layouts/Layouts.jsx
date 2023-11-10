import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
  return (
    <div className='layout'>
         <Navbar />
         <Outlet />
         <h1>Lorem ipsum dolor sit.</h1>
         <footer>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt sint sed officia? Dicta nesciunt omnis est nam, rem, quae sed, voluptatibus eius cupiditate beatae incidunt. Eligendi maxime consequatur odit saepe!</p>
        </footer>
         
    </div>
  )
}
