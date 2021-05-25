import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Products = ({ img, title, price }) => {
  const [load, setLoad] = useState(true)

  const loading = useSelector(state => state.fetchReducer.loading)
  const isUsdCurrency = useSelector(state => state.navBarReducer.isUsdCurrency)

  const loader = () => setLoad(loading)

  useEffect(() => {
    loader()
  }, [])
  console.log(load)
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
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-heart"></i>
          </div>
          <span className="span1"></span><span className="span2"></span><span className="span3"></span><span className="span4"></span>
        </div>

      }

    </div >
  )
}

export default Products
