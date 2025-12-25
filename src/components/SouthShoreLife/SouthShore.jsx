import React from 'react'
import Heading from '../Heading/Heading'
import Health from '../../assets/Health.avif'
import './SouthShore.css'
import South1 from '../../assets/south1.avif';
import South2 from '../../assets/south2.avif';
import South3 from '../../assets/south3.avif';
import South4 from '../../assets/south4.avif';
import South5 from '../../assets/south5.avif';
const SouthShore = () => {
    return (
        <div>
            <Heading children={"South Shore Life"}></Heading>
            <div className='main-card'>
                <div className='southshore-card'>
                    <section className='Health-willness'>
                        <img className="Health" src={Health} alt="Health and Wellness image" />
                    </section>
                    <button>Health&Wellness</button>
                    <p><strong>Feel-Good Gifts that Support Winter Wellness</strong></p>
                    <p>Elliott Physical Therapy PTs share favorite stocking stuffers as residents look for meaningful health-focused holiday gifts.</p>
                </div>
                <div className='southshore-card'>
                    <section className='south-main'>
                        <img src={South1} alt="south image" />
                        <section className='southsub'>
                            <button>Life style</button>
                            <p><strong>What Parents Should Ask When Choosing a Private School</strong></p>
                        </section>
                    </section>
                    <section className='south-main'>
                        <img src={South2} alt="south image" />
                        <section>
                            <button>Lifestyle</button>
                            <p><strong>The Company Theatre Earns Major 2025 BroadwayWorld Nominations</strong></p>
                        </section>
                    </section>
                    <section className='south-main'>
                        <img src={South3} alt="south image" />
                        <section className='southsub'>
                            <button>Lifestyle</button>
                            <p><strong>Finding calm and strength in a busy holiday season</strong></p>
                        </section>
                    </section>
                </div>
                <div className="southshore-card">
                    <section className='south-main'>
                        <img src={South4} alt="south image" />
                        <section className='southsub'>
                            <button>Lifestyle</button>
                            <p><strong>Rethinking Holiday Lists with Experience Gifts</strong></p>
                        </section>
                    </section>
                    <section className='south-main'>
                        <img src={South5} alt="south image" />
                        <section className='southsub'>
                            <button>Lifestyle</button>
                            <p><strong>My PhD Didn’t Prepare Me for Parenthood</strong></p>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SouthShore
