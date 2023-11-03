import "./Posts.scss"
import { MdDelete } from "react-icons/md";
import * as Actions from "../../reducer/ActionTypes.js";


export default function Posts({ posts, dispatch }) {
  return (
    <div className="Posts">
      {
        posts.map(post => {
          return (
            <div className="Posts-item" key={post.id}>
              <span className="Posts-item_id">{post.id}</span>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <span className="Posts-item_btn" onClick={() => dispatch({ type: Actions.OPEN_POST_MODAL, payload: { id: post.id } })}><MdDelete /></span>
            </div>
          )
        })
      }
    </div>
  )
}
