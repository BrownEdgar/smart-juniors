import { useState } from 'react'

export default function useRandom(state) {
  const [value, setValue] = useState(state.initialValue)

<<<<<<< HEAD
const fillRandomNum = () => {setValue(JSON.stringify(new Array(state.quantity).fill().map((elm, ind) => elm = Math.round(Math.random() * state.max + 1))))
}


const fillRandomUpper = () => {setValue(JSON.stringify(new Array(state.quantity).fill().map((elm  => String.fromCharCode(Math.round(Math.random() * 10 + state.charmin))))))
    }
    
const fillRandomLower = () => {setValue(JSON.stringify(new Array(state.quantity).fill().map((elm => String.fromCharCode(Math.round(Math.random() * 10 + state.charmax))))))
}


  return [value, {fillRandomNum, fillRandomUpper, fillRandomLower}]
=======
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
>>>>>>> da3aee8d193368f3654da7acc5ca2771292e962d
}
