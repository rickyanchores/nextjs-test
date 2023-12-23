import React from 'react'

const Hero = () => {
  return (
    <div className='Hero bg-slate-800 rounded-lg p-5 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center'>
      <img className='hero-image rounded-lg' src="https://preview.redd.it/hot-take-maybe-geto-is-still-the-best-written-character-in-v0-20srhwds9agb1.jpg?width=640&crop=smart&auto=webp&s=405bd569a977a0d4e7d70cbc0e125288f6eec392" alt="hero-img" />
      <div className="text-container items-center">
        <h1 className='hero-title font-bold text-2xl'>Suguru Geto</h1>
        <p className='hero-description mt-2'>Powerful sorcerer with ability to manipulate and absorb curses</p>
        <button className='btn mt-2 bg-black p-5 rounded-md animate-pulse'>Read more</button>
      </div>
    </div>
  )
}

export default Hero;