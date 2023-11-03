import React from 'react'

export default function Developers({ developers }) {
  return (
    <div>
      <h3>Developers:</h3>
      <ul>
        {developers.map((developer, index) => (
          <li key={index}>{developer}</li>
        ))}
      </ul>
    </div>
  )
}