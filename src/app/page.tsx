'use client'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
export default function Home() {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <header>
          <nav className="mx-auto flex max-w-7xl items-center justify-center px-32 py-3 text-xl">
            <span className="flex-1">SyncSpot</span>
            <div className="flex items-center justify-center gap-4">
              <a href="/#faq" className="no-underline hover:underline">
                FAQ
              </a>
              <a href="/#doc" className="no-underline hover:underline">
                Documentation
              </a>
            </div>
            <div className="flex flex-1 justify-end">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button size={'default'} className="text-white">
                  Login
                </Button>
              </motion.button>
            </div>
          </nav>
        </header>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <section className="relative mx-auto flex max-w-5xl flex-col items-center p-8 pt-32">
            <h2 className="flex flex-col text-center text-5xl font-medium text-slate-600 ">
              The easiest way,{' '}
              <span className="bg-gradient-to-r from-yellow-300 from-20% via-yellow-400 to-yellow-600 to-70% bg-clip-text pb-6 text-transparent">
                to manage your meetings time
              </span>
            </h2>
            <span className="text-xl font-light">
              Setup bulletpoints to focus on during your meetings
            </span>
          </section>
        </motion.div>
        <footer>
          <div className="flex flex-col items-center justify-center py-4 text-sm">
            <h4 className="text-slate-300">
              Made with ❤️ by{' '}
              <a
                href="https://github.com/The-Sailors"
                className="no-underline hover:underline"
              >
                The Sailors
              </a>{' '}
            </h4>
            <a
              href="https://twitter.com/jj_neno"
              className="text-slate-500 no-underline hover:underline"
            >
              J²
            </a>
            <a
              href="https://twitter.com/LLobosque"
              className="text-slate-500 no-underline hover:underline"
            >
              Lobosque
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
