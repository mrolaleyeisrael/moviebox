import React from 'react'
import Rating from './Rating'
const MovieCard = () => {
  return (
    <div className=' flex flex-col gap-3'>
      {/* image  */}
      <div className=' h-[370px]  bg-red-200 relative' >
        <div className=' flex justify-between items-center pt-4 px-4 '>

          <p className=' px-2 py-[3px] bg-white bg-opacity-50 backdrop-blur-1 rounded-full text-[#111827] text-xs font-bold ' >
            TV Series
          </p>

          <p className=' p-1 rounded-full bg-white bg-opacity-50 backdrop-blur-1 shrink-0 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z" fill="#D1D5DB" />
            </svg>
          </p>
        </div>
      </div>

      <div className=' flex flex-col gap-3 '>
        <p className=' font-bold text-xs text-[#9CA3AF] '>USA, 2016 - Current</p>
        <h1 className=' font-bold text-[18px] '>Stranger Things</h1>
        <Rating />
        <p className=' font-bold text-xs text-[#9CA3AF] ' >Action, Adventure / Horror</p>
      </div>


    </div>
  )
}

export default MovieCard