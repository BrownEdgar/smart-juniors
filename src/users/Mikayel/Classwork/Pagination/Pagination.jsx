import './Pagination.scss'

export default function Pagination({ postsTotal, perPage }) {

  const arr = [];
  for (let i = 1, total = Math.ceil(postsTotal / perPage); i <= total ; i++) {
    arr.push(i);
  }

  return (
    <ul>
      {arr.map(number => <li key={number}>{number}</li>)}
    </ul>
  )
}