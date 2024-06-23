import React from 'react'
import { Link } from 'react-router-dom'

export const FrequentlyAskedQue = () => {
    return (
        <div className='w-full p-12 flex flex-col justify-center items-center bg-[#F4F7FA] gap-6'>
            <div className='flex flex-col justify-center  gap-6'>
                <div className='text-center'>
                    <div className='font-bold text-6xl'>
                        Frequently Asked Questions
                    </div>
                    <div className='text-gray-500 mt-10 text-lg'>
                        With lots of unique blocks, you can easily build a page without coding.
                        <br />
                        Build your next consultancy website within few minutes.
                    </div>
                </div>

                <div className='bg-[white] p-6'>
                    <div className='text-2xl font-bold flex justify-between'>
                        Can I use Albino for my clients? <span>^</span>
                    </div>
                    <div className='text-lg mt-6 text-gray-500'>
                        With lots of unique blocks, you can   easily build a page without coding. Build your 
                         <br/>
                         next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta.
                         <br/>
                         Aliquam sagittis interdum Melisandre.
                    </div>
                </div>

                <div className='text-2xl font-bold bg-[white] p-6 flex justify-between'>
                    Does it work with WordPress? <span>></span>
                </div>
                <div className='text-2xl font-bold bg-[white] p-6 flex justify-between'>
                    Do I get free updates? <span>></span>
                </div>
                <div className='text-2xl font-bold bg-[white] p-6 flex justify-between'>
                    Will you provide support? <span>></span>
                </div>
            </div>

            <div className='text-2xl text-center mt-20'>
            Haven’t got your answer?<Link to='/contact-us' className='text-[#473BF0]' > Contact our support now</Link>
                </div>
        </div>
    )
}
