import { useContext } from 'react'
import { ProductsContext } from '../../contexts/contexts'

import "./CreateProducts.scss"

export default function CreateProducts() {
  const { addProduct } = useContext(ProductsContext)

  return (
    <div className='CreateProducts'>
      <button onClick={addProduct}>add Product</button>
    </div>
  )
}
