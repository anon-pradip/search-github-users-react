import React, { useContext, useState, useEffect } from "react";
import mockUser from "./mockdata/mockUser";
import mockFollower from "./mockdata/mockFollower";
import mockRepos from "./mockdata/mockRepos";
import axios, { Axios } from "axios";

const rootUrl = "https://api.github.com";
const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollower)
  const [requests, setRequests] = useState(0);
  const [error, setError] = useState({ show: false, msg: "" })
  const [isLoading, setIsLoading] = useState(false)

  //check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let { rate: { remaining } } = data
        setRequests(remaining)
        if (remaining === 0) {
          setError({ show: true, msg: "Sorry, you have exceeded hourly search limit!" })
        }
      })
      .catch((err) => console.log(err))
  }

  const searchGithubhUser = async (user) => {
    setError({ show: false, msg: "" })
    setIsLoading(true)
    const response = await axios(`${rootUrl}/users/${user}`).catch((error) => console.log(error))
    if (response) {
      setGithubUser(response.data)
      const { login, followers_url } = response.data
      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ]).then((results) => {
        const [repos, followers] = results
        const status = "fulfilled"
        if (repos.status === status) {
          setRepos(repos.value.data)
        }
        if (followers.status === status) {
          setFollowers(followers.value.data)
        }
      })
    } else {
      setError({ show: true, msg: "There is no user with that username!" })
    }
    checkRequests();
    setIsLoading(false)
  }

  //errror
  useEffect(checkRequests, [])
  return <GithubContext.Provider value={{
    githubUser, repos, followers, requests, error, searchGithubhUser, isLoading
  }}>
    {children}
  </GithubContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(GithubContext);
}

export { GithubContext, GithubProvider }