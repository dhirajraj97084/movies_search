import React from 'react'

function MovieCard({ moviesData, loading }) {
  return (
    <div>
      <div className="main flex flex-wrap px-4">
        {
          moviesData.map((item, index) => {
            const {Poster,Title,Type,Year,imdbID}=item;
            return (
              <div key={index} className="child p-2 lg:w-1/4 w-full">
                <div className="sub_child bg-[#262075] p-2 rounded-2xl pb-2">
                  <img src={Poster} alt="img" className='rounded-lg w-full' />
                  <h1 className='text-white font-bold text-xl py-1'>{Title}</h1>
                  <p className='text-white'>Year :{Year}</p>
                  {/* <p className='text-white'>Type :{Type}</p>
                  <p className='text-white'>imdID :{imdbID}</p> */}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MovieCard
