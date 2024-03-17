import React from 'react'

function ProjectCard(props) {
  return (
    <div className='flex justify-between items-center my-5 gap-36'>
        {/* left */}
        <img src={props.img} alt="" className='flex-[0.5] w-[40%]  rounded-lg border-2 border-purple-600 shadow-lg '/>

        {/* right */}
        <div className='flex flex-col justify-evenly h-full flex-[0.5]'>
            <div className='font-[700] text-[28px] leading-[42px] '>{props.name}</div>

            <div className='text-[#666666] leading-[30px] text-[18px]'>{props.des}</div>

            <div className='font-bold px-8 py-3 shadow-lg hover:translate-y-[-7px] cursor-pointer rounded-lg bg-[#7843E9] duration-300 text-white w-fit text-[15px] leading-[30px] uppercase tracking-[1px]'>
                        <a href={props.link} target='_blank' className='no-underline'>Live Deploy Link</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard