import { useSelector } from 'react-redux';
import { memobooksSelector } from '../../features/books/booksSlice';
import { Select } from '../../components';
import './Books.scss';

export default function Books() {
	const books = useSelector(memobooksSelector);

	return (
		<section className="Books">
			<h1 className="pageTitle">Books</h1>
			<Select />
			<ul>
				{books.map((book) => {
					return (
						<li key={book.id}>
							<div>
								<h2>{book.title}</h2>
								<p>Price: {book.price}</p>
								<p>Country: {book.country}</p>
								<p>Author: {book.author}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
