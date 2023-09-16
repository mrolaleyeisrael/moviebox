import React from 'react'
import { GoHome } from 'react-icons/go'
import { BsCameraReels } from 'react-icons/bs'
import { BiSlideshow } from 'react-icons/bi'
import { BsCalendar3 } from 'react-icons/bs'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import Logo from '@/components/logo'
import { cn } from '@/lib/utils'


const SideNav = () => {

  const links = [
    {
      name: 'Home',
      icon: <GoHome className='  h-6 w-6 font-bold ' />,
      color: 'text-[#666]'
    },
    {
      name: 'Movies',
      icon: <BsCameraReels className='  h-6 w-6 font-bold ' />,
      color: 'text-[#BE123C]'
    },
    {
      name: 'TV Series',
      icon: <BiSlideshow className='  h-6 w-6 font-bold ' />,
      color: 'text-[#666]'
    },
    {
      name: 'Upcoming',
      icon: <BsCalendar3 className='  h-6 w-6 font-bold ' />,
      color: 'text-[#666]'
    },
  ]


  return (
    <div className=' w-[226px] rounded-r-[45px] border-black/30 border  shrink-0 pt-[52px] '>


      <div className='fixed w-[226px] h-full left-0'>
        <div className=' w-full flex justify-center mb-20 text-black '>
          <Logo color={"black"} />
        </div>

        {/* link  */}
        <ul className=' flex flex-col '>


          {links.map((link) => {
            return (
              <li key={link.name} className={cn('  flex items-center gap-[15px] py-4 px-11  text-[#666] hover:border-r-2 hover:border-r-[#BE123c]  hover:text-[#BE123C] hover:bg-[#BE123c]/20  ', link.name === "Movies" ? " text-[#BE123C] bg-[#BE123c]/20 border-r-2 border-r-[#BE123c]  ":"" )}>
                {link.icon}
                <span className='  text-xl font-bold '>{link.name}</span>
              </li>
            )
          })}
        </ul>

        {/* card  */}
        <div className=' px-[28px] mt-12 ' >
          <div className=' flex flex-col gap-2 text-black border border-[#BE123C] rounded-[20px] px-4 pt-[42px]  pb-4 '>
            <h1 className=' text-[15px] font-semibold ' >Play movie quizes and earn free tickets</h1>
            <p className=' text-xs font-medium '>50k people are playing now</p>
            <button className=' shrink-0 text-[#BE123C] px-4 py-[6px] bg-[#BE123C]/20 rounded-full ' >Start playing</button>
          </div>
          <div className=' text-black mt-11 flex justify-center items-center gap-2'>
            <RiLogoutBoxRLine className=' h-6 w-6 text-[#666] ' />
            <p className=' text-[20px] text-[#666] font-semibold '>Log out</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SideNav