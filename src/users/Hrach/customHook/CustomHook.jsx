import { useState } from 'react'


export default function CustomHook(state) {
  const [value, setValue] = useState([])

  const stringUpp = () => {
    const upper = []

    for (let i = 0; i < 4; i++) {
      const upperCas = Math.floor(Math.random() * 26) + 97;
      const randomUpper = String.fromCharCode(upperCas)
      upper.push(randomUpper)

    }
    setValue(upper)
  }
  const number = () => {
    const nums = []
    for (let i = 0; i < 4; i++) {
      const randomNums = Math.floor(Math.random() * state.max) + state.min;
      nums.push(randomNums + " ")
    }
    setValue(nums)
  }
  const stringLow = () => {
    const lower = [];

    for (let i = 0; i < 6; i++) {
      const lowerCas = Math.floor(Math.random() * 26) + 65;
      const resLower = String.fromCharCode(lowerCas);
      lower.push(resLower);
    }

    setValue(lower)

  }


  return [value, { stringUpp, number, stringLow }]
}


