import React from 'react'
import icon from '../../assets/icon.png'
import facebook from '../../assets/facebook-icon.jpg'
import instagram from '../../assets/insta.jpg'
import linkdin from '../../assets/linkdin.jpg'
import './Nav.css'
const Nav = () => {
  return (
    <div className='navigation'>
      <section className='newsicon'>
        <img src={icon} alt="icon" />
      </section>
      <section className="socialmedia">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={linkdin} alt="linkdin" />
      </section>

    </div>
  )
}

export default Nav
