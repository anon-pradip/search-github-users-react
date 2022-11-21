import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useGlobalContext } from '../context/context';


const Search = () => {
  const [user, setUser] = useState('');
  const { requests, error, searchGithubhUser, isLoading } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    searchGithubhUser(user);
  }
  console.log(requests)
  return (
    <>
      <div className='my-4 text-red-700 text-xl font-bold font-mono'>
        {error.show ? error.msg : null}
      </div>
      <div className='flex flex-col mb-5 md:flex-row md:gap-x-6 items-center justify-center'>
        <form className='flex bg-white p-2 rounded-md flex-col' onSubmit={handleSubmit}>
          <div className='flex justify-center items-center gap-x-2'>
            <BsSearch className='fill-slate-500' />
            <input type="text" placeholder='Enter Github User' className='focus:outline-none  w-96 border-none rounded-md p-1' value={user} onChange={(e) => setUser(e.target.value)} />
            {(requests > 0 && !isLoading) ? (<button type='submit' className='bg-green-900 rounded-sm px-2 tracking-wider text-white font-mono'>Search</button>) : null}
          </div>
        </form>
        <h3 className='text-slate-600 mt-4 md:mt-0 font-semibold'>Requests : {requests} /60</h3>
      </div>
    </>
  )
}

export default Search