import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'

function HomePage() {
  return (
    <div className='relative flex flex-col w-full'>
      <NavBar/>
      <HeroSection/>
      <AboutSection/>
    </div>
  )
}

export default HomePage