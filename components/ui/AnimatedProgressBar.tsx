'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedProgressBarProps {
  progress: number
}

export function AnimatedProgressBar({ progress }: AnimatedProgressBarProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-2 w-full bg-[#16161f] rounded-full overflow-hidden"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full"
        initial={{ width: '0%' }}
        animate={{ width: mounted ? `${progress}%` : '0%' }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
      />
    </div>
  )
}
