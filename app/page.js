import Card from '@/components/Card/Card'
import Grid from '@/components/Grid/Grid'
import Nav from '@/components/Nav/Nav'
import About from '@/pages/About/About'
import Chapter from '@/pages/Chapter/Chapter'
import Gallery from '@/pages/Gallery/Gallery'
import Hero from '@/pages/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="Home">
      <Nav />
      <Hero />
      <About />
      <Grid />
      <Gallery />
      <Chapter />
    </main>
  )
}
