import React from 'react'
import "./ImageBox.scss"

export default function ImageBox({images}) {
  return (
    <div className='ImageBox'>
      {
        images?.map((image, index) => {
          return (
            <div className='ImageBox-box' key={index}>
              <img src={image} alt="" />
            </div>
          )
        })
      }
    </div>
  )
}
