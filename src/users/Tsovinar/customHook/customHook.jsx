import { useState } from 'react'

export default function useRandom(state) {
  const [value, setValue] = useState(state.initialValue)

  const arr1 = () => {
    setValue(JSON.stringify(new Array(state.quantity)
      .fill()
      .map(() => Math.round(Math.random() * state.max + 1))))
  }


  const arr2 = () => {
    setValue(JSON.stringify(new Array(state.quantity)
      .fill()
      .map(() => String.fromCharCode(Math.round(Math.random() * 10 + state.charmin)))))
  }

  const arr3 = () => {
    setValue(JSON.stringify(new Array(state.quantity)
      .fill()
      .map(() => String.fromCharCode(Math.round(Math.random() * 10 + state.charmax)))))
  }


  return [value, { arr1, arr2, arr3 }]
}
