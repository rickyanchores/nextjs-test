import Card from '@/components/Card/Card';
import React from 'react'

const Gallery = () => {


  const cards = [
    {
      image: "https://beebom.com/wp-content/uploads/2022/11/gojo-and-geto-friendship.jpg?w=750&quality=75",
      title: "Gojo and Geto",
      description: "JJK S2 story"
    },
    {
      image: "https://www.playstationlifestyle.net/wp-content/uploads/sites/9/2023/09/jjk-sukuna-header.png?w=1024",
      title: "Sukuna",
      description: "King of curses"
    },
    {
      image: "https://butwhytho.net/wp-content/uploads/2023/07/Toji-Fushiguro-But-Why-Tho-1.jpg",
      title: "Toji",
      description: "Overpowered with no curse energy"
    }
  ]

  return (
    <div className='Gallery grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center m-auto'>
        <Card image={cards[0].image} title={cards[0].title} description={cards[0].description}/>
        <Card image={cards[1].image} title={cards[1].title} description={cards[1].description}/>
        <Card image={cards[2].image} title={cards[2].title} description={cards[2].description}/>
    </div>
  )
}

export default Gallery;