import React, { useState } from 'react'

export default function CustomHook(state) {
  const [value, setValue] = useState(state.initialValue)

  const minus = () => setValue((value > state.min) ? value - state.step : value)
  const plus = () => setValue((value < state.max) ? value + state.step : value)
  const reset = () => setValue(initialValue)


  return [value, { minus, plus, reset }]
}
