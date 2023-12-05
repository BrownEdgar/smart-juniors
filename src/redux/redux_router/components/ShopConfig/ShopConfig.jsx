import { useRef } from "react"
import "./ShopConfig.scss"
import { useDispatch } from "react-redux"

export default function ShopConfig() {
  const priceRange = useRef(null)
  const price = useRef(null)
  const dispatch = useDispatch();

  const changePrice = (e) => {
    price.current.textContent = e.target.value
    dispatch()
  }

  return (
    <div className="ShopConfig">
      <div>
      <h2 ref={price}>{priceRange?.current?.value || 0}</h2>
      <input type="range" name="" id="" min={0} max={100000} ref={priceRange} onChange={changePrice}/>
      </div>
    </div>
  )
}
