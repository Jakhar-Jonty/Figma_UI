import React from 'react'
import { Link } from 'react-router-dom'
import { FooterAboutUs } from '../About_Us/FooterAboutUs'

export const ContactUs = () => {
    return (
        <div>
            <div className='w-full flex justify-center items-center bg-[#F4F7FA] p-40'>
                <div>
                    <div className='text-center'>
                        <div className='font-bold text-6xl'>
                            Contact us
                        </div>
                        <div className='text-gray-500 mt-10 text-lg'>
                            With lots of unique blocks, you can easily build a page without coding.
                            <br />
                            Build your next consultancy website within few minutes.
                        </div>
                    </div>
                    <div className=' w-[1100px] flex justify-around items-center '>
                        <div>
                            <form>
                                <div className='m-10 flex flex-col gap-6 bg-white p-8 rounded-lg'>
                                    <div className='flex flex-col gap-4 '>
                                        <label className='text-2xl font-bold'>First & Last Name</label>
                                        <input type="text" name="name" placeholder='i.e. John Doe' className='w-96 h-16 border rounded-lg text-xl pl-6' />
                                    </div>

                                    <div className='flex flex-col  gap-4 w-60'>
                                        <label className='text-2xl font-bold'>Email</label>
                                        <input type='email' name="mail" placeholder='i.e. john@mail.com' className='w-96 h-16 border rounded-lg text-xl pl-6' />
                                    </div>

                                    <div className='flex flex-col gap-4 '>
                                        <label className='text-2xl font-bold'>Subject</label>
                                        <input type="text" name="sub" placeholder='i.e.I need a Help' className='w-96 h-16 border rounded-lg text-xl pl-6' />
                                    </div>

                                    <div className='flex flex-col gap-4 '>
                                        <label className='text-2xl font-bold'>Message</label>
                                        <input type="text" name="msg" placeholder='Type yor message' className='w-96 h-16 border rounded-lg text-xl pl-6' />
                                    </div>

                                    <div className='flex justify-center'>
                                        <div className='w-96 h-16 bg-[#473BF0] flex justify-center items-center rounded-lg text-white text-xl font-bold'>
                                            <Link>Send</Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className='flex flex-col gap-10 w-96'>
                            <div className='flex flex-col gap-4'>
                                <div className='font-bold text-2xl'>
                                    Call us
                                </div>
                                <div>
                                    <div className='text-gray-500 text-lg'>
                                        +1-940-394-2948
                                        <br />
                                        +1-389-385-3807
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='font-bold text-2xl'>
                                    Email us
                                </div>
                                <div>
                                    <div className='text-gray-500 text-lg'>
                                        support@brainwave.io
                                        <br />
                                        contact@brainwave.io
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='font-bold text-2xl'>
                                    Visit us
                                </div>
                                <div>
                                    <div className='text-gray-500 text-lg'>
                                        34 Madison Street
                                        <br />
                                        NY, USA 10005
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterAboutUs/>
        </div>
    )
}
