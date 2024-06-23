import React from 'react'
import bitmap from '../Images/Bitmap.png'
import leftearbud from '../Images/left_earbud.png'
import rightearbud from '../Images/right_earbud.png'
import soundwave from '../Images/soundwave.png'
import path from '../Images/Path (2).png'
import ovalorange from '../Images/Oval_orange.png'
import ovalpurple from '../Images/Oval_Purple.png'

export const Content1 = () => {
    return (
        <div className='flex w-full h-[771px] bg-[#F4F7FA]'>
            <div className='h-[771px] w-[800px]'>
                <img src={bitmap} alt='img' className='h-full w-full object-cover' />
            </div>


            <div className=' w-full flex justify-center items-center bg-white '>

                <div className='w-[622px] h-[444px] flex flex-col justify-around'>



                    <div className='flex flex-col gap-8'>

                        <div className=' font-bold text-5xl'>
                            Listen music
                            <br />
                            anytime,anywhere.
                        </div>

                        <div className='text-lg text-gray-400'>
                            We share comman trends and strategies for
                            <br />
                            improving your rental income.
                        </div>

                    </div>

                    <div className='flex justify-between'>


                        <div className='flex gap-6'>
                            <div className='flex h-10 w-11 relative gap-1'>
                                <img src={leftearbud} alt='img' />
                                <img src={rightearbud} alt='img' />
                                <img src={path} alt='img' className='h-2 absolute left-[26px] top-[5px]'/>
                                <img src={path} alt='img' className='h-2 absolute left-[10px] top-[5px]'/>
                                <img src={ovalpurple} alt='img' className='absolute left-3 top-3'/>
                            </div>
                            <div>
                                <div className='text-xl font-bold'> Comfortable Buds</div>
                                <div className='text-base leading-6 mt-4 text-gray-400'>
                                    With lot of unique blocks,
                                    <br />
                                    you can easily build a Pages
                                    <br />
                                    without coding.
                                </div>
                            </div>
                        </div>


                        <div className='flex gap-6'>
                            <div className=' relative'>
                                <img src={soundwave} alt='img'/>
                                <img src={ovalorange} alt='img' className=' absolute top-3 left-3'/>
                                
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Powerful Bass</div>
                                <div className='text-base leading-6 mt-4 text-gray-400'>
                                    With lot of unique blocks,
                                    <br />
                                    you can easily build a Pages
                                    <br />
                                    without coding.
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
