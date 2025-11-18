import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

export default function Carousel({ images = [], autoPlay = true, interval = 3500, withMusic = true, audioSrc }) {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(autoPlay)
  const timerRef = useRef(null)
  const audioRef = useRef(null)

  useEffect(() => {
    if (!playing) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(timerRef.current)
  }, [playing, interval, images.length])

  useEffect(() => {
    if (!withMusic) return
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [playing, withMusic])

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <section id="memories" className="relative py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Favorite Moments</h2>
            <p className="text-sky-200/80 mt-2">A little carousel of smiles, adventures and inside jokes.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setPlaying((p) => !p)} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
              {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />} {playing ? 'Pause' : 'Play'}
            </button>
            <button onClick={prev} className="p-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`memory-${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}

          {/* gradient edges */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/40" />
        </div>

        {withMusic && (
          <audio ref={audioRef} src={audioSrc} loop preload="auto" />
        )}
      </div>
    </section>
  )
}
