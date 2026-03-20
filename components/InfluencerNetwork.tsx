'use client'

import { useState } from 'react'

const influencers = [
  { name: 'Rahul Sharma', followers: '1.2M', category: 'Finance' },
  { name: 'Anjali Verma', followers: '850K', category: 'Lifestyle' },
  { name: 'Amit Singh', followers: '2M', category: 'Tech' },
  { name: 'Neha Gupta', followers: '500K', category: 'Finance' },
]

export default function InfluencerNetwork() {
  const [filter, setFilter] = useState('All')

  const filteredData =
    filter === 'All'
      ? influencers
      : influencers.filter((inf) => inf.category === filter)

  return (
    <section className="py-20 bg-white text-center">

      <h2 className="text-3xl font-bold mb-8">
        Our Influencer Network
      </h2>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-10">
        {['All', 'Finance', 'Tech', 'Lifestyle'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full ${
              filter === cat
                ? 'bg-black text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {filteredData.map((inf, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl hover:scale-105 transition"
          >
            <div className="h-24 w-24 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="font-semibold">{inf.name}</h3>
            <p className="text-sm text-gray-500">
              {inf.followers} Followers
            </p>
            <p className="text-xs text-gray-400">
              {inf.category}
            </p>
          </div>
        ))}

      </div>

    </section>
  )
}