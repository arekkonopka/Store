import React, { useEffect } from 'react'
import Products from './Products'
import Slider from './Slider'
import { fetch_data_request, fetch_data_success, fetch_data_failure, FETCH_DATA_SUCCESS } from "../redux/actions/action"
import { useDispatch, useSelector } from 'react-redux'



const Home = () => {
  const data = useSelector(state => state.fetchReducer.data)
  const loading = useSelector(state => state.fetchReducer.loading)
  const dispatch = useDispatch()

  const dataFetch = () => {
    dispatch(fetch_data_request())
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => dispatch(fetch_data_success(data)))
      .catch((err) => {
        dispatch(fetch_data_failure(err))
      })
  }


  useEffect(() => {
    dataFetch()
  }, [])



  return (
    <div>
      <Slider />
      <div className="products">
        {data.map((el) => {
          return (
            <div className={el.id}>
              <Products img={el.image} title={el.title} price={el.price} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
// img={img} title={title} price={price}