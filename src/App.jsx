import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';
import Fire from './assets/fire.jpg'
import Star from './assets/glowing-star.jpg'
import Party from './assets/party-face.jpg'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>

    <MovieList type="popular" title="Popular" emoji={Fire}/>
     <MovieList type="top_rated" title="Top Rated" emoji={Star}/>
      <MovieList type="upcoming" title="Upcoming" emoji={Party}/>
    </div>
  )
}

export default App
