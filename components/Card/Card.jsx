import React from 'react'

const Card = () => {
  return (
    <div className='Card mt-5 bg-gray-400 rounded-md p-5'>
        <img src="https://beebom.com/wp-content/uploads/2022/11/gojo-and-geto-friendship.jpg?w=750&quality=75" alt="card-image" />
        <div className="card-text">
            <h1 className="card-title text-orange-600 font-bold">Gojo and Geto</h1>
            <p className='card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eveniet!</p>
        </div>
        
    </div>
  )
}

export default Card