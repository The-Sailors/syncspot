'use client'
import { motion } from 'framer-motion'

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
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <header>
          <nav className="mx-auto flex max-w-7xl items-center justify-center px-32 py-3 text-xl">
            <span className="flex-1">SyncSpot</span>
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
          animate={{ opacity: 1, scale: 1.0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <section className="relative mx-auto flex max-w-6xl flex-col items-center p-8 pb-64 pt-64">
            <h2 className="flex flex-col text-center text-6xl font-medium text-slate-600 ">
              The easiest way,{' '}
              <span className="bg-gradient-to-r from-yellow-300 from-20% via-yellow-400 to-yellow-600 to-70% bg-clip-text pb-6 text-transparent">
                to manage your meetings time
              </span>
            </h2>
            <span className="text-2xl font-light">
              Setup bulletpoints to focus on during your meetings
            </span>
          </section>
        </motion.div>
        <section id="faq">
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-8 py-24 md:flex-row">
            <div className="flex basis-1/2 flex-col text-left">
              <p className="text-primary mb-4 inline-block font-semibold">
                FAQ
              </p>
              <p className="text-3xl font-extrabold text-slate-600">
                Frequently Asked Questions
              </p>
            </div>
            <ul className="basis-1/2">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-primary text-start font-bold">
                    What is the SyncSpot?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      It's a simple tool to help you manage your meetings time
                      with predefined objectives.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-primary text-start font-bold">
                    How do I get started?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Simply sign up and create a new meeting adding
                      bulletpoints to focus on during your meeting and how many
                      time each one should take.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-primary text-start font-bold">
                    For which public SyncSpot was designed?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Bored of meetings that take too long? SyncSpot is designed
                      for you.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-primary text-start font-bold">
                    How many it costs?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>SyncSpot is free to use.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ul>
          </div>
        </section>
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
