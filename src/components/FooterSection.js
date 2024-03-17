import React from 'react'


function FooterSection() {
    return (
        <div className='bg-black w-full flex font-["Source Sans 3"] pb-4'>
            <div className='flex flex-col w-[80%] max-[900px]:w-[90%] mx-auto'>
                <div className='flex justify-between items-center p-5 max-[900px]:flex-col max-[900px]:gap-5'>
                    {/* left */}
                    <div className='flex flex-col text-white flex-[0.5]'>
                        <div className='font-[700] text-[22px] leading-[33px] tracking-[1px]'>ABHI KUMAR</div>
                        <div className='font-[400] text-[15px] leading-[25px]'> A Result-Oriented Front-End Web Developer who likes building pixel perfect design and <br />
                            Web Applications that leads to the success of the overall product</div>
                    </div>


                    {/* right */}
                    <div className='flex-[0.5] flex flex-col text-white items-end'>
                        <div className='font-[700] text-[22px] leading-[33px] tracking-[1px]'>SOCIAL</div>
                        <div className='flex gap-5 text-blue-700 text-4xl'>
                            <div className='flex justify-center items-center cursor-pointer hover:bg-white duration-200 w-full h-full p-2'>
                                <i class='bx bxl-linkedin-square'></i>
                            </div>
                            <div className='text-purple-700 text-4xl flex justify-center items-center cursor-pointer hover:bg-white duration-200 p-2'>
                            <i class='bx bxl-github' ></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center p-6'>
                        <hr className='w-full'/>
                </div>

                <div className='flex justify-center items-center text-white '>
                    © Copyright 2024 . Made by Abhi Kumar
                </div>
            </div>
        </div>
    )
}

export default FooterSection