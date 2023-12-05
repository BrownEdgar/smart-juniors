import { useDispatch, useSelector } from 'react-redux'
import { getPosts, getPostsSettings } from '../../features/posts/postsSlice'
import { useEffect } from 'react'
import Posts from '../../components/Posts/Posts'
import Pagination from '../../components/Pagination/Pagination'
import SelectBox from '../../components/SelectBox/SelectBox'

import "./Home.scss"

export default function Home() {
  const dispatch = useDispatch()
  const {  page, perPage } = useSelector(getPostsSettings)

  useEffect(() => {
    dispatch(getPosts({
      url: "https://dummyjson.com/posts",
      config: {
        params: {
          limit: perPage,
          skip: (page * perPage) - perPage
        }
      }
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, perPage])

  return (
    <div className='Home'>
      <SelectBox/>
      <Posts />
      <Pagination/>
    </div>
  )
}
