import React from 'react'

const BasketProducts = () => {
  return (
    <div>
      <div className="products-in-basket">
        <div className='product-describe'>
          <div className="img"></div>
          {/* <img src={ } alt="product" /> */}
          <p className="title">title</p>
        </div>
        <div className="buttons">
          <button>Remove</button>
          <button>Move to the wish list</button>
        </div>
        <div className="select-and-price">
          <label htmlFor="quantity">Select quantity</label>
          <select name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <p>Price: 0</p>
        </div>
      </div>
      <div className='sum'>
        <h2>To pay</h2>
        <p>Wartość produktów: </p>
        <p>Przesyłka: Free</p>
        <button>Pay</button>
      </div>
    </div>
  )
}

export default BasketProducts
