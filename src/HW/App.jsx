import  {useState} from 'react'
import './App.scss'
import classNames from 'classnames'

export default function App() {
    const [text, setText] = useState(null)
    const [isActive, setisActive] = useState(false)
    const [buttontwoisActive, setbuttontwoisActive] = useState(null)
    const [buttonthreeisActive, setbuttonthreeisActive] = useState(null)


    
    const firstButtonClick = (e) => {
        setText(e.target.name)
        setisActive(!isActive)
        setbuttontwoisActive(false)
        setbuttonthreeisActive(false)
    
    }

    const secondButtonClick = (e)=>{
        setText(e.target.name)
        setisActive(false)
        setbuttontwoisActive(true)
        setbuttonthreeisActive(false)    
    }

    const thirdButtonClick = (e)=>{
        setText(e.target.name)
        setisActive(false)
        setbuttontwoisActive(false)
        setbuttonthreeisActive(true)   
    }

  return (
    <div className='buttons'>
        <h1>{text}</h1>
        <button className={classNames(null,{'green': isActive})} onClick={firstButtonClick} type='submit' name='A'>A</button>
        <button className={classNames(null,{'green': buttontwoisActive})}  onClick={secondButtonClick} type='submit' name='B'>B</button>
        <button className={classNames(null,{'green': buttonthreeisActive})} onClick={thirdButtonClick} type='submit' name='C'>C</button>

    </div>
  )
}
