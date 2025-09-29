import React from 'react'

import './MovieCard.css'
import Star from '../../assets/star.jpg'

const MovieCard = () => {
  return (
   <a href="" className='movie-card'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YKw6n-RDgqyFy69GSuuiue2qkkByXQLJLg&s" 
    alt="" className='movie-poster' />
    <div className="movie-details">
      <h3 className="movie-details-heading">Movie Name</h3>
      <div className="align-center movie-date-rate">
        <p>10-20-2020</p>
        <p>8.0 <img src={Star} alt="rating-icon" className='card-emoji'/></p>
      </div>
      <p className='movie-description'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Officia voluptatum id iure dignissimos ipsa quaerat.
      </p>
    </div>
   </a>
  )
}

export default MovieCard
