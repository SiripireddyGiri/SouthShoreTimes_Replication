import React from 'react'
import Heading from '../Heading/Heading'
import Behind from '../../assets/Behind.avif'
import chamber from '../../assets/chamber.avif'
import photography from '../../assets/photography.avif'
import Education from '../../assets/Business Focus.avif'
import './SouthShoreBusiness.css'
import Button from '../Button/Button'
const SouthShoreBusiness = () => {
  return (
    <div className='SouthShoreBusiness'>
      <Heading children={"South Shore Business"}></Heading>
      <div className="Business-main">
        <section className='Business-image'>
        <img src={Behind} alt="Behind the Business" />
        <button>Business</button>
        <p className='Business-description'><strong>Behind the Business: Hale Bone Broth</strong></p>
      </section>
      <section className='Business-image'>
        <img src={photography} alt="photography image" />
        <button>Business</button>
        <p className='Business-description'><strong>South Shore Chamber Celebrates Community with Launch of New Award</strong></p>
      </section>
      <section className='Business-image'>
        <img src={chamber} alt="chamber image" />
        <button>Business</button>
        <p className='Business-description'><strong>What No One Tells You About Photography and Your Small Business</strong></p>
      </section>
      <section className='Business-image'>
        <img src={Education} alt="chamber image" />
        <button>Business</button>
        <p className='Business-description'><strong>Bringing Healthcare and Higher Education Together</strong></p>
      </section>
      <section className='Business-image'>
        <img src={Behind} alt="Behind the Business" />
        <button>Business</button>
        <p className='Business-description'><strong>Behind the Business: Elliott Physical Therapy</strong></p>
      </section>
      <section className='Business-image'>
        <img src={Behind} alt="Behind the Business" />
        <button>Business</button>
        <p className='Business-description'><strong>Behind the Business: Girl Gang Association</strong></p>
      </section>
      </div>
      <Button children={"Read More"}></Button>
    </div>
  )
}

export default SouthShoreBusiness
