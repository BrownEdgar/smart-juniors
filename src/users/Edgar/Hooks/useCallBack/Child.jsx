export default function Child({ photos }) {
  console.log("child render")
  return (
    <>
      {photos
        .map(photo => {
          return (
            <div key={photo.id}>
              <img src={photo.url} />
              <h2>{photo.title}</h2>
            </div>
          )
        })}
    </>
  )
}
