import { useSelector } from "react-redux"
import { getAllBooksByFilterSelector } from "./feauters/books"
import Books from "./components/Books/Books"
import Select from "./components/Select/Select"
import Test from "./components/Test/Test"


export default function App() {

const books = useSelector(getAllBooksByFilterSelector)    
  return (
    <div>
        <Select/>
        <Books books={books}/>
        <Test id={2}/>
    </div>
  )
}
