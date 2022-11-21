import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();
  const isUser = isAuthenticated && user
  return (
    <div className='bg-white shadow-xl w-full font-semibold flex justify-center items-center py-4'>
      {isUser && user.picture && (<div className='flex justify-center items-center gap-x-4'>
        <img src={user.picture} alt={user.name} className="w-12 h-12 rounded-full" />
        <p className='mr-1'>Welcome, </p>
      </div>)}
      {isUser && user.name && (
        <div className='font-bold mr-7'>{user.name.toUpperCase()}</div>
      )}
      <div>
        {isUser ?
          <button className='text-slate-600 text-lg tracking-wider' onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button> :
          <button className='text-slate-600 text-lg tracking-wider' onClick={() => loginWithRedirect()}>Login</button>
        }
      </div>
    </div>
  )
}

export default Navbar