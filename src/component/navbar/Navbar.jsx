import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='top-0 sticky'>
      <div className="main">
        <div className=" flex flex-wrap justify-between items-center space-x-4 px-10 py-4 bg-[#3730a3] text-white shadow-md ">
            {/* left */}
            <div className="left mx-auto md:mx-0 pb-2 md:mb-0">
              {/* <div className="logo">
                  
              </div> */}
              <div className="heading ">
                <h1 className='text-xl font-bold cursor-pointer'>MoviesMasala</h1>
              </div>
            </div>
            {/* right */}
            <div className="right">
               <ul className='flex space-x-5 justify-center'>
                   <li className='cursor-pointer '>Home</li>
                   <li className='cursor-pointer '>About</li>
                   <li className='cursor-pointer '>Contact</li>
                   <li className='cursor-pointer '>Services</li>
               </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
