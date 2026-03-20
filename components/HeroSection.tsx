'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white py-32 px-6 overflow-hidden">

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Scale Your Brand <br />
            With Influencers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400"
          >
            We connect brands with creators to build powerful campaigns.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:scale-105 transition"
          >
            Get Started
          </motion.button>

        </div>

        {/* RIGHT SIDE (Floating Cards) */}
        <div className="relative h-[300px]">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-0 left-10 bg-white text-black p-4 rounded-lg shadow"
          >
            <p className="font-bold">10M+</p>
            <p className="text-sm">Reach</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-20 right-0 bg-white text-black p-4 rounded-lg shadow"
          >
            <p className="font-bold">500+</p>
            <p className="text-sm">Creators</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-0 left-20 bg-white text-black p-4 rounded-lg shadow"
          >
            <p className="font-bold">120+</p>
            <p className="text-sm">Brands</p>
          </motion.div>

        </div>

      </div>

    </section>
  )
}