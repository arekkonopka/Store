import React from 'react'

const Products = ({ img, title, price }) => {
  return (
    <div className='product'>
      <img src={img} alt={title} />
      <div className="describe">
        <p>{title}</p>
        <p className='price'>Price: <span className="color">{price}$</span></p>
      </div>
      <div className="goTo">
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-heart"></i>
      </div>
    </div>
  )
}

export default Products
