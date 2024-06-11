import React from 'react'

const Filter = ({filterType,setFilterType,handleFilter}) => {
  return (
    <form className='flex flex-col gap-3 my-2' onSubmit={handleFilter}>
        <select  className="bg-blue-800 text-slate-200 p-2 cursor-pointer" value = {filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value={1} key={1}>Filter By Quantity</option>
            <option value={2} key={2}>Filter By Name</option>
        </select>
        <button type='submit' className="bg-green-800 text-slate-200 p-2"> 
            Apply Filter
        </button>
    </form>
  )
}

export default Filter