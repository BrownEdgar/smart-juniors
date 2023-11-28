import { useEffect } from "react"
import "./Carts.scss"
import { useDispatch, useSelector } from "react-redux"
import { getCarts, getSortedCartsSelector } from "../../features/carts/cartsSlice"

export default function Carts() {
  const carts = useSelector(getSortedCartsSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCarts())
  }, [dispatch])

  return (
    <div className="Carts">
      {
        carts.map(cart =>
        (
          cart.products.map(product => (
            <div key={product.id} className="Carts-item">
              <div className="Carts-item_imgBox">
                <img src={product.thumbnail} alt="" />
              </div>
              <div className="Carts-item_contentBox">
                <h2>{product.title}</h2>
                <p>Price: {product.price}</p>
              </div>
            </div>
          )
          ))
        )
      }
    </div>
  )
}
