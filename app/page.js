import NavBar from '../components/navbar'
import Image from 'next/image'
import poster from '@/assets/poster.svg'
import { AiFillPlayCircle } from 'react-icons/ai'
import Movies from './movies/Movies'
import Footer from '@/components/footer'

export default function Home() {
  return (

    <main className="flex relative max-w-[1440px] mx-auto bg-black flex-col items-center justify-between ">
      <Image src={poster} alt='Hero Background' width={500} height={1000} className=' w-full h-[600px] object-cover absolute z-10 ' />
      <NavBar />
      <section className=' w-full object-cover z-10 relative h-[600px] justify-center items-center  grid grid-cols-2 px-24  '>
        <div className=' max-w-[404px] flex flex-col gap-4 '>
          <h1 className=' text-5xl leading-[56px] font-bold text-white  '>John Wick 3 : Parabellum</h1>
          <p className=' text-sm font-medium text-white ' >John Wick is on the run after killing a member of the international assassins &appos; guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          <button className=' flex gap-2 px-4 py-[6px] rounded-md bg-[#BE123C]  items-center w-fit ' >
            <span>
              <AiFillPlayCircle className=' text-white h-5 w-5 ' />
            </span>
            <span className=' text-white text-sm font-bold '>Play Trailer</span>
          </button>

        </div>

        <ul className=' flex flex-col text-xs  text-[#9CA3AF] font-bold absolute right-6 gap-[10px] '>
          <li className=' flex items-center gap-2 justify-end ' >1</li>
          <li className=' flex items-center gap-2 justify-end ' >2</li>
          <li className=' flex items-center gap-2 justify-end ' > <p className=' h-1 w-5 bg-white  rounded-full ' ></p> 3</li>
          <li className=' flex items-center gap-2 justify-end ' >4</li>
          <li className=' flex items-center gap-2 justify-end ' >5</li>
        </ul>
      </section>

      {/* featured movie  */}
      <Movies />

      {/* new arrivals  */}


      {/* footer  */}
      <Footer />

    </main>
  )
}
