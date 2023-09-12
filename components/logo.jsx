import React from 'react'
import Image from 'next/image'
import tv from '@/assets/tv.svg'
import Link from 'next/link'

const Logo = ({ color }) => {
  return (
    <Link href='/'>
      <span className=' flex items-center gap-6'>
        <Image src={tv} alt='logo' height={50} width={50} />
        <p className={` font-bold text-[${color}] text-[24px] leading-6 `}>MovieBox</p>
      </span>
    </Link>
  )
}

export default Logo