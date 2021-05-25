import React, { useEffect } from 'react'
import Products from './Products'
import Slider from './Slider'
import { fetch_data_request, fetch_data_success, fetch_data_failure } from "../redux/actions/action"
import { useDispatch, useSelector } from 'react-redux'



const Home = () => {
  const products = useSelector(state => state.fetchReducer.products)
  const isUsdCurrency = useSelector(state => state.navBarReducer.isUsdCurrency)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetch_data_request())

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        dispatch(fetch_data_success(data))
      })
      .catch((err) => {
        dispatch(fetch_data_failure(err))
      })

  }, [])


  return (
    <div>
      <Slider />
      <div className="products">

        {products.map((product) => {
          return (
            <div key={product.id}>
              <Products img={product.image} title={product.title} price={isUsdCurrency ? product.price : product.pricePln} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home