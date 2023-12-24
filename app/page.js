import Card from '@/components/Card/Card'
import Gallery from '@/pages/Gallery/Gallery'
import Hero from '@/pages/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="Home m-4">
      test nextjs
      <Hero />
      <Gallery />
    </main>
  )
}
