import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'

import { Navbar, Info, Repos, Search, User } from "../components"
import Loading from '../components/Loading'

const Dashboard = () => {
  const { isLoading } = useGlobalContext()
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar />
      <Search />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Info />
          <User />
          <Repos />
        </>
      )}
    </div>
  )
}

export default Dashboard