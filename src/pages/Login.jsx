import React from 'react'
import { Link } from 'react-router-dom'
import loginImg from "../images/login.jpg"
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <div className='bg-blue-100 h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center space-y-4 max-w-md rounded-md text-center'>
        <img src={loginImg} alt="github user" className='h-50 w-50 rounded-full' />
        <h1 className='text-5xl font-semibold'>Github User</h1>
        <button onClick={loginWithRedirect} className=' bg-blue-500 w-max uppercase tracking-widest rounded-md px-4 text-white py-2'>Login / Signup</button>
      </div>
    </div >
  )
}

export default Login