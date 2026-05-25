'use client'

import { motion } from 'framer-motion'

interface SkeletonTileProps {
  index: number
}

export function SkeletonTile({ index }: SkeletonTileProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0.4, 0.8, 0.4], y: 0 }}
      transition={{ 
        y: { type: 'spring', stiffness: 300, damping: 30, delay: index * 0.08 },
        opacity: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } 
      }}
      className="rounded-3xl p-6 bg-[#111118] border border-white/5 min-h-[200px] flex flex-col justify-between"
    >
      <div className="w-10 h-10 rounded-xl bg-[#16161f] mb-4" />
      
      <div className="space-y-4">
        <div className="h-5 bg-[#16161f] rounded w-3/4" />
        <div className="h-5 bg-[#16161f] rounded w-1/2" />
        
        <div className="space-y-2 pt-4">
          <div className="flex justify-between items-center">
            <div className="h-3 bg-[#16161f] rounded w-16" />
            <div className="h-3 bg-[#16161f] rounded w-8" />
          </div>
          <div className="h-2 w-full bg-[#16161f] rounded-full" />
        </div>
      </div>
    </motion.article>
  )
}
