


export default function Posts({posts}) {
  return (
    <div >
        <h1>Our Posts</h1>
          {
        posts.map(post =>{
            return (
                <div key={post.id} className="Posts">
                    <p>{post.title}</p>
                </div>
            ) 
        })
     }
    </div>
  )
}
