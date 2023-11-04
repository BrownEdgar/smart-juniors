import React from 'react'
import CustomHook from './CustomHook'

export default function App() {
  const [value, { minus, plus, reset }] = CustomHook({
    initialValue: 1,
    min: 1,
    max: 50,
    step: 1
  })
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={minus}>Minus</button>
      <button onClick={plus}>Plus</button>
    </div>
  )
}
