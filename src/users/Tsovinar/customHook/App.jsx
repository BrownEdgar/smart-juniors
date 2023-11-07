
import React from 'react'
import useRandom from './customHook'
import './App.scss'

export default function App() {
<<<<<<< HEAD
    const [value, {fillRandomNum, fillRandomUpper, fillRandomLower }] = useRandom({
      initialValue: [],
      quantity: 5,
      max: 1000,
      charmin: 65,
      charmax: 110,
    })
=======
  const [value, { arr1, arr2, arr3 }] = useRandom({
    initialValue: [],
    quantity: 5,
    max: 1000,
    charmin: 65,
    charmax: 110,
  })
>>>>>>> da3aee8d193368f3654da7acc5ca2771292e962d

  return (
    <div>
      <h1>{value}</h1>
<<<<<<< HEAD
      <button onClick={fillRandomNum}>Generate random num 1-1000</button>
      <button onClick={fillRandomUpper}>Generate random Uppercase letters</button>
      <button onClick={fillRandomLower}>Generate random lowercase letters</button>
=======
      <button onClick={arr1}>Generate random num 1-1000</button>
      <button onClick={arr2}>Generate random Uppercase letters</button>
      <button onClick={arr3}>Generate random lowercase letters</button>
>>>>>>> da3aee8d193368f3654da7acc5ca2771292e962d
    </div>
  )
}
