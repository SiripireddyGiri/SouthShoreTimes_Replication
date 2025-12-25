import React from 'react'
import './Heading.css'
const Heading = ({children}) => {
    return (
        <div>
            <section className='Heading-main'>
                <section className='Sub-Heading'>
                    <span></span>
                    <h2>{children}</h2>
                </section>
            </section>
        </div>
    )
}

export default Heading
