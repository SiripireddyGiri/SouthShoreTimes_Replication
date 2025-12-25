import React from 'react'
import Nav from '../Navigation_Bar/Nav'
import Header from '../Header/Header'
import './Home.css'
import Weekly from '../Towns/Weekly'
import Community from '../Community/Community'
import Advertisement from '../Advertisement/Advertisement'
import Ad1 from '../../assets/news.avif'
import Ad2 from '../../assets/gift-certificate.png'
import Ad3 from '../../assets/shoppes.avif'
import SouthShore from '../SouthShoreLife/SouthShore'
import Ad4 from '../../assets/BC High.avif'
import SouthShoreBusiness from '../SouthShoreBusiness/SouthShoreBusiness'
import Obituaries from '../Obituaries/Obituaries'
import A5 from '../../assets/cmg.png'
import A6 from '../../assets/comsint.avif'
import Footer from '../Footer/Footer'
const Home = () => {
    return (
        <div className='main'>
            <section className='heading'>
            <Nav />
            <Header />
            </section>
            <Advertisement img={Ad1}/>
            <Weekly/>
            <Advertisement img={Ad2}/>
            <Community/>
            <Advertisement img={Ad3}/>
            <SouthShore/>
            <Advertisement img={Ad4}/>
            <SouthShoreBusiness/>
            <Obituaries/>
            <Advertisement img={A5}/>
            <Advertisement img={A6}/>
            <Footer/>
        </div>
    )
}

export default Home
