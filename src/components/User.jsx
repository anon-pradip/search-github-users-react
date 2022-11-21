import React from 'react'
import Card from './Card'
import Follwer from "./Follower"

const User = () => {
  return (
    <div className='flex mb-6 gap-8 justify-center items-center'>
      <Card />
      <Follwer />
    </div>
  )
}

export default User