'use client'

import { BentoGrid } from '@/components/layout/BentoGrid'
import { motion, AnimatePresence } from 'framer-motion'
import { SkeletonTile } from '@/components/tiles/SkeletonTile'

export default function DashboardLoading() {
  return (
    <BentoGrid>
      <AnimatePresence>
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
        
        <div style={{ gridArea: 'course1' }}><SkeletonTile index={1} /></div>
        <div style={{ gridArea: 'course2' }}><SkeletonTile index={2} /></div>
        <div style={{ gridArea: 'course3' }}><SkeletonTile index={3} /></div>
        <div style={{ gridArea: 'course4' }}><SkeletonTile index={4} /></div>
        
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
      </AnimatePresence>
    </BentoGrid>
  )
}
