import React from 'react';
import bitmap from '../Images/Bitmap.png';
import leftearbud from '../Images/left_earbud.png';
import rightearbud from '../Images/right_earbud.png';
import soundwave from '../Images/soundwave.png';
import path from '../Images/Path (2).png';
import ovalorange from '../Images/Oval_orange.png';
import ovalpurple from '../Images/Oval_Purple.png';

export const Content1 = () => {
    return (
        <div className='flex flex-col lg:flex-row bg-[#F4F7FA] sm:items-center lg:items-start'>
            {/* Left Section */}
            <div className='w-full lg:w-1/2'>
                <img src={bitmap} alt='img' className='w-full h-auto lg:h-full object-cover' />
            </div>

            {/* Right Section */}
            <div className='w-full lg:w-1/2 flex justify-center items-center bg-white p-4 lg:p-8'>
                <div className='flex flex-col h-auto lg:h-[564px] justify-around items-center space-y-8 lg:space-y-0'>
                    {/* Main Heading and Description */}
                    <div className='flex flex-col gap-4 text-center lg:text-left'>
                        <div className='font-bold text-3xl lg:text-5xl'>
                            Listen music
                            <br />
                            anytime, anywhere.
                        </div>
                        <div className='text-base lg:text-lg text-gray-400'>
                            We share common trends and strategies for
                            <br />
                            improving your rental income.
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className='flex flex-col lg:flex-row gap-8'>
                        {/* Feature 1 */}
                        <div className='flex gap-4 lg:gap-6 items-start'>
                            <div className='relative h-10 w-10'>
                                <img src={leftearbud} alt='left earbud' />
                                <img src={rightearbud} alt='right earbud' />
                                <img src={path} alt='path' className='absolute left-1 top-1 h-2'/>
                                <img src={path} alt='path' className='absolute left-4 top-1 h-2'/>
                                <img src={ovalpurple} alt='oval purple' className='absolute top-2 left-2'/>
                            </div>
                            <div>
                                <div className='text-lg lg:text-xl font-bold'>Comfortable Buds</div>
                                <div className='text-sm lg:text-base text-gray-400 mt-2'>
                                    With a lot of unique blocks,
                                    <br />
                                    you can easily build pages
                                    <br />
                                    without coding.
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className='flex gap-4 lg:gap-6 items-start'>
                            <div className='relative'>
                                <img src={soundwave} alt='soundwave'/>
                                <img src={ovalorange} alt='oval orange' className='absolute top-3 left-3'/>
                            </div>
                            <div>
                                <div className='text-lg lg:text-xl font-bold'>Powerful Bass</div>
                                <div className='text-sm lg:text-base text-gray-400 mt-2'>
                                    With a lot of unique blocks,
                                    <br />
                                    you can easily build pages
                                    <br />
                                    without coding.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
