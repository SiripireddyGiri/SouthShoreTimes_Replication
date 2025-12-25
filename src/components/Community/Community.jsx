import React from 'react'
import C1 from '../../assets/community1.avif';
import C2 from '../../assets/community2.avif';
import C3 from '../../assets/community3.avif';
import C4 from '../../assets/community4.avif';
import './Community.css'
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
const Community = () => {
  return (
    <div className='community-main'>
      <Heading children={"Community Snapshots"}></Heading>
        <section className='community-images'>
          <img src={C1} alt="community image1" />
          <img src={C2} alt="community image2" />
          <img src={C3} alt="community image3" />
          <img src={C4} alt="community image4" />
        </section>
        <Button children={"See More Community Photos"}></Button>
    </div>
  )
}

export default Community
