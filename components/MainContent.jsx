'use client'

import React from 'react'
import { GrDown } from 'react-icons/gr'
import VideoPlayer from './videoplayer'

const MainContent = ({ movie, credits, similar, trailer }) => {

  console.log(movie)
  console.log(credits)
  console.log(similar)


  let directors = [];
  credits.cast.forEach((cast) => {
    if (cast.known_for_department === "Directing") {
      directors.push(cast.original_name);
    }
  });


  let writers = [];
  credits.cast.forEach((cast) => {
    if (cast.known_for_department === "Writing") {
      writers.push(cast.original_name);
    }
  });

  let starsNames = [];
  let orderedStars = credits.cast.sort((a, b) => a.order - b.order);
  const stars = orderedStars.slice(0, 4);

  stars.forEach((star) => {
    starsNames.push(star.original_name);
  });



  return (
    <div className=' max-w-5xl mx-auto text-black pt-10  pb-32 ' >
    

      {/* trailer video  */}
      <VideoPlayer trailer={trailer} />


      {/* details  */}
      <div className=' flex gap-5 pt-[30px] '>

        <div className=' w-[75%] '>
          <div className=' flex gap-4 items-center'>
            <div className=' flex gap-2 flex-wrap '>
              <h1 data-testid="movie-title"
                className='text-[25px] font-medium  '>{movie.original_title}</h1>
            </div>
            {/* •
              <p>2022</p>
              •
              <p>PG-13</p>
              •
              <p>2h 10m</p> */}

            <div className=' flex gap-3'>
              {movie.genres.map((genre) => {
                return (
                  <p key={genre.name} className=' text-[15px] py-1 px-4 rounded-full border shrink-0 border-[#F8E7EB] text-[#B91C1C] '>
                    {genre.name}
                  </p>
                )
              })
              }



            </div>
          </div>

          <div className=' pt-6 '>
            <p className=' mb-9'>
              {movie.overview}
            </p>

            <div className=' flex flex-col text-[20px]   gap-7 '>
              <div className=' flex items-center gap-2 '>
                <p className=' text-[#666]  '>Director(s):</p>
                <p className=' text-[#BE123C] '>

                  {directors.length === 0
                    ? "Yet to be known"
                    : directors.join(", ")}
                  .
                </p>

              </div>

              <div className=' flex items-center gap-2 '>
                <p className=' text-[#666] '>Writer(s):</p>
                <p className=' text-[#BE123C] '>
                  {writers.length === 0 ? "Yet to be known" : writers.join(", ")}.
                </p>
              </div>

              <div className=' flex items-center gap-2 '>
                <p className=' text-[#666] '>Star(s):</p>
                <p className=' text-[#BE123C] '>
                  {starsNames.length === 0
                    ? "Yet to be known"
                    : starsNames.join(", ")}
                  .
                </p>
              </div>

              <div className='flex gap-6 text-[20px] items-center border border-[#c7c7c7] rounded-[10px] '>
                <div className=' text-white bg-[#BE123C] px-5 py-3 rounded-[10px] shrink-0 '>
                  Top rated movie #65
                </div>
                <div className=' flex w-full items-center justify-between grow-0 pr-[26px] cursor-pointer'>
                  <p>Awards 9 nominations</p>
                  <GrDown className=' ' />
                </div>
              </div>
            </div>


          </div>

        </div>

        <div className=' w-[25%]  '>
          <div className=' flex justify-end items-center gap-2  '>
            <span className=' text-[25px]' >⭐️</span>
            <div className=' flex items-center gap-1 font-medium '>
              <p className=' text-[24px] text-[#E8E8E8] ' >4.5 </p>
              <p className=' text-[#666] text-[20px] '> | 350k</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default MainContent