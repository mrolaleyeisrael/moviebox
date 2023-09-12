import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import MovieCard from '@/components/MovieCard'

const Movies = () => {
  return (
    <section className=' pt-[70px] px-24 bg-white w-full text-black '>
      <div className=' flex justify-between items-center mb-11 '>
        <h1 className=' font-bold text-[36px] '>Featured Movie</h1>
        <p className=' flex  items-center gap-2 text-[#B91C1C] text-lg font-normal '>See more
          <span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg></span> </p>
      </div>
      <div className=' grid grid-cols-4 gap-20 '>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />

      </div>

    </section>
  )
}

export default Movies