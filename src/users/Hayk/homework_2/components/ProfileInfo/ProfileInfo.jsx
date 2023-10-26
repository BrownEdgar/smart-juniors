import { useEffect, useState } from 'react'
import "./ProfileInfo.scss"
import Button from '../Button/Button'
import axios from 'axios'
import Posts from '../Posts/Posts'

export default function ProfileInfo({ profile }) {
  const [posts, setPosts] = useState([])
  const [hidePosts, setHidePosts] = useState(true)

  useEffect(() => {
    axios(`posts?userId=${profile.id}`)
      .then(res => setPosts(res.data))
      .catch(error => console.log(error))
      setHidePosts(true)
  }, [profile])

  return (
    <div className='ProfileInfo'>
      <h1 className='ProfileInfo-name'>{profile.name} ({profile.username})</h1>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone} <i className="fa-solid fa-phone"></i></p>
      <p>Website: {profile.website} <i className="fa-solid fa-paperclip"></i></p>
      <p>Address: {`${profile.address.city}, ${profile.address.street}, ${profile.address.suite}`}</p>
      <Button title={`${profile.name} Posts`} onClick={() => setHidePosts(!hidePosts)}/>
      {
        posts.length > 0
          ? <Posts posts={posts} hidePosts={hidePosts}/>
          : null
      }
    </div>
  )
}
