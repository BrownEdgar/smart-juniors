import { useDispatch, useSelector } from 'react-redux'

import { decrement, increment } from './features/count/countSlice';
import {
  popArray,
  pushValue,
  sortArray,
  shiftArray,
  unshiftArray,
  reverseArray
} from './features/array/arraySlice';

import "./App.scss"

export default function App() {
  const count = useSelector((state) => state.count)
  const array = useSelector((state) => state.array)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <div className='App-header'>
        <button onClick={() => dispatch(decrement())}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className='App-content'>
        <div className='App-content_btns'>
          <button onClick={() => dispatch(pushValue(count))}>push</button>
          <button onClick={() => dispatch(sortArray())}>sort</button>
          <button onClick={() => dispatch(popArray())}>pop</button>
          <button onClick={() => dispatch(shiftArray())}>shift</button>
          <button onClick={() => dispatch(unshiftArray(count))}>unshift</button>
          <button onClick={() => dispatch(reverseArray())}>reverse</button>
        </div>
        <div className='App-content_array'>{
          array.map((elem, index) => {
            return (
              <span key={index}>{elem}</span>
            )
          })
        }</div>
      </div>
    </div>
  )
}
