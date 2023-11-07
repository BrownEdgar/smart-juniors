import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae ipsum! Sequi, modi. Nemo fuga quis ut debitis commodi voluptatibus consectetur perspiciatis rerum est voluptatum maiores, iure suscipit corporis, quisquam nihil aperiam quibusdam tempore! Quod vero quibusdam dicta labore quidem!</p>
      </footer>
    </div>
  )
}
