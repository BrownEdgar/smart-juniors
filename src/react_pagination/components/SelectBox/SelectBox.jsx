import { useDispatch } from "react-redux"
import { changePerPage } from "../../features/posts/postsSlice"
import { useRef } from "react"

import "./SelectBox.scss"

export default function SelectBox() {
  const dispatch = useDispatch()
  const select = useRef(null)

  const selectChange = () => {
    dispatch(changePerPage(+select?.current.value))
  }

  return (
    <div className='SelectBox'>
      <select name="select" ref={select} defaultValue={10} onChange={selectChange}>
        <option value="8">Limit: 8</option>
        <option value="10">Limit: 10</option>
        <option value="12">Limit: 12</option>
        <option value="16">Limit: 16</option>
        <option value="20">Limit: 20</option>
      </select>
    </div>
  )
}
