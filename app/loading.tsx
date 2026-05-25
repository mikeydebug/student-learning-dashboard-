'use client'

import { motion } from 'framer-motion'
import { BentoGrid } from '@/components/layout/BentoGrid'
import { SkeletonTile } from '@/components/tiles/SkeletonTile'

export default function Loading() {
  return (
    <BentoGrid>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0.4, 0.8, 0.4], y: 0 }}
        transition={{ 
          y: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } 
        }}
        className="col-span-1 md:col-span-2 lg:col-span-3 rounded-3xl p-8 bg-[#0a0a0f] border border-white/5 min-h-[200px]"
        style={{ gridArea: 'hero' }}
      />
      <SkeletonTile index={1} />
      <SkeletonTile index={2} />
      <SkeletonTile index={3} />
      <SkeletonTile index={4} />
      
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0.4, 0.8, 0.4], y: 0 }}
        transition={{ 
          y: { type: 'spring', stiffness: 300, damping: 30, delay: 0.4 },
          opacity: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } 
        }}
        className="rounded-3xl p-6 bg-[#111118] border border-white/5 col-span-1 md:col-span-2 lg:col-span-1 min-h-[200px]"
        style={{ gridArea: 'activity' }}
      />
    </BentoGrid>
  )
}
