import { useRef } from "react"
import "./SearchBar.scss"

export default function SearchBar() {
  const search = useRef(null)

  const magnifyingClick = () => {

  }

  return (
    <div className="SearchBar">
      <input type="search" name="search" id="search" ref={search}/>
      <i className="fa-solid fa-magnifying-glass" onClick={() => magnifyingClick}></i>
    </div>
  )
}
