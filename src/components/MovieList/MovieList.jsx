import React, { useEffect, useState } from 'react'
import _ from 'lodash'

import './MovieList.css'
import Fire from '../../assets/fire.jpg'
import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup'

const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const [filterMovies, setFilterMovies] = useState([])
    const [minRating, setMinRating] = useState(0)
    const [sort, setSort] = useState({
        by: "default",
        order: "asc"
    })

    useEffect(() =>{
      fetchMovies()
    },[])

    useEffect(() => {
        if(sort.by !== "default") {
         const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order])
         setFilterMovies(sortedMovies)
        }
    },[sort])

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
        } else {
            setMinRating(rate)

       const filtered = movies.filter(movie => movie.vote_average >= rate)
       setFilterMovies(filtered)
        }
        
    }

    const handleSort = e => {
    const {name, value} = e.target;
    setSort(prev => ({...prev, [name]: value}))
    }


  return (
    <section className='movie-list'>
        <header className="align-center movie-list-header">
            <h2 className='align-center movie-list-heading'>Popular <img src={Fire} alt="fire-emoji" 
            className='navbar-emoji' /></h2>

            <div className='align-center movie-list-fs'>
               <FilterGroup minRating={minRating} onRatingClick={handleFilter} ratings={[8,7,6]}/>


                <select name="by" id="" onChange={handleSort} value={sort.by} className="movie-sorting">
                    <option value="default">SortBy</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select>
                  <select name="order"onChange={handleSort} value={sort.order} id="" className="movie-sorting">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
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