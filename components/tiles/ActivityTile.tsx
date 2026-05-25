'use client'

import { motion } from 'framer-motion'

interface ActivityTileProps {
  index: number
}

export function ActivityTile({ index }: ActivityTileProps) {
  // Generate mock contribution graph data
  const weeks = Array.from({ length: 12 })
  const days = Array.from({ length: 7 })

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: index * 0.08 }}
      className="rounded-3xl p-6 bg-[#111118] border border-white/5 col-span-1 md:col-span-2 lg:col-span-1"
      style={{ gridArea: 'activity' }}
    >
      <h3 className="text-gray-400 uppercase tracking-[0.08em] text-xs font-medium mb-4">
        Learning Activity
      </h3>
      
      <div className="flex gap-1.5 h-[120px]">
        {weeks.map((_, weekIdx) => (
          <div key={weekIdx} className="flex flex-col gap-1.5 flex-1">
            {days.map((_, dayIdx) => {
              // Randomly determine opacity for mock data
              const intensity = Math.random()
              let bgClass = "bg-[#16161f]" // Empty
              if (intensity > 0.8) bgClass = "bg-indigo-500" // High
              else if (intensity > 0.5) bgClass = "bg-indigo-500/60" // Medium
              else if (intensity > 0.2) bgClass = "bg-indigo-500/30" // Low
              
              return (
                <div 
                  key={`${weekIdx}-${dayIdx}`} 
                  className={`w-full aspect-square rounded-sm ${bgClass}`}
                />
              )
            })}
          </div>
        ))}
      </div>
    </motion.article>
  )
}
