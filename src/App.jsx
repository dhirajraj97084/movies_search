import React from 'react'
import Navbar from './component/navbar/Navbar'
import SearchBar from './component/searchBar/SearchBar'
import MovieCard from './component/movieCard/MovieCard'

function App() {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <MovieCard/>
    </div>
  )
}

export default App
