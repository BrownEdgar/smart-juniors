import {useState} from 'react'

export default function useRandom(state) {
const [value, setValue] =  useState(state.initialValue)

const fillRandomNum = () => {setValue(JSON.stringify(new Array(state.quantity).fill().map((elm, ind) => elm = Math.round(Math.random() * state.max + 1))))
}


const fillRandomUpper = () => {setValue(JSON.stringify(new Array(state.quantity).fill().map((elm  => String.fromCharCode(Math.round(Math.random() * 10 + state.charmin))))))
    }
    
const fillRandomLower = () => {setValue(JSON.stringify(new Array(state.quantity).fill().map((elm => String.fromCharCode(Math.round(Math.random() * 10 + state.charmax))))))
}


  return [value, {fillRandomNum, fillRandomUpper, fillRandomLower}]
}
