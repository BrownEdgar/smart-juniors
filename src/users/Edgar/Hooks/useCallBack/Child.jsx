import React from 'react'

export default function Child() {
  console.log("child render")
  let sum = 0;

  for (let i = 0; i < 1e6; i++) {
    sum += i
  }

  return (
    <div>
      <h1>Total: {sum}</h1>
    </div>
  )
}
