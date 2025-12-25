import React from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import Ryan from '../../assets/Ryan Taylor.avif'
import Jhon from '../../assets/Jhon.avif'
import Kathleen from '../../assets/kathleen.avif'
import Louis from '../../assets/Louis.avif'
import Eunice from '../../assets/Eunice.avif'
import Michael from '../../assets/Michael.avif'
import './Obituaries.css'

const Obituaries = () => {
  return (
    <div>
      <Heading>Obituaries</Heading>

      <section className="Obituaries-images">
        <section className="Obituaries-sub">
          <img src={Ryan} alt="Ryan Taylor Parsons" />
          <h6>Ryan Taylor Parsons</h6>
        </section>

        <section className="Obituaries-sub">
          <img src={Jhon} alt="Jhon F.crowley" />
          <h6>Jhon F.crowley</h6>
        </section>

        <section className="Obituaries-sub">
          <img src={Kathleen} alt="Kathleen M.kiley" />
          <h6>Kathleen M.kiley</h6>
        </section>

        <section className="Obituaries-sub">
          <img src={Louis} alt="Louis J.Carpenito" />
          <h6>Louis J.Carpenito</h6>
        </section>

        <section className="Obituaries-sub">
          <img src={Eunice} alt="Eunice M.Hannon" />
          <h6>Eunice M.Hannon</h6>
        </section>

        <section className="Obituaries-sub">
          <img src={Michael} alt="Michael Joseph Marrone" />
          <h6>Michael Joseph Marrone</h6>
        </section>
      </section>

      <Button>Read More</Button>
    </div>
  )
}

export default Obituaries
