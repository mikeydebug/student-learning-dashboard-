'use client'

import { motion } from 'framer-motion'
import { StreakIndicator } from '../ui/StreakIndicator'

interface HeroTileProps {
  name: string
  streak: number
  index: number
}

export function HeroTile({ name, streak, index }: HeroTileProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: index * 0.08 }}
      className="relative col-span-1 md:col-span-2 lg:col-span-3 rounded-3xl p-8 overflow-hidden bg-[#0a0a0f] border border-white/5"
      style={{ gridArea: 'hero' }}
    >
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {/* Glow Effect */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
            Welcome back, {name}
          </h1>
          <p className="text-gray-400 text-lg">
            You're making great progress. Ready to continue?
          </p>
        </div>
        <div className="shrink-0">
          <StreakIndicator streak={streak} />
        </div>
      </div>
    </motion.article>
  )
}
