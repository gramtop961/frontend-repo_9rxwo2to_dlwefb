import React, { useRef } from 'react'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Message from './components/Message'

function App() {
  const memoriesRef = useRef(null)

  const handleStart = () => {
    const el = document.getElementById('memories')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const images = [
    'https://images.unsplash.com/photo-1516278256815-04d81fac2a6a?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520561959731-836a1b6762c0?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516924962500-2b4b2ace9f47?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop',
  ]

  // Royalty-free gentle background music (Pixabay)
  const audioSrc = 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_2f4d8efde8.mp3?filename=sweet-energetic-pop-110495.mp3'

  return (
    <div className="min-h-screen bg-slate-950">
      <Hero onStart={handleStart} />
      <Message />
      <div ref={memoriesRef}>
        <Carousel images={images} autoPlay interval={3500} withMusic audioSrc={audioSrc} />
      </div>

      <footer className="py-10 text-center text-sky-200/70 bg-slate-950">
        Made with lots of love and a little bit of magic ✨
      </footer>
    </div>
  )
}

export default App
