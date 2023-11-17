import { useState } from 'react'
import './App.scss'
import classNames from 'classnames'

const buttonsArray = ['One', "Two", "Three"]

export default function App() {
  const [text, setText] = useState(buttonsArray[0])


  const toggleActive = (elem) => setText(elem)
  return (
    <>

      <div className='buttons'>
        <h1>{text}</h1>
        {
          buttonsArray.map(elem => {
            return (
              <button
                key={elem}
                className={classNames({
                  [`btn-${elem}`]: true
                })}
                onClick={() => toggleActive(elem)}>
                {elem}
              </button>
            )
          })
        }

      </div>
    </>
  )
}
