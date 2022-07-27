import React from 'react'
import Banner from './Banner'
import Clients from './Clients'
import Features from './Features'
import Logos from './Logos'
import Team from './Team'
import Works from './Works'

function Home() {
  return (
    <div>
        <Banner />
        <Clients />
        <Features />
        <Logos />
        <Team />
        <Works/>
    </div>
  )
}

export default Home