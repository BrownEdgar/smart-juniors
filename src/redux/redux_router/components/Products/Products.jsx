import { useSelector } from "react-redux"
import "./Products.scss"

export default function Products() {
  const products = useSelector((state) => state.products.data)
  return (
    <div className='Products'>
      {
        products.map(product => {
          return (
            <div className="Products-items" key={product.id}>
              <div className="Products-items_imgBox">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="Products-items_priceBox">
                <span>Price:</span>
                <span>{product.price}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
