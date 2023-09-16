import React from 'react'
import Logo from './logo'
import SearchComponent from './search'
import AuthComponent from './auth'


const NavBar = () => {
  return (
    <div className=' flex justify-between items-center w-full  px-24 pt-4 absolute z-50 '>

      <Logo color={"white"} />
      <SearchComponent />
      <AuthComponent />
    </div>
  )
}

export default NavBar