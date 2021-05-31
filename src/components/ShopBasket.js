import React from 'react'
import { useSelector } from 'react-redux'
import BusketProducts from '../components/BasketProducts'

const ShopBasket = () => {

  const products = useSelector(state => state.shopBasketReducer.basket.items)
  console.log(products)
  return (
    <div className='shopBasket'>
      {products.length ?
        <BusketProducts />
        : <h1 className='empty-bag'>Your bag is empty</h1>}
    </div>
  )
}

export default ShopBasket
