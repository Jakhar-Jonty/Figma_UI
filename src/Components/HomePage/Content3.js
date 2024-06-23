import React from 'react'
import bgwaveimg from '../Images/backgound_wave.png'
import leftairpod from '../Images/Leftairpod.png'
import rightairpod from '../Images/Rightairpod.png'

export const Content3 = () => {
  return (
    <div className='w-[full] h-[1000px] bg-[#161C2D] flex  flex-col justify-center items-center '>
        <div className='text-white text-center mt-48'>

            <div className='text-6xl font-bold leading-tight'>
            Trendy designs with
            <br/>
            better sound quality.
            </div>
            
            <div className='text-lg mt-6 text-gray-400'>
            We share common trends and strategies for 
            <br/>
            improving your rental income.
            </div>

        </div>

        <div className='flex relative w-full h-[670px]'>
        <img src={bgwaveimg} alt='img'/>
            <img src={leftairpod} alt='img' className=' absolute left-[590px] top-20'/>
            <img src={rightairpod} alt='img' className=' absolute left-[760px] top-52' />
        </div>
    </div>
  )
}
