import { useDispatch, useSelector } from 'react-redux'
import { changePage, getAllPosts, getPostsSettings } from '../../features/posts/postsSlice'

import "./Pagination.scss";
import { useState } from 'react';
import classNames from 'classnames';

export default function Pagination() {
  const { total } = useSelector(getAllPosts)
  const { perPage } = useSelector(getPostsSettings)
  const dispatch = useDispatch()
  const [activePage, setActivePage] = useState(null)

  const pageNumber = [];
  for (let i = 1, totalNum = Math.ceil(total / perPage); i <= totalNum; i++) {
    pageNumber.push(i)
  }

  const pageChanger = (num) => {
    dispatch(changePage(num))
    setActivePage(num)
  }

  return (
    <ul className='Pagination'>
      {
        pageNumber.map(num => (
          <li key={num} onClick={() => pageChanger(num)} className={classNames({
            active: activePage === num
          })}>
            <span>{num}</span>
          </li>
        ))
      }
    </ul>
  )
}
