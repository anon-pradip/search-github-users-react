import React from 'react'
import { useGlobalContext } from '../context/context'
import { BsBuilding } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { BsEyeglasses } from "react-icons/bs"

const Card = () => {
  const { githubUser } = useGlobalContext();
  const { login, avatar_url, name, html_url, twitter_username, company, blog, bio, location } = githubUser;

  return (
    <div className='bg-white  flex flex-col min-h-[300px] max-h-[300px] rounded-md w-[400px]'>
      <div className='bg-blue-500 text-white py-2 text-xl text-center rounded-t-md  tracking-widest'>User</div>
      <div className='flex flex-col px-4 '>
        {/* image conatiner */}
        <div className="flex flex-row items-center justify-between mb-2">
          <div className='flex flex-row gap-2 mt-2 justify-center items-center '>
            {/* Image */}
            <div className=''>
              <img className='w-12 h-12 rounded-full' src={avatar_url} alt={login} />
            </div>
            <div className='flex flex-col'>
              <h1 className='font-bold font-mono'>{name}</h1>
              <p className='text-slate-500'>@{twitter_username}</p>
            </div>
          </div>
          {/* follow */}
          <button className='bg-transparent border rounded-xl text-slate-600 px-2 border-green-400'>Follow</button>
        </div>
        {/* BIO */}
        <div className='text-justify text-slate-500 mt-2'>
          {bio ? <p>{bio}</p> : <p>Not available</p>}
        </div>
        {/* Location type infos */}
        {/* Company */}
        <div className='flex gap-2 mt-3 mb-3 items-center'>
          <BsBuilding />
          {company ? <p className='text-slate-600 font-medium'>{company}</p> : <p className='text-slate-600 font-medium'>Not available</p>}
        </div>
        {/* Address */}
        <div className='flex gap-2 mb-3 items-center'>
          <GoLocation />
          <p className='text-slate-600 font-medium'>{location || "earth"}</p>
        </div>
        {/* Website */}
        <div className='flex gap-2 items-center'>
          <BsEyeglasses />
          <a className='text-purple-500 font-medium mb-1 underline underline-offset-2' href={`https://${blog}`}>{blog}</a>
        </div>
      </div>

    </div>
  )
}

export default Card