import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "b92a70d1-9a39-4371-ac99-d9aff624d6eb")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <div className='text-black dark:text-white'
      id="contact"

    >
      <h4 className="text-center mb-2 text-lg font-Ovo ">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Any queries, send me a question
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-4 outline-none border-2 border-gray-400 rounded-lg bg-white dark:bg-darkHover/30 dark:border-white/90 shadow-md transition-all duration-300 focus:ring-2 focus:ring-indigo-600"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-4 outline-none border-2 border-gray-400 rounded-lg bg-white dark:bg-darkHover/30 dark:border-white/90 shadow-md transition-all duration-300 focus:ring-2 focus:ring-indigo-600"
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-2 border-gray-400 rounded-lg bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90 shadow-md transition-all duration-300 focus:ring-2 focus:ring-indigo-600"
          name="message"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full mx-auto hover:bg-indigo-500 duration-500 transform transition-all shadow-md"
        >
          Submit Now
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            className="w-4 transition-all duration-300"
          />
        </button>

        <p className="mt-4 text-center text-sm text-gray-500 dark:text-white">
          {result}
        </p>
      </form>
    </div>
  )
}

export default Contact
