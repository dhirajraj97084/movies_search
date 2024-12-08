import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import SearchBar from './component/searchBar/SearchBar'
import MovieCard from './component/movieCard/MovieCard'

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState();

  const fetchMovieData=async()=>{
    try {
      setLoading(true);
      const res=await fetch(`https://omdbapi.com/?s=${search}&apikey=a1de9591`);
      const data=await res.json();
      setMoviesData(data.Search);
      console.log(data.Search);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <div>
      <Navbar/>
     <div className="bg">
     <SearchBar search={search} setSearch={setSearch} fetchMovieData={fetchMovieData}/>
     <MovieCard moviesData={moviesData} loading={loading}/>
     </div>
    </div>
  )
}

export default App
