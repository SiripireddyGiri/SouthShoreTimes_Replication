import React from 'react'
import logo from '../../assets/Footer-Logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer-main'>
      <section className='Footer-logo'>
        <img src={logo} alt="" />
      </section>
      <section className='Footer-logo2'>
        <p>About Us | Terms & Agreement | Town Links | Advertise | Community Publishers</p>
        <p>copyright &copy;  2025 by Times Media Group, All Rights Reserved</p>
      </section>
    </div>
  )
}

export default Footer
