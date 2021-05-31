import React from 'react'
import { useSelector } from 'react-redux'
import BusketProducts from '../components/BasketProducts'

const ShopBasket = () => {

  const products = useSelector(state => state.shopBasketReducer.basket.items)


  return (
    <div className='shopBasket'>
      {products.length ?
        products.map((el) => {
          return (
            <div>
              <BusketProducts title={el.product.title} image={el.product.image} price={el.product.price} />
            </div>
          )
        })
        : <h1 className='empty-bag'>Your bag is empty</h1>}
    </div>
  )
}

export default ShopBasket
