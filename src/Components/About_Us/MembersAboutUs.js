import React from 'react'
import person1 from '../About_Us/About_Us_Img/person1.png'
import person2 from '../About_Us/About_Us_Img/person2.png'
import person3 from '../About_Us/About_Us_Img/person3.png'
import person4 from '../About_Us/About_Us_Img/person4.png'
import person5 from '../About_Us/About_Us_Img/person5.png'
import person6 from '../About_Us/About_Us_Img/person6.png'
import person7 from '../About_Us/About_Us_Img/person7.png'
import {Link} from 'react-router-dom'

export const MembersAboutUs = () => {
    return (
        <div className='w-full pt-20 pb-40 flex justify-center items-center'>

            <div className='w-[1100px] flex flex-col gap-12 '>

                <div className='text-center'>
                    <div className='text-5xl font-bold'>
                        Meet our team
                    </div>

                    <div className='text-gray-500 mt-8 mb-8'>
                        With lots of unique blocks, you can easily build a page without coding.
                    <br/>
                         Build your next consultancy website within few minutes.
                    </div>

                </div>

                <div className='flex gap-6'>
                    <div className='flex flex-col gap-2 w-72'>
                        <div>
                            <img src={person1} alt='img' className=' rounded-lg' />
                        </div>

                        <div className='font-bold text-lg'>
                            Joe Bridges
                        </div>
                        <div className='text-gray-500'>
                            Founder
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 w-72'>
                        <div>
                            <img src={person2} alt='img' className=' rounded-lg' />
                        </div>

                        <div className='font-bold text-lg'>
                            Jeffrey Walters
                        </div>
                        <div className='text-gray-500'>
                            Cheif Executive Officer
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 w-72'>
                        <div>
                            <img src={person3} alt='img' className=' rounded-lg' />
                        </div>

                        <div className='font-bold text-lg '>
                            Jason Reed
                        </div>
                        <div className='text-gray-500'>
                            Chief Technology Officer
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 w-72'>
                        <div>
                            <img src={person4} alt='img' className=' rounded-lg' />
                        </div>

                        <div className='font-bold text-lg'>
                            Nellie Padilla
                        </div>
                        <div className='text-gray-500'>
                            Creative Director
                        </div>
                    </div>
                </div>
                
                <div className='flex gap-6'>

                    <div className='flex flex-col gap-2 w-72'>
                        <div>
                            <img src={person5} alt='img' className=' rounded-lg' />
                        </div>

                        <div className='font-bold text-lg'>
                            Dean Bell
                        </div>
                        <div className='text-gray-500'>
                            Lead Programmer
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 w-72'>
                        <div>
                            <img src={person6} alt='img' className=' rounded-lg' />
                        </div>

                        <div className='font-bold text-lg'>
                            Pearl Brooks
                        </div>
                        <div className='text-gray-500'>
                            Digital Marketer
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 w-72'>
                        <div>
                            <img src={person7} alt='img' className=' rounded-lg' />
                        </div>

                        <div className='font-bold text-lg'>
                            Isaiah Griffin
                        </div>
                        <div className='text-gray-500'>
                            UX Designer
                        </div>
                    </div>

                    <div className='text-3xl font-bold w-72 flex flex-col justify-center gap-8 pb-16 '>
                        <div className=''>
                          Interested to join
                            <br/> 
                            our team ?
                        </div>
                        <div className='text-[#473BF0]'>
                            <Link>Apply now {'->'}</Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
