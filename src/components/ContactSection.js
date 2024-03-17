import React from 'react'
import bg from '../assets/commonbg.svg'

function ContactSection(props) {
    return (
        <div ref={props.contact} className='w-full bg-white flex font-["Source Sans 3"] pb-20  min-h-[85vh] bg-no-repeat bg-center pt-[10%]' style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className='flex flex-col  mx-auto items-center gap-5 w-[80%]'>
                <div className='text-[40px] leading-[60px] tracking-[3px] font-[700]'>CONTACT</div>
                <div className='w-[50px] h-[10px] rounded-lg bg-[#7843E9] '></div>
                <div className='text-wrap text-center text-[20px] leading-[32px] font-[500] text-[#555555]'>Feel free to Contact me by submitting the form below and I will get back to you as soon as <br /> possible</div>

                <div className='w-[70%] max-[900px]:w-[90%] rounded-lg shadow-xl p-4 flex flex-col bg-white'>
                    <form action="" className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name" className='text-[#666666] font-[700] text-[14px] leading-[21px]'>Name</label>
                            <input type="text" name="name" id="name" placeholder='Your Name' className='h-[50px] p-2 rounded-md bg-[#F0F0F0] outline-purple-700' />
                        </div>
                        <div className='flex flex-col gap-2' >
                            <label htmlFor="email" className='text-[#666666] font-[700] text-[14px] leading-[21px]'>Email</label>
                            <input type="email" name="email" id="email" placeholder='Your Email' className='h-[50px] p-2 rounded-md bg-[#F0F0F0] outline-purple-700' />
                        </div>
                        <div className='flex flex-col gap-2' >
                            <label htmlFor="msg" className='text-[#666666] font-[700] text-[14px] leading-[21px]'>Message</label>
                            <textarea name="msg" id="msg" cols="30" rows="10" placeholder='Your Message' className=' p-2 rounded-md bg-[#F0F0F0] outline-purple-700'></textarea>

                        </div>

                        <div className='self-end font-bold px-8 py-3 shadow-lg hover:translate-y-[-7px] cursor-pointer rounded-lg bg-[#7843E9] duration-300 text-white w-fit text-[20px] leading-[30px] uppercase tracking-[1px]'>
                            Submit
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection