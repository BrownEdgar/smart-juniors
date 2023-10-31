import { useEffect, useState } from 'react'
import "./App.scss"
import Modal from './components/Modal/Modal'
import axios from 'axios'
import Posts from './components/Posts/Posts';
import Button from './components/Button/Button';
import User from './components/User/User';

export default function App() {
  axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

  const [posts, setPosts] = useState([])
  const [isOpen, setisOpen] = useState(false)
  const [curId, setCurId] = useState(null)
  const [userId, setUserId] = useState(null)
  const [user, setUser] = useState({})

  const toggleModal = () => setisOpen(!isOpen)

  const deletePost = (postId) => {
    setPosts([...posts].filter((post) => post.id !== postId))
    toggleModal()
  }

  useEffect(() => {
    axios("posts")
      .then(res => setPosts(res.data))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    userId &&
      axios(`users/${userId}`)
        .then(res => setUser(res.data))
        .catch(error => console.log(error))
  }, [userId])

  return (
    <div className='App'>
      {
        isOpen
          ? <Modal loading="fromScale" toggleModal={toggleModal} message="Do you really want to delete this post?">
            <Button title="Yes" theme="prime" events={{ onClick: () => deletePost(curId) }} />
            <Button title="No" theme="prime" events={{ onClick: toggleModal }} />
          </Modal>
          : null
      }
      {
        user.id
          ? <Modal bgColor="antiquewhite" loading="fromTop" toggleModal={() => { setUserId(null); setUser({}) }}>
            <User user={user} />
          </Modal>
          : null
      }
      <div className='App-root'>
        <Posts posts={posts} setCurId={setCurId} toggleModal={toggleModal} setUserId={setUserId} />
      </div>
    </div>
  )
}
