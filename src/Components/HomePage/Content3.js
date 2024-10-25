import React from 'react';
import bgwaveimg from '../Images/backgound_wave.png';
import leftairpod from '../Images/Leftairpod.png';
import rightairpod from '../Images/Rightairpod.png';

export const Content3 = () => {
  return (
    <div className='w-full h-auto bg-[#161C2D] flex flex-col justify-center items-center py-20'>
      {/* Text Section */}
      <div className='text-white text-center mb-16 px-4'>
        <h2 className='text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight'>
          Trendy designs with
          <br />
          better sound quality.
        </h2>
        <p className='text-base sm:text-lg mt-6 text-gray-400'>
          We share common trends and strategies for
          <br />
          improving your rental income.
        </p>
      </div>

      {/* Images Section */}
      <div className='relative w-full h-[500px] sm:h-[670px]'>
        <img src={bgwaveimg} alt='background wave' className='w-full h-full object-cover' />
        <img
          src={leftairpod}
          alt='left airpod'
          className='absolute left-[5%] sm:left-[30%] lg:left-[37%] top-10 sm:top-20'
        />
        <img
          src={rightairpod}
          alt='right airpod'
          className='absolute left-[10%] sm:left-[50%]  lg:left-[53%] top-40 sm:top-52'
        />
      </div>
    </div>
  );
};
