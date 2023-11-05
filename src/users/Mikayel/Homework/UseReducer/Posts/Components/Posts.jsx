import React from "react";

export default function Posts({ posts, onDelete }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={post.id}>
          <ul>
            <li>
              {post.id}. 
              {post.title}
              <button onClick={() => onDelete(index)}><i class="fa-solid fa-trash-can"></i></button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}
