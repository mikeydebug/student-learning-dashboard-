'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Home, BookOpen, BarChart2, Settings } from 'lucide-react'

const navItems = [
  { id: 'home', icon: Home, label: 'Dashboard' },
  { id: 'courses', icon: BookOpen, label: 'Courses' },
  { id: 'analytics', icon: BarChart2, label: 'Analytics' },
  { id: 'settings', icon: Settings, label: 'Settings' },
]

export function Sidebar() {
  const [activeId, setActiveId] = useState(navItems[0].id)

  return (
    <nav className="fixed md:static bottom-0 left-0 right-0 md:w-16 lg:w-64 h-16 md:h-screen bg-[#0a0a0f] border-t md:border-t-0 md:border-r border-white/5 z-50 flex md:flex-col items-center lg:items-start p-2 md:p-4 gap-2 md:gap-4 overflow-hidden shrink-0">
      <div className="hidden md:flex items-center gap-3 p-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
          <BookOpen className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-white hidden lg:block tracking-tight">NextGen</span>
      </div>

      <ul className="flex md:flex-col w-full gap-1 justify-around md:justify-start">
        {navItems.map((item) => {
          const isActive = activeId === item.id
          return (
            <li key={item.id} className="relative group w-full">
              <button
                onClick={() => setActiveId(item.id)}
                className={`relative flex items-center gap-3 w-full p-3 rounded-xl transition-colors z-10 ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                aria-label={item.label}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active-indicator"
                    className="absolute inset-0 bg-indigo-600/20 border border-indigo-500/30 rounded-xl"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon className="w-5 h-5 relative z-10 shrink-0" />
                <span className="hidden lg:block relative z-10 font-medium">{item.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
