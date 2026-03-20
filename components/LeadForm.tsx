'use client'

import { useState } from 'react'

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
    alert('Form submitted!')
  }

  return (
    <section className="py-20 bg-black text-white text-center">

      <h2 className="text-3xl font-bold mb-8">
        Work With Us
      </h2>

      <form 
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4 px-6"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 text-white"
        />

        <button 
          type="submit"
          className="bg-yellow-400 text-black py-3 rounded font-semibold hover:scale-105 transition"
        >
          Submit
        </button>

      </form>

    </section>
  )
}