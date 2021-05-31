import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket, addInfo, removeInfo } from '../redux/actions/action'


const Products = ({ img, title, price, product }) => {
  const [load, setLoad] = useState(true)


  const loading = useSelector(state => state.fetchReducer.loading)
  const isUsdCurrency = useSelector(state => state.navBarReducer.isUsdCurrency)

  const dispatch = useDispatch()

  const loader = () => setLoad(loading)

  const onClickShoppingCart = () => {
    dispatch(addToBasket(product))
    dispatch(addInfo("green", "Added to Basket"))
    setTimeout(() => {
      dispatch(removeInfo("green", "Added to Basket"))
    }, 4000);
  }


  useEffect(() => {
    loader()
  }, [])

  return (
    <div className='product'>

      {load ?
        "Loading..."
        :
        <div>
          <img src={img} alt={title} />
          <div className="describe">
            <p>{title}</p>
            <p className='price'>Price: <span className="color">{price}{isUsdCurrency ? "$" : "zł"}</span></p>
          </div>
          <div className="goTo">
            <i className="fas fa-shopping-cart" onClick={onClickShoppingCart}></i>
            <i className="fas fa-heart"></i>
          </div>
          <span className="span1"></span><span className="span2"></span><span className="span3"></span><span className="span4"></span>
        </div>
      }


    </div >
  )
}

export default Products
