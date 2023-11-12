import React from 'react'
import useRequest from '../Hooks/useRequest'

export default function App() {
  const [req] = useRequest({
    url: "posts",
    config: {
      params: {
        _limit: 10
      }
    }
  })

  return (
    <div>
      {
        req?.data?.length > 0
          ? req.data.map(post => {
            return (
              <p key={post.id}>{post.title}</p>
            )
          })
          : null
      }
    </div>
  )
}
