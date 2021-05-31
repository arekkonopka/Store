import React from 'react'

const LogIn = () => {
  return (
    <div className='log-in'>
      <h3>Log In</h3>
      <form>
        <label htmlFor="email"> email
        <input type="text" id="email" />
        </label>
        <label htmlFor="password"> password
        <input type="text" id="password" />
        </label>
        <button>Log In</button>
      </form>
      <div className="register">
        <p>Are you new?</p>
        <button className='register-button'>register</button>
      </div>

    </div>
  )
}

export default LogIn
