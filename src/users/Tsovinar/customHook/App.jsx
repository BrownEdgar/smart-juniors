
import React from 'react'
import useRandom from './customHook'
import './App.scss'

export default function App() {
    const [value, {arr1, arr2, arr3 }] = useRandom({
      initialValue: [],
      quantity: 5,
      max: 1000,
      charmin: 65,
      charmax: 110,
    })

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={arr1}>Generate random num 1-1000</button>
      <button onClick={arr2}>Generate random Uppercase letters</button>
      <button onClick={arr2}>Generate random lowercase letters</button>
    </div>
  )
}
