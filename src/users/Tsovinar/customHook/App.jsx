
import React from 'react'
import useRandom from './customHook'
import './App.scss'

export default function App() {
    const [value, {fillRandomNum, fillRandomUpper, fillRandomLower }] = useRandom({
      initialValue: [],
      quantity: 5,
      max: 1000,
      charmin: 65,
      charmax: 110,
    })

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={fillRandomNum}>Generate random num 1-1000</button>
      <button onClick={fillRandomUpper}>Generate random Uppercase letters</button>
      <button onClick={fillRandomLower}>Generate random lowercase letters</button>
    </div>
  )
}
