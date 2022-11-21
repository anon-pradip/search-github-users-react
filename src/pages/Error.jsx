import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col bg-slate-300 h-screen justify-center items-center'>
      <h1 className="text-8xl font-bold">404</h1>
      <p className='font-semibold tracking-wider capitalize mt-4 mb-4'>Sorry, the page you tried cannot be found!</p>
      <Link to="/" className='bg-green-700 text-white rounded-md px-2 py-2'>Back Home</Link>
    </div>
  )
}

export default Error