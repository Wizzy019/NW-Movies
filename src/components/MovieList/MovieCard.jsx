import React from 'react'

import './MovieCard.css'
import Star from '../../assets/star.jpg'

const MovieCard = ({movie}) => {
  return (
   <a href={ `https://www.themoviedb.org/movie/${movie.id}`} target='blank'
   className='movie-card'>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}.jpg` }
    alt="" className='movie-poster' />
    <div className="movie-details">
      <h3 className="movie-details-heading">{movie.original_title}</h3>
      <div className="align-center movie-date-rate">
        <p>{movie.release_date}</p>
        <p>{movie.rate_average}<img src={Star} alt="rating-icon" className='card-emoji'/></p>
      </div>
      <p className='movie-description'>
        {movie.overview.slice(0,100) + "..."}
      </p>
    </div>
   </a>
  )
}

export default MovieCard
