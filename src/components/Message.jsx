import React from 'react'
import { Music, Gift } from 'lucide-react'

export default function Message() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-200 border border-pink-500/30 mb-4">
          <Music className="w-4 h-4" />
          Special Note
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white">For the one who makes my world brighter</h3>
        <p className="mt-4 text-sky-100/90 leading-relaxed">
          Every photo is a little heartbeat of a memory we made. I hope today wraps you in laughter, warm hugs, and your favorite songs. You deserve celebrations that don’t end and smiles that don’t fade.
        </p>
        <p className="mt-4 text-sky-100/90">Here’s to more sunsets, more coffee runs, and more moments that feel like home.</p>
        <div className="mt-8">
          <a href="#memories" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow-lg shadow-pink-500/30 hover:bg-pink-600 transition">
            <Gift className="w-5 h-5" />
            Open your surprise
          </a>
        </div>
      </div>
    </section>
  )
}
