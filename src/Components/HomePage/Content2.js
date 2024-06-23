import React from 'react'
import content2img from '../Images/content2img.png'
import testimonialimg from '../Images/terstimonialimg.png'

export const Content2 = () => {
    return (
        <div className='w-full bg-[#473BF0] h-[771px] flex '>
            <div className='flex justify-center items-center w-[965px] '>
                <div className='w-[421px] h-[433px] flex flex-col justify-around text-white'>

                    <div>
                        <div className='font-bold text-5xl'>
                            Comfortable buds
                            <br />
                            with better sound.
                        </div>

                        <div className=' text-base mt-6 text-gray-400'>
                            We share common trends and strategies for
                            <br />
                            improving your rental income.
                        </div>
                    </div>

                    <div className='flex gap-6'>
                        <div className='w-28'>
                            <img src={testimonialimg} alt='img'/>
                        </div>

                        <div>
                            <div className='text-2xl leading-8'>
                                 “You made it so simple. My new site is so much faster and easier to work with than my old site.”
                            </div>

                            <div className=' text-base font-bold mt-6 text-gray-400' >
                                Rhoda Brady
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <img src={content2img} alt='img' />
            </div>
        </div>
    )
}
