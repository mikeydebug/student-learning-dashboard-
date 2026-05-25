'use client'

import { motion } from 'framer-motion'
import { Course } from '@/lib/supabase/types'
import { AnimatedProgressBar } from '../ui/AnimatedProgressBar'
import { Code2, Database, FileCode2, Cpu, LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  FileCode2,
  Cpu,
}

interface CourseTileProps {
  course: Course
  index: number
}

export function CourseTile({ course, index }: CourseTileProps) {
  const Icon = iconMap[course.icon_name] || Code2

  return (
    <motion.article
      initial={{ opacity: 0, y: 20, borderColor: 'rgba(255, 255, 255, 0.05)' }}
      animate={{ opacity: 1, y: 0, borderColor: 'rgba(255, 255, 255, 0.05)' }}
      whileHover={{ scale: 1.015, borderColor: 'rgba(124, 58, 237, 0.6)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.08 }}
      className="relative group rounded-3xl p-6 bg-[#111118] border overflow-hidden flex flex-col justify-between min-h-[200px] cursor-pointer"
    >
      {/* Gradient Mesh Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Radial Gradient Glow on Hover */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)] pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#16161f] flex items-center justify-center border border-white/5">
          <Icon className="w-5 h-5 text-cyan-400" />
        </div>
      </div>

      <div className="relative z-10 mt-auto space-y-4">
        <h3 className="text-lg font-semibold text-white line-clamp-2 leading-tight">
          {course.title}
        </h3>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400 uppercase tracking-[0.08em] text-xs font-medium">Progress</span>
            <span className="text-white tabular-nums font-medium">{course.progress}%</span>
          </div>
          <AnimatedProgressBar progress={course.progress} />
        </div>
      </div>
    </motion.article>
  )
}
