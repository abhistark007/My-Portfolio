import React from 'react'
import ProjectCard from './ProjectCard'
import ytbclone from '../assets/ytbclone.png'
import weather from '../assets/weather.png'
import rapp from '../assets/rapp.png'
import rrl from '../assets/rrl.png'
import cq from '../assets/cq.png'

function ProjectSection() {
  return (
    <div className='w-full bg-white flex font-["Source Sans 3"] pb-20'>
        <div className='flex flex-col  mx-auto items-center gap-5 w-[80%]'>
            <div className='text-[40px] leading-[60px] tracking-[3px] font-[700]'>PROJECTS</div>
            <div className='w-[50px] h-[10px] rounded-lg bg-[#7843E9] '></div>
            <div className='text-wrap text-center text-[20px] leading-[32px] font-[500] text-[#555555]'>Here you will find some of the personal and clients projects that I created with each project <br /> containing its own tech stack</div>

            <ProjectCard img={ytbclone} name={"Youtube Clone[Front End Only]"} des={"HTML, CSS, React, Tailwind"} link={"https://clone-6cfc1.web.app/"}/>

            <ProjectCard img={weather} name={"Weather App"} des={"HTML, CSS, React, Tailwind"} link={"https://weather-app-v2-7705d.web.app/"}/>

            <ProjectCard img={rapp} name={"Responsive App"} des={"HTML, CSS, React, Tailwind"} link={"https://atg-assignment-d9243.web.app/"}/>

            <ProjectCard img={rrl} name={"Radiant Riches Assignment App"} des={"HTML, CSS, React, Tailwind"} link={"https://radiant-riches-llc-assignment.web.app/"}/>

            <ProjectCard img={cq} name={"CrackCube Assignment"} des={"HTML, CSS, React, Tailwind"} link={"https://crackube-assignment.web.app/"}/>
        </div>
    </div>
  )
}

export default ProjectSection