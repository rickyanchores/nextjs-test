import React from 'react'

const Grid = () => {
  return (
    <div className='Grid min-h-screen p-5 grid grid-cols-1 md:grid-cols-3 md:grid-rows-5 gap-4'>
        <div className="A bg-red-600 p-5 rounded-md md:col-span-2 row-span-3">Image</div>
        <div className="B bg-red-600 p-5 rounded-md md:col-span-1 row-span-3">Social</div>
        <div className="C bg-red-600 p-5 rounded-md md:col-span-1 row-span-2">Logo</div>
        <div className="D bg-red-600 p-5 rounded-md md:col-span-2 row-span-2">Services</div>
    </div>
  )
}

export default Grid