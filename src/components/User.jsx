import React from 'react'
import Card from './Card'
import Follwer from "./Follower"

const User = () => {
  return (
    <div className='flex flex-col mb-6 gap-6 justify-center items-center md:flex-row'>
      <Card />
      <Follwer />
    </div>
  )
}

export default User