import React from 'react'

const Nav = () => {
  return (
    <div className='Nav flex justify-around p-5'>
        <div className="logo">SUGU</div>
        <div className="navLinks flex list-none gap-4">
            <li>Home</li>
            <li>Gallery</li>
            <li>Info</li>
        </div>
    </div>
  )
}

export default Nav