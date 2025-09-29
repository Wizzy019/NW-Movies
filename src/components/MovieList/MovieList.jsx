import React, { useEffect } from 'react'

import './MovieLIst.css'
import Fire from '../../assets/fire.jpg'
import MovieCard from './MovieCard'
import { useState } from 'react'
import FilterGroup from './FilterGroup'

const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const [filterMovies, setFilterMovies] = useState([])
    const [minRating, setMinRating] = useState(0)

    useEffect(() =>{
      fetchMovies()
    },[])

    const fetchMovies = async () => {
        const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=01a3179dec5812e341d72e7ee81bd2d9"
    )
    const data = await response.json();
    
    setMovies(data.results)
    setFilterMovies(data.results)
    }

    const handleFilter = rate => {
        if(rate === minRating ) {
            setMinRating(0)
            setFilterMovies(movies)
        } else{
            setMinRating(rate)

       const filtered = movies.filter(movie => movie.vote_average >= rate)
       setFilterMovies(filtered)
        }
        
    }

  return (
    <section className='movie-list'>
        <header className="align-center movie-list-header">
            <h2 className='align-center movie-list-heading'>Popular <img src={Fire} alt="fire-emoji" 
            className='navbar-emoji' /></h2>

            <div className='align-center movie-list-fs'>
               <FilterGroup minRating={minRating} onRatingClick={handleFilter} ratings={[8,7,6]}/>


                <select name="" id="" className="movie-sorting">
                    <option value="">SortBy</option>
                    <option value="">Date</option>
                    <option value="">Rating</option>
                </select>
                  <select name="" id="" className="movie-sorting">
                    <option value="">Ascending</option>
                    <option value="">Descending</option>
                </select>
            </div>
        </header>
        <div className="movie-cards">
            {
                filterMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
            }
        </div>
    </section>
  )
}

export default MovieList
