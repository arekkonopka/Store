import React, { useState } from 'react'

import shopSvg from '../asset/images/shop.svg'
import polFlag from '../asset/images/poland.svg'
import engFlag from '../asset/images/united-kingdom.svg'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { hideNavBar, showNavBar, usdCurrency, plnCurrency } from '../redux/actions/action'

const Header = () => {
  const [isClick, setIsClick] = useState(false)

  const isHide = useSelector(state => state.navBarReducer.isHide)
  const isUsdCurrency = useSelector(state => state.navBarReducer.isUsdCurrency)
  const quantity = useSelector(state => state.shopBasketReducer.basket.quantity)



  const onClickBurger = () => {
    setIsClick(!isClick)

    { isHide ? dispatch(showNavBar()) : dispatch(hideNavBar()) }
  }

  const dispatch = useDispatch()

  const onClickUsdCurrency = () => {
    dispatch(usdCurrency())
  }
  const onClickPlnCurrency = () => {
    dispatch(plnCurrency())

  }
  return (
    <div className='header'>
      <div className="logo">
        <Link to="/">
          <img src={shopSvg} alt="shop logo" />
          <p>Your fake shop</p>
        </Link>
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
      </div>
      <div className="burger" onClick={onClickBurger}>
        <div className='hiddenBurger'>
          <span className={`${isClick ? 'active1' : ''}`}></span>
          <span className={`${isClick ? 'active2' : ''}`}></span>
          <span className={`${isClick ? 'active3' : ''}`}></span>
          <span className={`${isClick ? 'active4' : ''}`}></span>
        </div>
      </div>
      <div className="search-bar">
        <form action="">
          <input type="text" />
          <button><i className="fas fa-search"></i></button>
        </form>
      </div>
      <div className="icons">
        <div className="menu">
          <i className="far fa-user"></i>
          <div className="drop-down user">
            <Link to='/login'>My account</Link>
            <a href="#">My whitelist</a>
            <Link to='/login'>Log in</Link>
          </div>
        </div>
        <div className="menu">
          <i className="fas fa-cog"></i>
          <div className="drop-down language">
            <div className="current">
              <p>Language:</p> <img src={engFlag} alt="flag" />
            </div>
            <div className="items">
              <img src={engFlag} alt="england flag" />
              <img src={polFlag} alt="poland flag" />
            </div>
            <div className="current">
              <p>Currency:</p><p>{isUsdCurrency ? 'USD' : "PLN"}</p>
            </div>
            <div className="items">
              <p onClick={onClickUsdCurrency}>USD</p><p onClick={onClickPlnCurrency}>PLN</p>
            </div>
          </div>
        </div>
        <div className="menu">
          <Link to='/shopBasket'><i className="fas fa-shopping-basket"></i></Link>
          <div className="drop-down basket">
            <div className="item">
              <p>Items:</p> <p className='color'>{quantity}</p>
            </div>
            <div className="total">
              <p>Total</p><p className='color'>0$</p>
            </div>
            <Link to='/shopBasket'><button>Go to basket</button></Link>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Header
