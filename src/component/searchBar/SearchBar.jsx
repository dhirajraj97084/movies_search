import React from 'react'

function SearchBar() {
  return (
    <div>
      <div className="main flex justify-center">
        <div className="searchbar">
            <input type="text" placeholder='Search here' className=' rounded-l-md py-2 outline-none border-gray-200 w-96 px-4 border-l-2 bg-gray-100 border-y-2' />
            <button className='py-2 px-6 bg-blue-500 mt-6 border-y-2 rounded-r-md  border-r-2 border-gray-200 text-white font-bold'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
