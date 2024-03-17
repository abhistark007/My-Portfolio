import React from 'react'

import ProfilePic from '../assets/1662218474293.jpg'

function NavBar(props) {

    

   


  return (
    <div className='fixed left-0 right-0 top-0 z-20 bg-white w-full px-7 py-4 shadow-lg'>
        <div className='flex font-["Source Sans 3"] justify-between items-center'>
            {/* Left */}
            <div className='flex items-center gap-4'>
                <img src={ProfilePic} alt="Profile Pic of Abhi Kumar" className='w-[47.2px] h-[47.2px] rounded-full'/>
                <div className='text-[18px] font-[700] leading-[27px] tracking-[1px]  cursor-pointer select-none
                hover:text-[#7843E9] duration-200 hover:drop-shadow-md'>ABHI KUMAR</div>
            </div>


            {/* Right */}
            <div className='flex font-[700]  text-[18px] leading-[27px] tracking-[1px] gap-10 select-none max-[700px]:hidden'>
                <div onClick={()=>props.scrollToSection(props.home)} className='hover:text-[#7843E9] duration-200 cursor-pointer'>HOME</div>
                <div onClick={()=>props.scrollToSection(props.about)} className='hover:text-[#7843E9] duration-200 cursor-pointer'>ABOUT</div>
                <div onClick={()=>props.scrollToSection(props.projects)}  className='hover:text-[#7843E9] duration-200 cursor-pointer'>PROJECT</div>
                <div onClick={()=>props.scrollToSection(props.contact)} className='hover:text-[#7843E9] duration-200 cursor-pointer'>CONTACT</div>
            </div>

            {/* Right on small screen */}
            <div  className='flex items-center justify-center text-3xl min-[700px]:hidden cursor-pointer'>
                <i class='bx bx-menu'></i>
            </div>

        </div>
    </div>
  )
}

export default NavBar