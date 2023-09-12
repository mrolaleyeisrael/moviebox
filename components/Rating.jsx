import React from 'react'
import Image from 'next/image'
import imdb from '@/assets/imdb.svg'
import apple from '@/assets/apple.svg'


const Rating = () => {
  return (
    <div className=' flex justify-between'>
      <div className=' flex gap-[10px] '>
        <Image src={imdb} alt='star' width={35} height={17} />
        <p className=' text-xs '>86 / 100</p>
      </div>

      
      <div className=' flex gap-[10px] '>
        <Image src={apple} alt='star' width={16} height={17} />
        <p className=' text-xs '>97%</p>
      </div>
    </div>
  )
}

export default Rating