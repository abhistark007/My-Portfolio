import React from 'react'
import SkillCard from './SkillCard'

function AboutSection(props) {
  return (
    <div ref={props.about} className='w-full bg-[#FAFAFA] flex font-["Source Sans 3"] pt-[80px]'>
        <div className='flex flex-col  mx-auto items-center gap-5 w-[80%]'>
            <div className='text-[40px] leading-[60px] tracking-[3px] font-[700]'>ABOUT ME</div>
            <div className='w-[50px] h-[10px] rounded-lg bg-[#7843E9] '></div>
            <div className='text-wrap text-center text-[20px] leading-[32px] font-[500] text-[#555555]'>Here you will find more information about me, what I do, and my current skills mostly in terms <br /> of programming and technology</div>

            <div className='flex gap-20 max-[600px]:flex-col-reverse'>
                {/* left */}
                <div className='flex flex-col text-wrap flex-[0.5]'>
                    <div className='text-[28px] leading-[42px] font-[700] '>Get to know me!</div>
                    <p className='text-[18px] leading-[30px] font-[400] text-[#666666]'>I'm a <span className='font-bold'>Frontend Focused Web Developer</span> building and managing the 
                    Front-end of Websites and Web Applications that leads to the success of 
                    the overall product. Check out some of my work in the <span className='font-bold'>Projects</span> section. <br /><br />
                    </p>

                    <p className='text-[18px] leading-[30px] font-[400] text-[#666666]'>I also like sharing content related to the stuff that I have learned over the 
                    years in <span className='font-bold'>Web Development</span> so it can help other people of the Dev 
                    Community. Feel free to Connect or Follow me on my <span className='text-purple-600 underline font-bold cursor-pointer'>Linkedin</span>. <br /><br />
                    </p>

                    <p className='text-[18px] leading-[30px] font-[400] text-[#666666]'>I'm open to <span className='font-bold'>Job</span> opportunities where I can contribute, learn and grow. If 
                    you have a good opportunity that matches my skills and experience then 
                    don't hesitate to <span className='font-bold'>contact</span> me. <br /><br />
                    </p>
                    <div className='font-bold px-8 py-3 shadow-lg hover:translate-y-[-7px] cursor-pointer rounded-lg bg-[#7843E9] duration-300 text-white w-fit text-[20px] leading-[30px] uppercase tracking-[1px]'>
                        Contact
                    </div>
                </div>



                {/* right */}
                <div className='flex flex-col flex-[0.5] gap-7'>
                    <div className='text-[28px] leading-[42px] font-[700] '>My Skills</div>
                    <div className='flex flex-wrap gap-5'>
                        <SkillCard name={"HTML"}/>
                        <SkillCard name={"CSS"}/>
                        <SkillCard name={"Javascript"}/>
                        <SkillCard name={"TailwindCSS"}/>
                        <SkillCard name={"React"}/>
                        <SkillCard name={"Git"}/>
                        <SkillCard name={"Github"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection