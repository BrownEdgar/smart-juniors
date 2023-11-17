import { useMemo } from "react"

export default  function Child({photos}) {
  
  return (
    <>
          {
            photos.map(photo =>{
                return(
                    <div key={photo.id}>
                        <img src={photo.url}/>
                        <h2>{photo.title}</h2>
                    </div>
                )
            })
        }
    </>
  )
}


