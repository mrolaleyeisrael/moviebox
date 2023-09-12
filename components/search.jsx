import React from 'react'

const SearchComponent = () => {
  return (
    <div className=' w-[525px] flex justify-between items-center border-2 border-[#D1D5DB] rounded-md px-[10px] py-[6px] '>
      <input type="text" placeholder="What do you want to watch?" name="search" className="bg-transparent border-none outline-none w-full" />

      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </div>
  )
}

export default SearchComponent