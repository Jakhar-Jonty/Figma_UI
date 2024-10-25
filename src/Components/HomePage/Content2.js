import React from 'react';
import content2img from '../Images/content2img.png';
import testimonialimg from '../Images/terstimonialimg.png';

export const Content2 = () => {
    return (
        <div className='w-full bg-[#473BF0] flex flex-col lg:flex-row sm:h-full lg:h-[771px] sm:justify-center sm:items-center'>
            {/* Left Section */}
            <div className='flex justify-center items-center w-full lg:w-1/2 p-6 lg:p-12'>
                <div className='w-full max-w-lg flex flex-col space-y-6 text-white'>
                    {/* Heading and Description */}
                    <div>
                        <h2 className='font-bold text-3xl lg:text-5xl'>
                            Comfortable buds
                            <br />
                            with better sound.
                        </h2>
                        <p className='text-sm lg:text-base mt-4 text-gray-400'>
                            We share common trends and strategies for
                            <br />
                            improving your rental income.
                        </p>
                    </div>
                    
                    {/* Testimonial Section */}
                    <div className='flex gap-4 lg:gap-6'>
                        <div className='w-20 lg:w-28'>
                            <img src={testimonialimg} alt='testimonial' />
                        </div>
                        <div>
                            <blockquote className='text-base lg:text-2xl leading-relaxed'>
                                “You made it so simple. My new site is so much faster and easier to work with than my old site.”
                            </blockquote>
                            <p className='text-sm lg:text-base font-bold mt-4 text-gray-400'>
                                Rhoda Brady
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Right Section */}
            <div className='w-full lg:w-1/2 flex justify-center items-center'>
                <img src={content2img} alt='content' className='w-full h-auto object-cover' />
            </div>
        </div>
    );
};
