import React from 'react'

function SkillCard(props) {
  return (
    <div className='bg-[#E7E7E7] px-4 py-2 rounded-lg text-[#666666] text-[16px] leading-[24px] font-[600] flex justify-center items-center'>
        {props.name}
    </div>
  )
}

export default SkillCard