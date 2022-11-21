import React from 'react'
import { useGlobalContext } from '../context/context'
import { RiGitRepositoryLine, RiUserFollowLine } from "react-icons/ri"
import { GiShadowFollower } from "react-icons/gi"
import { VscFileCode } from "react-icons/vsc"

const Info = () => {
  const { githubUser } = useGlobalContext();
  const { followers, following, public_repos, public_gists } = githubUser;

  const items = [
    { id: 1, icon: <RiGitRepositoryLine />, label: "repos", value: public_repos, color: "bg-red-200" },
    { id: 2, icon: <GiShadowFollower />, label: "follower", value: followers, color: "bg-blue-200" },
    { id: 3, icon: <RiUserFollowLine />, label: "following", value: following, color: "bg-yellow-200" },
    { id: 4, icon: <VscFileCode />, label: "gists", value: public_gists, color: "bg-green-200" }
  ];

  const Item = ({ icon, label, value, color }) => {
    return (
      <div className="grid items-center py-2 pl-11 pr-9 grid-cols-2 bg-white rounded-md w-[200px]">
        <div className={`${color} p-2 w-max rounded-full`}>
          {icon}
        </div >
        <div>
          <div className='flex flex-col flex-wrap justify-center items-center'>
            <h1 className='font-bold text-xl'>{value}</h1>
            <h4 className='capitalize font-semibold text-slate-500'>{label}</h4>
          </div>
        </div>
      </div >
    )
  };

  return (
    <section className='flex flex-row flex-wrap gap-3 justify-center items-start mb-8 '>
      {items.map(item => <Item key={item.id} {...item} />)}
    </section>
  )
}

export default Info