    import React from 'react'
    import './Header.css'
    import search from '../../assets/search-logo.svg';
    import moon from '../../assets/moon.svg';
    import burger from '../../assets/hamburger.svg';
    const Header = () => {
    return (
        <div className='menu'>
        <section className='primary-menu'>
            <a href="#">TOWNS</a>
            <a href="#">LIFESTYLE</a>
            <a href="#">BUSINESS</a>
            <a href="#">PEOPLE</a>
            <a href="#">OPINION</a>
            <a href="#">SPORTS</a>
            <a href="#">EVENTS</a>
            <a href="#">DIRECTORY</a>
            <a href="#">SUBMIT A STORY</a>
        </section>
        <section className='secondary-menu'>
            <img src={search} alt="search icon" />
            <img src={burger} alt="hamburger icon" />
            <img src={moon} alt="mode" />
        </section>
        </div>
    )
    }

    export default Header
