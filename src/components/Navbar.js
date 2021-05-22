import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {



  const isHide = useSelector(state => state.navBarReducer.isHide)

  return (
    <div className={`navbar ${isHide ? '' : 'active'}`}>
      <Link to="/">Home</Link>
      <Link to="/man">Men</Link>
      <Link to="/woman">Woman</Link>
      <Link to="/accessories">Accessories</Link>
      <Link to="/about">About us</Link>
    </div>
  )
}

export default Navbar
