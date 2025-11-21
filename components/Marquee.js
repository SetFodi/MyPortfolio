import { motion } from 'framer-motion'

export default function Marquee({ items, direction = 'left', speed = 20 }) {
  return (
    <div className="relative flex overflow-hidden w-full py-10 bg-white/5">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: direction === 'left' ? '-50%' : '50%' }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        className="flex flex-shrink-0 gap-12 pr-12"
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xl font-light uppercase tracking-wider whitespace-nowrap">
            {item}
            <span className="text-purple-500/50">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

