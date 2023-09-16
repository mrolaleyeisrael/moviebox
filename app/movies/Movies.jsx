import React from 'react'
import MovieCard from '@/components/MovieCard'
import getMovies from '@/lib/get-movies'
import Image from 'next/image'
import poster from '@/assets/poster.svg'
import Link from 'next/link'
import { AiFillPlayCircle } from 'react-icons/ai'
import NavBar from '@/components/NavBar'
const Movies = async () => {
  const moviesData = getMovies();
  const { results: movies } = await moviesData;

  const bannerMovie = movies[Math.floor(Math.random() * movies.length)];

  function truncateOverview(text) {
    if (text?.length > 200) {
      return text.slice(0, 200) + "...";
    }
    return text;
  }

  return (
    <>
      <Image src={`https://image.tmdb.org/t/p/original${bannerMovie?.backdrop_path}`} loading="lazy" alt={bannerMovie?.title || bannerMovie?.name || bannerMovie?.original_name} width={500} height={1000} className=' w-full h-[600px] object-cover absolute z-10 ' />

      <NavBar />
      <section className=' w-full object-cover z-10 relative h-[600px] justify-center items-center  grid grid-cols-2 px-24  '>

        <div className=' max-w-[604px] flex flex-col gap-4 p-4 rounded-xl bg-black/20 '>
          <h1 className=' text-5xl leading-[56px] font-bold text-white  '>
            {bannerMovie?.title || bannerMovie?.name || bannerMovie?.original_name}
          </h1>
          <p className=' text-sm font-medium text-white ' >
            {truncateOverview(bannerMovie?.overview) || "No overview yet"}
          </p>
          <button className=' flex gap-2 px-4 py-[6px] rounded-md bg-[#BE123C]  items-center w-fit ' >
            <span>
              <AiFillPlayCircle className=' text-white h-5 w-5 ' />
            </span>
            <Link className=' text-white text-sm font-bold'  href={`/movies/${bannerMovie?.id}`} >Play Trailer</Link>
          </button>

        </div>

        <ul className=' flex flex-col text-xs  text-[#9CA3AF] font-bold absolute right-6 gap-[10px] '>
          <li className=' flex items-center gap-2 justify-end ' >1</li>
          <li className=' flex items-center gap-2 justify-end ' >2</li>
          <li className=' flex items-center gap-2 justify-end ' ><p className=' h-1 w-5 mr-1 bg-white  rounded-full' ></p>3</li>
          <li className=' flex items-center gap-2 justify-end ' >4</li>
          <li className=' flex items-center gap-2 justify-end ' >5</li>
        </ul>
      </section>

      <section className=' pt-[70px] px-24 bg-white w-full text-black '>
        <div className=' flex justify-between items-center mb-11 '>
          <h1 className=' font-bold text-[36px] '>Featured Movie</h1>
          <p className=' flex  items-center gap-2 text-[#B91C1C] text-lg font-normal '>See more
            <span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span> </p>
        </div>
        <div className=' grid grid-cols-4 gap-20 '>

          {
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          }

        </div>

      </section>
    </>

  )
}

export default Movies