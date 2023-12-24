import Card from '@/components/Card/Card';
import React from 'react'

const Gallery = () => {
  return (
    <div className='Gallery grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center m-auto'>
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Gallery;