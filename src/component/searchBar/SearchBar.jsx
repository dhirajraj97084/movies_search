import React from 'react'

function SearchBar({search,setSearch,fetchMovieData}) {
  return (
    <div>
      <div className="main flex justify-center">
        <div className="searchbar my-6 flex flex-wrap justify-center items-center shadow-md ">
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search here' className=' rounded-l-md py-2 outline-none border-gray-400 md:w-96 px-4 border-l-2 bg-gray-200 border-y-2' />
            <button onClick={fetchMovieData} className='py-2 md:px-6 px-4 bg-[#3730a3] hover:bg-[#36308f]  border-y-2 rounded-r-md  border-r-2 border-gray-400 text-white font-bold'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
