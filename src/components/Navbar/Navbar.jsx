import React from 'react'

import "./Navbar.css";
import Fire from '../../assets/fire.jpg'
import Star from '../../assets/glowing-star.jpg'
import Party from '../../assets/party-face.jpg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>NW-Movies</h1>

        <div className="navbar-links">
            <a href="">Popular <img src={Fire} alt="fire emoji" className='navbar-emoji'/></a>
            <a href="">Top Rated <img src={Star} alt="star emoji" className='navbar-emoji'/></a>
            <a href="">Upcoming <img src={Party} alt="party-face emoji" className='navbar-emoji'/></a>
        </div>
    </nav>
  )
}

export default Navbar
