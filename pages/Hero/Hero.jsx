import React from 'react'

const Hero = () => {
  return (
    <div className='Hero grid grid-cols-1 md:grid-cols-2 justify-around items-center'>
      <img className='hero-image w-full' src="https://i.ytimg.com/vi/_gRW7yQzRKI/maxresdefault.jpg" alt="hero-img" />
      <div className="text-container w-full p-5 b">
        <h1 className='hero-title font-bold text-4xl'>Jujutsu Kaisen</h1>
        <p className='hero-description mt-2'>A war between sorcerers and curses in Japan</p>
        <button className='btn mt-2 bg-slate-900 p-5 rounded-md animate-pulse'>Read more</button>
      </div>
    </div>
  )
}

export default Hero;