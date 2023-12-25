import React from 'react'

const Card = ({image,title,description}) => {
  return (
    <div className='Card mt-5 w-90 p-5'>
        <img src={image} alt="card-image" />
        <div className="card-text">
            <h1 className="card-title text-orange-600 font-bold">{title}</h1>
            <p className='card-description'>{description}</p>
        </div>
        
    </div>
  )
}

export default Card;