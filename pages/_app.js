// pages/_app.js
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BackToTop from '../components/BackToTop'
import Preloader from '../components/Preloader'

import { BeamsBackground } from '@/components/ui/beams-background'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <BeamsBackground intensity="strong">
        <div className="min-h-screen flex flex-col relative z-10 transition-colors duration-300">
          {/* Initial Preloader */}
          <AnimatePresence mode="wait">
            {showPreloader && (
              <Preloader onComplete={() => setShowPreloader(false)} />
            )}
          </AnimatePresence>

          {/* Page Transition Loading Bar */}
          {isLoading && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-[100] origin-left"
            />
          )}

          {/* Smooth Page Transitions - Only show content after preloader */}
          {!showPreloader && (
            <>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={router.pathname}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>

              {/* Back to Top Button */}
              <BackToTop />
            </>
          )}
        </div>
      </BeamsBackground>
    </ThemeProvider>
  )
}
