import React from 'react'

const Hero = () => {
  return (
    <div className='Hero bg-slate-800 p-5 font-mono'>
      <h1 className='Hero-title'>Test</h1>
      <img src="https://preview.redd.it/hot-take-maybe-geto-is-still-the-best-written-character-in-v0-20srhwds9agb1.jpg?width=640&crop=smart&auto=webp&s=405bd569a977a0d4e7d70cbc0e125288f6eec392" alt="hero-img" />
      <div className="text-container">
        <h3>Suguru Geto</h3>
        <p>Powerful sorcerer with ability to manipulate and absorb curses</p>
      </div>
    </div>
  )
}

export default Hero;