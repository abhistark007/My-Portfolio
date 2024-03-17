import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'

function HomePage() {
  return (
    <div className='relative flex flex-col w-full'>
      <NavBar/>
      <HeroSection/>
    </div>
  )
}

export default HomePage