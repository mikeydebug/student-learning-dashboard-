import { ReactNode } from 'react'

interface BentoGridProps {
  children: ReactNode
}

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-[#09090b] min-h-screen">
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min bento-grid">
          {children}
        </div>
      </main>
    </div>
  )
}
