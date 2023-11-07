
import CustomHook from "./CustomHook";
import "./App.scss"
export default function App() {
  const [value ,{stringUpp,number,stringLow} ]=  CustomHook({
    min:1,
    max:1000
  })
  return (
    <div className='Box'>
     
      <button onClick={stringUpp}>stringLow</button>
      <button onClick={number}>Get Numbers</button>
      <button onClick={stringLow}>stringUpp</button>
       <h1>{value}</h1>
    </div>
  )
}
