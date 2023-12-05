import { useSelector } from "react-redux"
import { getAllPosts } from "../../features/posts/postsSlice"
import "./Posts.scss"

export default function Posts() {
  const { posts } = useSelector(getAllPosts)

  return (
    <div className="Posts">
      {
        posts?.map(post => (
          <div key={post.id} className="Posts-item">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>{post.tags.join(" ")}</p>
          </div>
        ))
      }
    </div>
  )
}
