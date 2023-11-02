import { useEffect, useReducer } from 'react'
import reducer, { initialValue } from './reducer'
import { FILL_ARRAY, SUM_OF_ARRAY } from './actionTypes';

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);


  useEffect(() => {
    dispatch({ type: FILL_ARRAY, payload: { quantity: 30 } })
  }, [])


  return (
    <div>
      <h2>Count: {JSON.stringify(count)}</h2>
      <button onClick={() => dispatch({ type: SUM_OF_ARRAY })}>sum</button>
    </div>
  )
}
