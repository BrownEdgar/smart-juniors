import { useContext } from 'react'
import { ProductsContext } from '../../contexts/contexts'

import CreateProducts from '../CreateProducts/CreateProducts'

import "./ShowProducts.scss"

export default function ShowProducts() {
  const { products, page, removeProduct } = useContext(ProductsContext)

  return (
    <>
      {
        page === 0
          ? <CreateProducts />
          : <div className='ShowProducts'>
            <div className='products'>

              {
                products.map(elem => {
                  return (
                    <div key={elem.id} className='_item'>
                      <div className='_imgBox'>
                        <img src={elem.image_url} alt="" />
                      </div>
                      <h1>{elem.title}</h1>
                      <p>{elem.body}</p>
                      <div className='_priceBox'>
                        <span>Price:</span>
                        <span className='_price'>{elem.price}</span>
                      </div>
                      <i className="fa-solid fa-circle-xmark _removeMark" onClick={() => removeProduct(elem.id)}></i>
                    </div>
                  )
                })
              }
            </div>
          </div>
      }
    </>
  )
}
