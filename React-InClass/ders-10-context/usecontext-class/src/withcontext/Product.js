import React, {useContext} from 'react'
import { ProductContext } from './ProductContext'

const Product = ({product}) => {
    const {increasePrice, decreasePrice} = useContext(ProductContext)
  return (
    <div>
        <h1>Product</h1>
        <h2>{product.product}</h2>
        <h4>{product.price}</h4>
        <button onClick={() => increasePrice(product.id)}>Increase</button>
        <button onClick={() => decreasePrice(product.id)}>Increase</button>
    </div>
  )
}

export default Product