import React from 'react'
import { useGlobalContext } from '../context/context'

const Follower = () => {
  const { followers } = useGlobalContext();
  return (
    <div className='flex flex-col w-[390px] bg-white max-h-[300px] rounded-md'>
      <div className='bg-blue-500 text-white py-2 text-xl text-center rounded-t-md  tracking-widest'>Followers</div>
      {/* List the followers */}
      <div className='overflow-hidden hover:overflow-y-auto '>
        {followers.map((follower) => {
          return (
            <div key={follower.id} className="grid grid-cols-2  py-1 pl-1 px-2 ">
              <div className='w-max ml-4'>
                <img src={follower.avatar_url} alt={follower.login} className="h-12 rounded-full w-12" />
              </div>
              <div className='flex  flex-col -ml-24 max-w-max '>
                <h1 className='font-bold capitalize tracking-wider'>{follower.login}</h1>
                <a className='text-slate-500' href={follower.html_url}>{follower.html_url}</a>
              </div>
            </div>
          )

        })}
      </div>
    </div>
  )
}

export default Follower