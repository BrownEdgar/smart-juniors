import  { useState } from 'react';
import "./App.scss"
const peoples = [
  { id: 1, name: 'Wes', year: 1988 },
  { id: 2, name: 'Kait', year: 1986 },
  { id: 3, name: 'Irv', year: 1970 },
  { id: 4, name: 'Lux', year: 2015 }
];


export default function App() {
  const [people,setPeople] = useState(peoples)
  const sortPeople = () =>{
    const sorted=[...people].sort((a,b)=>a.year - b.year)
    setPeople(sorted)
  }
  const deleteId = (id) =>{
    const del = people.filter((elem=>elem.id != id))
    setPeople(del)
  }
  const peopleActive = () =>{
    const active = people.map(elem=> ({...elem , isActive: true}))
    setPeople(active)
  }
 

  
  return (
    <div className='container'>
      <button onClick={sortPeople} className='but'><i className="fa-solid fa-arrow-up-1-9"></i></button>
      <button onClick={peopleActive} className='but'><i className="fa-brands fa-creative-commons-nd"> Is Active</i></button>
      {people.map((elem)=>(
        <div key={elem.id} className='container1'>
        <ol className='container-item'>
          <li>{`Name:${elem.name},Year:${elem.year},isActive:${elem.isActive || false}`}</li>
      <button onClick={()=>deleteId(elem.id)} className='but'><i className="fa-solid fa-trash"></i></button>
        </ol>
        </div>
      ))}
    </div>
  )
}
