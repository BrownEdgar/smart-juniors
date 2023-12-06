export default function Posts({ posts }) {
  return (
    <div className='Posts'>
      <h2>Our Posts</h2>
      <div>
        {
          posts.map(elem => {
            return (
              <p key={elem.id}>
                {elem.title}
              </p>
            )
          })
        }
      </div>
    </div>
  )
}
