import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'

function HomePage() {
  return (
    <div className='relative flex flex-col w-full'>
      <NavBar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  )
}

export default HomePage