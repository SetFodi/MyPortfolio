import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import BackToTop from '../components/BackToTop'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ThemeProvider attribute="class" forcedTheme="dark" enableSystem={false}>
      <div className="site-shell">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}
