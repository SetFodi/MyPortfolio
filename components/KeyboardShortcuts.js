'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function KeyboardShortcuts() {
  const [showHints, setShowHints] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Show keyboard hints with ?
      if (e.key === '?' && !e.shiftKey) {
        e.preventDefault()
        setShowHints(prev => !prev)
      }
      // Close with Escape
      if (e.key === 'Escape') {
        setShowHints(false)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const shortcuts = [
    { keys: ['Alt', 'H'], description: 'Scroll to top' },
    { keys: ['Alt', 'P'], description: 'Jump to Projects' },
    { keys: ['Alt', 'S'], description: 'Jump to Skills' },
    { keys: ['?'], description: 'Toggle this help' },
    { keys: ['Esc'], description: 'Close dialogs' },
  ]

  return (
    <>
      {/* Help Icon */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowHints(prev => !prev)}
        className="fixed bottom-8 left-8 z-50 p-3 rounded-full glass-strong border border-white/20 text-white/60 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 group"
        aria-label="Keyboard shortcuts"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Press ? for help
        </span>
      </motion.button>

      {/* Shortcuts Panel */}
      <AnimatePresence>
        {showHints && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setShowHints(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-md"
            >
              <div className="glass-strong rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-light gradient-text">Keyboard Shortcuts</h3>
                  <button
                    onClick={() => setShowHints(false)}
                    className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-3">
                  {shortcuts.map((shortcut, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <span className="text-white/60 text-sm">{shortcut.description}</span>
                      <div className="flex gap-1">
                        {shortcut.keys.map((key, keyIdx) => (
                          <kbd
                            key={keyIdx}
                            className="px-2 py-1 text-xs bg-white/10 border border-white/20 rounded text-white/80 font-mono"
                          >
                            {key}
                          </kbd>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <p className="text-xs text-white/30 mt-6 text-center">
                  Press <kbd className="px-1 py-0.5 bg-white/10 rounded text-white/60">Esc</kbd> to close
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

