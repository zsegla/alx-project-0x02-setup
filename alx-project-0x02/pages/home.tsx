import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-green-600">Home Page</h1>
      <p className="text-lg text-gray-700 mb-4">Welcome to the Home page!</p>
      <Link href="/about" className="text-blue-500 hover:underline">
        Go to About Page
      </Link>
    </div>
  )
}
