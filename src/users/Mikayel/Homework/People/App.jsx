import { useState } from 'react'
import './App.scss'

export default function App() {

  const [people, setPeople] = useState([
    { id: 1, name: 'Wes', year: 1988 },
    { id: 2, name: 'Kait', year: 1986 },
    { id: 3, name: 'Irv', year: 1970 },
    { id: 4, name: 'Lux', year: 2015 },
    { id: 5, name: 'John', year: 1995 },
    { id: 6, name: 'Alice', year: 1980 },
    { id: 7, name: 'Eva', year: 1992 },
    { id: 8, name: 'Liam', year: 2000 },
    { id: 9, name: 'Olivia', year: 1998 },
    { id: 10, name: 'Noah', year: 2005 },
    { id: 11, name: 'Ava', year: 2003 },
    { id: 12, name: 'Mia', year: 1990 },
    { id: 13, name: 'Ethan', year: 2002 },
    { id: 14, name: 'Sophia', year: 1985 },
    { id: 15, name: 'Isabella', year: 1999 }
  ]);

  const [activateAll, setActivateAll] = useState(false);
  const [isDescending, setIsDescending] = useState(true);

  const sortPeople = () => {
    const sortedPeople = [...people].sort((a, b) =>
      isDescending ? b.year - a.year : a.year - b.year
    );
    setPeople(sortedPeople);
    setIsDescending(!isDescending);
  };

  const deletePerson = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  };

  const activateAllPeople = () => {
    const updatedPeople = people.map((person) => activateAll
      ? ({ ...person, isActive: false })
      : ({ ...person, isActive: true }));
    setPeople(updatedPeople);
    setActivateAll(!activateAll);
  };

  return (
    <div className="App">
      <table className="App-table">
        <thead>
          <tr>
            <th>Name
              <button className={activateAll && people.length ? 'App-btn_active' : 'App-btn'} onClick={activateAllPeople}>
                <i className="fa-solid fa-user-check"></i>
              </button>
            </th>
            <th>Year
              <button className='App-btn' onClick={sortPeople}>{isDescending
                ? <i className="fa-solid fa-arrow-down-short-wide"></i>
                : <i className="fa-solid fa-arrow-up-wide-short"></i>}
              </button>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>
                {person.name}
                <span className={activateAll ? "App-span_active" : "App-span"}>
                  <i className="fa-solid fa-square-check"></i>
                </span>
              </td>
              <td>{person.year}
              </td>
              <td>
                <button className='App-btn App-btn_delete' onClick={() => deletePerson(person.id)}>
                  <i className="fa-solid fa-user-xmark"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};