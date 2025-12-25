import React from 'react'
import './Advertisement.css'
const Advertisement = ({ img, alt }) => {
  return (
    <div className="advertisement">
      <img src={img} alt={alt} />
    </div>
  )
}

export default Advertisement
