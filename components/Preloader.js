import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  
  const codeLines = [
    "Initializing Luka's Portfolio...",
    "Loading creative modules...",
    "Fetching developer profile...",
    "Optimizing user experience...",
    "Starting interface...",
    "Welcome, guest."
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        // Update text based on progress
        const index = Math.min(Math.floor((prev / 100) * codeLines.length), codeLines.length - 1)
        setTextIndex(index)
        return prev + 1
      })
    }, 30)

    return () => clearInterval(timer)
  }, [codeLines.length])

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onComplete()
      }, 500)
    }
  }, [progress, onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center font-mono"
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Laptop Container */}
      <div className="relative w-72 md:w-96">
        
        {/* Screen Frame */}
        <div className="relative bg-[#1a1a1a] rounded-t-lg p-2 border-[3px] border-[#2a2a2a] h-48 md:h-56 shadow-2xl">
          {/* Camera */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/20 rounded-full z-20"></div>
          
          {/* Display */}
          <div className="bg-black w-full h-full rounded overflow-hidden relative flex flex-col p-4 shadow-inner">
            
            {/* Terminal Content */}
            <div className="flex flex-col h-full justify-between z-10">
              <div className="space-y-1.5">
                {codeLines.slice(0, textIndex + 1).map((line, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[10px] md:text-xs text-green-500/80 font-mono flex items-center gap-2"
                  >
                    <span className="text-green-700">➜</span> 
                    {line}
                  </motion.div>
                ))}
                <motion.div 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-3 bg-green-500/80"
                />
              </div>

              {/* Progress Bar in Terminal */}
              <div className="mt-auto">
                <div className="flex justify-between text-[10px] text-green-400/70 mb-1 font-bold">
                  <span>STATUS: {progress < 100 ? 'LOADING' : 'COMPLETE'}</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-1 w-full bg-green-900/20 rounded-sm overflow-hidden border border-green-900/30">
                  <motion.div 
                    className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                  />
                </div>
              </div>
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
            <div className="absolute inset-0 bg-green-500/5 animate-pulse pointer-events-none z-10"></div>

          </div>
        </div>

        {/* Keyboard Base */}
        <div className="relative bg-[#252525] h-3 md:h-4 w-[120%] -ml-[10%] rounded-b-xl shadow-xl flex justify-center items-start pt-0.5 overflow-hidden">
          <div className="absolute top-0 w-20 h-1 bg-[#1a1a1a] rounded-b-sm"></div>
          
          {/* Key Press Animation (Visualizing typing without hands) */}
          <div className="absolute inset-0 flex flex-wrap justify-center gap-0.5 px-8 py-1 opacity-30">
             {[...Array(20)].map((_, i) => (
                <motion.div
                   key={i}
                   className="w-4 h-2 bg-white/10 rounded-[1px]"
                   animate={{ 
                     opacity: [0.3, 0.8, 0.3],
                     scale: [1, 0.9, 1] 
                   }}
                   transition={{ 
                     duration: 0.2, 
                     repeat: Infinity, 
                     repeatDelay: Math.random() * 2,
                     delay: Math.random() * 2
                   }}
                />
             ))}
          </div>
        </div>
        
        {/* Reflection/Shadow under laptop */}
        <div className="w-[120%] -ml-[10%] h-6 bg-black/40 rounded-[100%] blur-xl mt-1 mx-auto"></div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 text-white/20 font-mono text-xs tracking-[0.3em] uppercase"
      >
        LUKA PARTENADZE // PORTFOLIO
      </motion.div>

    </motion.div>
  )
}
