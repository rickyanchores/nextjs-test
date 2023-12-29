import React from 'react'

const Nav = () => {
  return (
    <div className='Nav bg-purple-950 flex justify-around p-5'>
        <div className="logo">JJK</div>
        <div className="navLinks flex list-none gap-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </div>
    </div>
  )
}

export default Nav;