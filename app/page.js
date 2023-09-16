import { AiFillPlayCircle } from 'react-icons/ai'
import Movies from './movies/Movies'
import Footer from '@/components/footer'
import React from 'react'

export default  function Home() {

  return (
    <main className="flex relative mx-auto bg-black flex-col items-center justify-between ">
      
      {/* featured movie  */}
      <Movies />


      <Footer />

    </main>
  )
}
