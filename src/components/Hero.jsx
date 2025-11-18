import React from 'react'
import Spline from '@splinetool/react-spline'
import { Heart, Sparkles } from 'lucide-react'

export default function Hero({ onStart }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pVLJXSVq3zyQq0OD/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-500/10 via-sky-900/30 to-slate-950/80" />

      <div className="relative z-10 h-full flex items-center justify-center p-6">
        <div className="text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-sky-100 text-sm mb-4 border border-white/20">
            <Sparkles className="w-4 h-4" />
            Birthday surprise
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
            Happy Birthday, Beautiful!
          </h1>
          <p className="mt-4 text-sky-100/90 text-lg md:text-xl">
            Wishing you a day as lovely as your smile and a year full of little moments that feel like magic.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button onClick={onStart} className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow-lg shadow-pink-500/30 hover:bg-pink-600 transition">
              <Heart className="w-5 h-5 fill-white/90" />
              Start the surprise
            </button>
            <a href="#memories" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
              See our memories
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
