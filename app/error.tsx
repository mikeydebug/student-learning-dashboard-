'use client'

import { useEffect } from 'react'
import { AlertCircle, RefreshCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 bg-[#09090b]">
      <div className="bg-[#111118] border border-white/5 rounded-3xl p-8 max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 bg-red-500/10 rounded-2xl mx-auto flex items-center justify-center border border-red-500/20">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Something went wrong!</h2>
          <p className="text-gray-400 text-sm">
            We couldn't load your dashboard data. Please try again.
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors"
        >
          <RefreshCcw className="w-4 h-4" />
          Try again
        </button>
      </div>
    </div>
  )
}
