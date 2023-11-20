import { createContext, useState } from 'react'
import A from './components/A'
import { MyContext } from './contexts/constexts'

export default function App() {
  const [data] = useState(['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python'])
  return (
    <div>
      <h1>Parent component</h1>
      <MyContext.Provider value={{
        data
      }}>
        <A />
      </MyContext.Provider>



    </div>
  )
}
