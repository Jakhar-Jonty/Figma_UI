import React from 'react'
import greencase from '../Images/greencase.png'
import whitecase from '../Images/whitecase.png'
import silvercase from '../Images/silvercase.png';

export const Pricing = () => {
  return (
    <div className='w-full h-[800px] flex justify-center items-center bg-white'>
        <div className='w-[1000px] h-[600px] flex flex-col gap-12' >

            <div className='flex flex-col text-center'>
                <div className='font-bold text-5xl'>
                    Get your airpod now.
                </div>

                <div className='text-lg mt-6 text-gray-400'>
                We share common trends and strategies for
                <br/>
                improving your rental income.
                </div>
            </div>

            <div className='flex justify-between'>
                <div className='flex flex-col items-center justify-center text-center gap-6'>
                    <div>
                        <img src={greencase} alt='img'/>
                    </div>
                    <div className='text-xl font-bold'>
                        Midnight Green
                    </div>

                    <div className='text-base text-gray-500'>
                         AirPods (2nd gen) iPhone Colors with
                        <br/>
                        Wireless Charging Case
                    </div>

                    <div>
                        <button className='bg-[#473BF0] w-36 h-12 rounded-lg text-white font-bold'>
                            Buy now-$99
                        </button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center text-center gap-6'>
                    <div>
                        <img src={whitecase} alt='img'/>
                    </div>
                    <div className='text-xl font-bold'>
                        Midnight Green
                    </div>

                    <div className='text-base text-gray-500'>
                         AirPods (2nd gen) iPhone Colors with
                        <br/>
                        Wireless Charging Case
                    </div>

                    <div>
                        <button className='bg-[#473BF0] w-36 h-12 rounded-lg text-white font-bold'>
                            Buy now-$99
                        </button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center text-center gap-6'>
                    <div>
                        <img src={silvercase} alt='img'/>
                    </div>
                    <div className='text-xl font-bold'>
                        Midnight Green
                    </div>

                    <div className='text-base text-gray-500'>
                         AirPods (2nd gen) iPhone Colors with
                        <br/>
                        Wireless Charging Case
                    </div>

                    <div>
                        <button className='bg-[#473BF0] w-36 h-12 rounded-lg text-white font-bold'>
                            Buy now-$99
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
