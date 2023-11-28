import { useDispatch } from "react-redux"
import "./App.scss"
// import Carts from "./components/Carts/Carts"
// import { updateSort } from "./features/carts/cartsSlice"
import Products from "./components/Products/Products"
import { updateProducts, updateSortMethod } from "./features/products/productsSlice"

export default function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="App-btns">
        <button onClick={() => dispatch(updateSortMethod("up"))}>sortUp</button>
        <button onClick={() => dispatch(updateSortMethod("down"))}>sortDown</button>
        <button onClick={() => dispatch(updateProducts("all"))}>normal</button>
        <button onClick={() => dispatch(updateProducts("price"))}>filter</button>
      </div>
      {/* <Carts /> */}
      <Products/>
    </div>
  )
}
