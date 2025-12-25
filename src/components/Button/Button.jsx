import React from 'react'
import './Button.css'
const Button = ({children}) => {
  return (
    <div>
      <section className='btn-main'>
          <button className='btn'>{children}</button>
      </section>
    </div>
  )
}

export default Button
