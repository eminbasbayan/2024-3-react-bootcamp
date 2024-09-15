import React from 'react'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-6xl font-bold text-red-600">{  'Error'}</h1>
      <p className="text-xl text-gray-800 mt-4">{'Something went wrong.'}</p>
      <a
        href="/"
        className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Homepage
      </a>
    </div>
  </div>
  )
}

export default ErrorPage