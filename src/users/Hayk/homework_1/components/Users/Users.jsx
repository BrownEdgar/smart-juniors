import './Users.scss'

export default function Users({data, setData}) {

  const deletePerson = (personId) => {
    setData(data.toSpliced(personId, 1))
  }

  return (
    <div className='Users'>
      {
        data.length > 0 && data 
        ? data.map((person, index) => {
          return (
            <div key={person.id} className={person.isActive ? "Users-item Users-item_active" : "Users-item"}>
              <span>{person.name}</span>
              <span>{person.year}</span>
              <span className='Users-item_deletebtn' onClick={() => deletePerson(index)}>&#10006;</span>
            </div>
          ) 
        }) : null
      }
    </div>
  )
}
