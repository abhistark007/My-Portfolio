import React from 'react'
import bg from '../assets/commonbg.svg'
import LinkedIn from '../assets/Linkedin.svg'
import Github from '../assets/Github.svg'

function HeroSection(props) {
    return (
        <div ref={props.home} className='relative w-full min-h-[85vh] bg-no-repeat bg-center flex justify-center pt-[10%] font-["Source Sans 3"]' style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className='flex flex-col absolute left-0 top-[40%] bg-white z-10 shadow-lg p-1'>
                <div className='flex justify-center items-center cursor-pointer hover:bg-[#7843E9] duration-200 w-full h-full p-2'>
                    <a href="https://www.linkedin.com/in/abhi-kumar-bb84851b1/"><img  src={LinkedIn} alt="Linked In" className='w-[47.2px] h-[27.2px]' /></a>
                </div>
                <div className='flex justify-center items-center cursor-pointer hover:bg-[#7843E9] duration-200 p-2'>
                    <a href="https://github.com/abhistark007" ><img src={Github} alt="Github" className='w-[47.2px] h-[27.2px]' /></a>
                </div>
            </div>

            <div className='flex flex-col text-center items-center gap-[30px] select-none'>
                <div className='font-bold text-[60px] tracking-[3px]'>HEY, I'M ABHI KUMAR</div>
                <div className='text-[22px] leading-[35.2px] text-center text-wrap'>
                     A Result-Oriented Front-End Web Developer who likes building pixel perfect design and <br /> 
                     Web Applications that leads to the success of the overall product
                </div>
                <div onClick={()=>props.scrollToSection(props.projects)}
                 className='px-8 py-3 shadow-lg hover:translate-y-[-7px] cursor-pointer rounded-lg bg-[#7843E9] duration-300 text-white w-fit text-[20px] leading-[30px] uppercase tracking-[1px] font-bold'>Projects</div>
            </div>


        </div>
    )
}

export default HeroSection