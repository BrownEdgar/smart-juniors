import './Books.css'

export default function Books({books}) {
  return (
    <div>
        <ul className="Books">
            {
              books.map(book =>{
                return(
                    <li key={book.id} >
                        <div>
                            <h2>Title: {book.title}</h2>
                            <h3>Author: {book.author}</h3>
                            <p>Country: {book.country}</p>
                            <p>Price: {book.price}</p>
                        </div>
                    </li>
                )
              })      
            }
        </ul>
    </div>
  )
}
