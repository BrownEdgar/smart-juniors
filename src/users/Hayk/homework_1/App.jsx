import { useEffect, useState } from 'react'
import Users from './components/Users/Users';
import "./App.scss"

const people = [
    { id: 1, name: 'Wes', year: 1988 },
    { id: 2, name: 'Kait', year: 1986 },
    { id: 3, name: 'Irv', year: 1970 },
    { id: 4, name: 'Lux', year: 2015 }
];

export default function App() {

    const [data, setData] = useState(people)
    const [bool, setBool] = useState(null)
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        if (bool === true && data.length > 1) {
            setData(data.toSorted((a, b) => a.year - b.year))
        } else if (bool === false && data.length > 1) {
            setData(data.toSorted((a, b) => b.year - a.year))
        }
    }, [bool])

    const selectPeople = () => {
        setSelected(!selected)
        setData(() => {
            return (
                data.length > 0
                    ? data.map(people => (
                        people.isActive
                            ? ({ ...people, isActive: false })
                            : ({ ...people, isActive: true })
                    )) : data
            )
        })
    }

    return (
        <div className='App'>
            <div className='App-btns'>
                <button onClick={selectPeople}>{selected ? "Unselect All" : "Select All"}</button>
                <button onClick={() => setBool(!bool)}>Sort with date {bool ? "\u296E" : "\u296F"}</button>
            </div>
            <Users data={data} setData={setData} />
        </div>
    )
}
