import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [query, SetQuery] = useState({
    type: "Buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    SetQuery((prev) => ({ ...prev, type: val }));
  }

  const css = {
    selected: "bg-black text-white h-10 w-20 cursor-pointer rounded-t-md",
    notSelected: "border h-10 w-20 cursor-pointer border-b-0 rounded-t-md"
  }

  return (
    <div>
      <div>
        <button onClick={() => switchType("Buy")} className={query.type === 'Buy'? css.selected: css.notSelected}>Buy</button>
        <button onClick={() => switchType("Rent")} className={query.type === 'Rent'?css.selected: css.notSelected}>Rent</button>
      </div>
      <form action="" className='md:border flex flex-col md:flex-row justify-between sm:w-[30rem] w-80 rounded-md'>
      <input type="text" name='location' placeholder='City' className='w-full border md:border-0 h-12 border-b-0 pl-4'/>
      <input type="number" name='minPrice' min={0} max={10000000} placeholder='Min Price' className=' w-full border md:border-0 h-12 border-b-0'/>
      <input type="number" name='maxPrice' min={0} max={10000000} placeholder='Max Price' className=' w-full border md:border-0 h-12'/>
      <Link to="/list">
        <button className='h-12 w-16 sm:w-20 bg-[#fece51] hover:bg-amber-500 flex justify-center items-center text-2xl font-bold md:border-l-1 p-2 px-4 border-t-0 border md:border-0 cursor-pointer rounded-md'>
          <FiSearch />
        </button>
      </Link>
      </form>
    </div>
  )
}

export default SearchBar