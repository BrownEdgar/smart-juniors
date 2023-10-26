import "./Posts.scss"
import GroupBox from '../GroupBox/GroupBox'

export default function Posts({ posts, setCurId, toggleModal, setUserId }) {

  return (
    <div className='Posts'>
      {
        posts.length > 0
          ? posts.map(post => {
            return (
              <div className='Posts-item' key={post.id}>
                <h2 className='Posts-item_title'>{post.title}</h2>
                <p className='Posts-item_body'>{post.body}</p>
                <GroupBox>
                  <i className="fa-solid fa-circle-info" title='about user' onClick={() => setUserId(post.userId)}></i>
                  <i className="fa-solid fa-trash" title={`delete post ${post.id}`} onClick={() => {
                    toggleModal()
                    setCurId(post.id)
                  }}></i>
                </GroupBox>
              </div>
            )
          })
          : null
      }
    </div>
  )
}