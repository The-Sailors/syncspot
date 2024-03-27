'use client'
import { motion } from 'framer-motion'

import Buymeacoffee from '@/components/coffee'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
export default function Home() {
  return (
    <div>
      <header>
        <nav className="mx-auto flex max-w-7xl items-center justify-center px-32 py-3 text-xl">
          <span className="flex-1 text-2xl text-white">SyncSpot</span>
          <Buymeacoffee />
          <div className="flex flex-1 justify-end">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button size={'lg'} className="text-lg text-white">
                Login
              </Button>
            </motion.button>
          </div>
        </nav>
      </header>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ ease: 'easeOut', duration: 1 }}
      >
        <section className="relative mx-auto flex max-w-7xl flex-col items-center p-8 pb-64 pt-64">
          <h2 className="flex flex-col text-center text-7xl font-medium text-white ">
            The easiest way,{' '}
            <span className="bg-gradient-to-r from-yellow-300 from-20% via-yellow-400 to-yellow-600 to-70% bg-clip-text pb-6 text-transparent">
              to manage your time in meetings
            </span>
          </h2>
          <span className="text-3xl font-light text-white">
            Setup bulletpoints to focus on during your calls
          </span>
        </section>
      </motion.div>
      <section id="faq">
        <div className="mx-auto flex max-w-7xl flex-row gap-12 px-8 py-32">
          <div className="flex basis-1/2 flex-col text-left">
            <p className="mb-4 inline-block text-2xl font-semibold text-primary">
              FAQ
            </p>
            <p className="text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </p>
          </div>
          <ul className="basis-1/2">
            <Accordion type="single" collapsible className="text-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-start font-bold text-primary">
                  What is the SyncSpot?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-white">
                    It&apos;s a simple tool to help you manage your meetings
                    time with predefined objectives.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-start font-bold text-primary">
                  How do I get started?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-white">
                    Simply sign up and create a new meeting adding bulletpoints
                    to focus on during your meeting and how many time each one
                    should take.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-start font-bold text-primary">
                  For which public SyncSpot was designed?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-white">
                    Bored of meetings that take too long? SyncSpot is designed
                    for you.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-start font-bold text-primary">
                  How many it costs?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg text-white">SyncSpot is free to use.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ul>
        </div>
      </section>
      <footer>
        <div className="flex flex-col items-center justify-center pb-4 pt-8 text-sm">
          <h4 className="text-lg text-white">
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
            className="text-white no-underline hover:underline"
          >
            J²
          </a>
          <a
            href="https://twitter.com/LLobosque"
            className="text-white no-underline hover:underline"
          >
            Lobosque
          </a>
        </div>
      </footer>
    </div>
  )
}
