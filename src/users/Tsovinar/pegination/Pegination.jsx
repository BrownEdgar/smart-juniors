import React from 'react'

export default function Pegination({totalPosts, perPage, handleClick}) {
  const arr = []
  const x = Math.ceil(totalPosts / perPage)
  // console.log(x, totalPosts, perPage)

  for (let i = 1; i <= x ; i++) {
        arr.push(i) 
      }
  return (
    <div className='pages'>
      {
        arr.map(num => 
        
          <li key={num} onClick={() => handleClick(num)}>{num}</li>
        )
      }
    </div>
  )
}
