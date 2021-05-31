import React from 'react'

const Info = ({ color, message }) => {
  return (
    <div className="info" style={{ backgroundColor: `${color}` }}>
      <h3>{message}</h3>
    </div>
  )
}

export default Info
