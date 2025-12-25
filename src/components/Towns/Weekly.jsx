import React from 'react'
import './Weekly.css'
import card1 from '../../assets/f1.avif'
import card2 from '../../assets/f2.avif'
import card21 from '../../assets/f21.avif'
const Weekly = () => {
    return (
        <div className='gift-card'>
            <section className='content'>
                <div className='card'>
                    <section className='press'>
                        <img src={card1} alt="press conference image" />
                    </section>
                    <p><strong>Hanover Keeps Commercial Tax Shift Amid Business Concerns</strong></p>
                    <span>2 min read</span>
                    <p>Collaboration leads to decision to hold steady commercial property tax</p>
                    <hr />
                    <p><strong>Hanover dominates Norwell in Thanksgiving Day football game</strong></p>
                    <span>2 min read</span>
                    <hr />
                    <p><strong>State growth rule change may squeeze Scituate budget</strong></p>
                    <span>2 min read</span>
                    <hr />
                    <p><strong>Hanover Finalizes Warrant for Dec. 8 Special Town Meeting</strong></p>
                    <span>2 min read</span>
                </div>
                <div className='card'>
                    <div className='innercard'>
                        <section className='meeting'>
                            <img src={card2} alt="meeting image" />
                        </section>
                        <h3>Hanover Approves MBTA Rules, Punts on Recall Petition</h3>
                        <span>2 min read</span>
                    </div>
                    <hr />
                    <div className='inside'>
                        <section className='school'>
                            <img src={card21} alt="Elementary school bus" />
                        </section>
                        <section className='description'>
                            <p><strong>Redistricting Work Begins for New Scituate Elementary School</strong></p>
                            <span>2 min read</span>
                            <p>Consultant outlines months-long mapping process for Scituate’s 2027 school opening</p>
                        </section>
                    </div>
                </div>
                <div className='card'>
                    <p><strong>Norwell Schools Report Enrollment Dip, Class Size Pressure</strong></p>
                    <span>2 min read</span>
                    <p>District outlines shifting student numbers during Oct. 20 meeting</p>
                    <hr />
                    <p><strong>Over 200 South Shore Students Named to BC High Honor Roll</strong></p>
                    <span>1 min read</span>
                    <hr />
                    <p><strong>Norwell High’s Fourth Wall Players Present “Mamma Mia!”</strong></p>
                    <span>2 min read</span>
                    <hr />
                    <p><strong>Town Reports Major Infrastructure Updates in Norwell</strong></p>
                    <span>3 min read</span>
                    <hr />
                    <p><strong>Town Meeting Approves Nearly $1M for Preservation, Land Purchase</strong></p>
                    <span>2 min read</span>
                </div>
            </section>
        </div>
    )
}

export default Weekly
