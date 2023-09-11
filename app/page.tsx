import Image from 'next/image'
import Hero from '@/components/Hero'
import Feature from '@/components/Feature'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <Feature/>
    </main>
  )
}
