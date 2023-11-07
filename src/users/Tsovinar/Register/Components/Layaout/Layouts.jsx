import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <footer>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque placeat voluptate alias? Ratione commodi, error distinctio sunt architecto doloremque, dolore voluptatibus provident laboriosam cum consequuntur quis! Dolores vero corrupti officiis, autem enim explicabo nisi neque vitae accusantium sequi aliquid aut, ratione placeat culpa?</p>
        </footer>
    </div>
  )
}
