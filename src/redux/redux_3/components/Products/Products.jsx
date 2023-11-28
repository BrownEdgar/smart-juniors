import { useDispatch, useSelector } from "react-redux"
import "./Products.scss"
import { useEffect } from "react"
import { getAllProductsByFilterSelector, getProducts } from "../../features/products/productsSlice"

export default function Products() {
  const products = useSelector(getAllProductsByFilterSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className="Products">
      {
        products.map(product => (
          <div key={product.id} className="Products-item">
            <div className="Products-item_imgBox">
              <img src={product.thumbnail} alt="" />
            </div>
              <h2>{product.title}</h2>
              <p>Brand: {product.brand}</p>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
          </div>
        ))
      }
    </div>
  )
}
