import React from 'react'
import { Bar3D, Column3D, Doughnut2d, ExampleChart, Pie3D } from "./Charts"

import { useGlobalContext } from "../context/context"

const Repos = () => {
  const { repos } = useGlobalContext()
  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count }
    } else {
      total[language] = { ...total[language], value: total[language].value + 1, stars: total[language].stars + stargazers_count }
    }
    return total
  }, {})

  const mostUsed = Object.values(languages).sort((a, b) => {
    return b.value - a.value
  }).slice(0, 5)

  // most stars per language
  const mostPopular = Object.values(languages).sort((a, b) => {
    return b.stars - a.stars
  }).map((item) => {
    return { ...item, value: item.stars }
  }).slice(0, 5)

  //stars, forks
  let { stars, forks } = repos.reduce((total, item) => {
    const { stargazers_count, name, forks } = item
    total.stars[stargazers_count] = { label: name, value: stargazers_count }
    total.forks[forks] = { label: name, value: forks }
    return total
  }, { stars: {}, forks: {} })

  stars = Object.values(stars).slice(0, 5).reverse();
  forks = Object.values(forks).slice(0, 5).reverse()

  return (
    <div className='grid gap-y-8 gap-x-4 grid-cols-1 lg:grid-cols-3 m-2 items-center'>
      <div>
        <Pie3D data={mostUsed} />
      </div>
      <div className='col-span-1 lg:col-span-2 '>
        <Column3D data={stars} />
      </div>
      <div>
        <Doughnut2d data={mostPopular} />
      </div>
      <div className="col-span-1 lg:col-span-2">
        <Bar3D data={forks} />
      </div>
    </div>
  )
}

export default Repos