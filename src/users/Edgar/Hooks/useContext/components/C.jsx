import React, { useContext } from 'react'
import { MyContext } from '../contexts/constexts'


export default function C() {
  const { data } = useContext(MyContext)
  return (
    <div>
      {
        data.map(elem => {
          return (
            <p key={elem}>{elem}</p>
          )
        })
      }
      {/* old way */}
      {/* <MyContext.Consumer>
        {
          (value) => {
            return (
              <>
                <h2>{value.title}</h2>
                <button onClick={value.handleClick}>handleClick</button>
              </>
            )
          }
        }
      </MyContext.Consumer> */}




    </div>
  )
}
