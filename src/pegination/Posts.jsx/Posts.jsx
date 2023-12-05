import React from 'react'

export default function Posts({allPosts}) {
  return (
    <div>
        {
            allPosts.map(post => <li key={post.id}>{post}</li>)
        }
    </div>
  )
}
