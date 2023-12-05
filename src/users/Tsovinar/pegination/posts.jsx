import React from 'react'

export default function posts({allPosts}) {
  return (
    <div className='posts'>
       {
            allPosts.map(post => <li key={post.id}>{post.title.toUpperCase()}</li>)
        }
    </div>
  )
}
