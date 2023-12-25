import Card from '@/components/Card/Card'
import Nav from '@/components/Nav/Nav'
import About from '@/pages/About/About'
import Gallery from '@/pages/Gallery/Gallery'
import Hero from '@/pages/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="Home m-4">
      <Nav />
      <Hero />
      <About />
      <Gallery />
    </main>
  )
}
