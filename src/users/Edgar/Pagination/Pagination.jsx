export default function Pagination({ poststotal, perpage, changePage }) {

  const arr = [];
  for (let i = 1, total = Math.ceil(poststotal / perpage); i <= total; i++) {
    arr.push(i)
  }

  return (
    <ul>
      {arr.map(number => <li key={number} onClick={() => changePage(number)}>{number}</li>)}
    </ul>
  )
}
