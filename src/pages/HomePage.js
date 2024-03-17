import React, { useRef } from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'

function HomePage() {
  const home=useRef(null);
    const about=useRef(null);
    const projects=useRef(null);
    const contact=useRef(null);

    const scrollToSection=(elementRef)=>{
      window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: 'smooth'
      })
  }

  return (
    <div className='relative flex flex-col w-full'>
      <NavBar home={home} about={about} projects={projects} contact={contact} scrollToSection={scrollToSection}/>
      <HeroSection home={home} projects={projects} scrollToSection={scrollToSection}/>
      <AboutSection about={about}/>
      <ProjectSection projects={projects}/>
      <ContactSection contact={contact}/>
      <FooterSection/>
    </div>
  )
}

export default HomePage