import './Books.css'
import { memobooksSelector } from '../../features/books/booksSlice'
import { useSelector } from 'react-redux'

export default function Books() {
  const books = useSelector(memobooksSelector)
  return (
    <ul className='Books'>
      {books.map(book => {
        return (
          <li key={book.id}>
            <div>
              <h2>{book.title}</h2>
              <p>Price: {book.price}</p>
              <p>country: {book.country}</p>
              <p>author: {book.author}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
