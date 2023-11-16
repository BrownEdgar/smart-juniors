import React from 'react'

export default function Child({photos}) {
  return (
    <div>
        
        {
            photos
            .map((photo, ind) =>{
              return (
                <div key={ind}>
                <img src={photo.url}></img>
                <h2>{photo.title}</h2>
               </div> 
              )  
            })
        
        }
    </div>
  )
}
