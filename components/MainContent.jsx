import React from 'react'
import { GrDown } from 'react-icons/gr'

const MainContent = () => {
  return (
    <div className=' text-black px-10 pt-10  pb-32 w-full ' >

      {/* trailer video  */}
      <div className=' h-[449px] w-full bg-[#666] rounded-[20px]'>

      </div>


      {/* details  */}
      <div className=' flex gap-5 pt-[30px] '>

        <div className=' w-[774px] '>
          <div className=' flex items-center'>
            <div className=' flex gap-2 text-[25px] font-medium  '>
              <p>Top Gun: Maverick</p>
              •
              <p>2022</p>
              •
              <p>PG-13</p>
              •
              <p>2h 10m</p>
            </div>

            <div className=' flex gap-3 ml-4 '>
              <p className=' text-[15px] py-1 px-4 rounded-full border shrink-0 border-[#F8E7EB] text-[#B91C1C] '>
                Action
              </p>

              <p className=' text-[15px] py-1 px-4 rounded-full border shrink-0 border-[#F8E7EB] text-[#B91C1C] '>
                Drama
              </p>
            </div>
          </div>

          <div className=' pt-6 '>
            <p className=' mb-9'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis fuga ipsum! Quam sint aut delectus quisquam provident sit ipsam molestiae reiciendis quidem harum at dignissimos alias laboriosam, id quae.
            </p>

            <div className=' flex flex-col text-[20px]   gap-7 '>
              <div className=' flex items-center gap-2 '>
                <p className=' text-[#666]  '>Director :</p>
                <p className=' text-[#BE123C] '>Joseph Kosinski</p>
              </div>

              <div className=' flex items-center gap-2 '>
                <p className=' text-[#666] '>Writers :</p>
                <p className=' text-[#BE123C] '>Jim Cash, Jack Epps Jr, Peter Craig</p>
              </div>

              <div className=' flex items-center gap-2 '>
                <p className=' text-[#666] '>Stars :</p>
                <p className=' text-[#BE123C] '>Tom Cruise, Jennifer Connelly, Val Kilmer</p>
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

        <div className=' w-[360px]  '>
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