import React from 'react'
import { Link } from 'react-router-dom'

export const PlansCards = () => {
    return (
        <div className='w-full p-12 flex justify-center items-center bg-[#F4F7FA] gap-10'>
            <div className='flex flex-col justify-center items-center p-10 text-center bg-white rounded-xl'>
                <div className='text-sm text-[#F64B4B] p-6'>
                    STARTER
                </div>
                <div  className='text-2xl'>
                    <div className='font-bold p-6 text-3xl '>
                        $<span className='text-7xl font-bold'>19</span>/mo
                    </div>

                    <div className='p-6 border-t-2'>
                        Upto 100 Team Members
                    </div>
                    <div  className='p-6 border-t-2'>
                        100GB Cloud Storage
                    </div>
                    <div  className='p-6 border-t-2'>
                        Unlimited Meetings
                    </div>
                    <div  className='p-6 border-t-2'>
                        Premium Support
                    </div>
                </div>
                <div className='p-4 mt-6 w-80 bg-[#161C2D] text-white font-lg font-bold text-center rounded-lg'>
                    <Link to='/log-in'>Get Started Now</Link>
                </div>
            </div>

            {/* second  */}

            <div className='flex flex-col justify-center items-center p-10 text-center bg-white rounded-xl'>
                <div className='text-sm text-[#F64B4B] p-6'>
                    UNLIMITED
                </div>
                <div  className='text-2xl'>
                    <div className='font-bold p-6 text-3xl '>
                        $<span className='text-7xl font-bold'>99</span>/mo
                    </div>

                    <div className='p-6 border-t-2'>
                        Unlimited Team Members
                    </div>
                    <div  className='p-6 border-t-2'>
                        Unlimited Cloud Storage
                    </div>
                    <div  className='p-6 border-t-2'>
                        Unlimited Meetings
                    </div>
                    <div  className='p-6 border-t-2'>
                        Premium Support
                    </div>
                </div>
                <div className='p-4 mt-6 w-80 bg-[#F74D4D] text-white font-lg font-bold text-center rounded-lg'>
                    <Link to='/log-in'>Get Started Now</Link>
                </div>
            </div>

            {/* 
            third
            */}

<div className='flex flex-col justify-center items-center p-10 text-center bg-[#473BF0] text-white rounded-xl'>
                <div className='text-sm p-6'>
                    ENTERPRISE
                </div>
                <div  className='text-2xl'>
                    <div className='p-6 text-base font-thin text-gray-300'>
                    Advanced features for large teams 
                    <br/>
                    with complex projects.
                    </div>

                    <div className='p-6 border-t-2'>
                        Unlimited Team Members
                    </div>
                    <div  className='p-6 border-t-2'>
                        5TB Cloud Storage
                    </div>
                    <div  className='p-6 border-t-2'>
                        Unlimited Meetings
                    </div>
                    <div  className='p-6 border-t-2'>
                        Premium Support
                    </div>
                </div>
                <div className='p-4 mt-6 w-80 bg-[#68D585] text-white font-lg font-bold text-center rounded-lg'>
                    <Link to='/contact-us'>Contact Sales</Link>
                </div>
            </div>
        </div>
    )
}
