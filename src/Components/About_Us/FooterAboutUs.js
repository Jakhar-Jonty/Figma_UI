import React from 'react'
import { Link } from 'react-router-dom'

export const FooterAboutUs = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center pt-20 bg-[#161C2D] text-white'>
            <div className='lg:w-[1100px] justify-between items-start border-b border-gray-500 pb-20 sm:w-full sm:grid sm:grid-cols-3 gap-10 sm:px-20 lg:grid-cols-5 '>


                <div className='flex flex-col gap-8'>
                    <div className='text-gray-500 text-lg'>
                        Company
                    </div>
                    <div className='flex flex-col gap-4 text-xl font-thin'>
                        <div>
                            <Link>
                                About us
                            </Link>
                        </div>
                        <div>
                            <Link>
                                Contact us
                            </Link>
                        </div>
                        <div>
                            <Link>
                                Careers
                            </Link>
                        </div>
                        <div>
                            <Link>
                                Press
                            </Link>
                        </div>
                    </div>
                </div>

                {/* second col */} 

                <div className='flex flex-col gap-8'>
                    <div className='text-gray-500 text-lg'>
                        Product
                    </div>
                    <div className='flex flex-col gap-4 text-xl font-thin'>
                        <div>
                            <Link>
                                Features
                            </Link>
                        </div>
                        <div>
                            <Link>
                                Pricing
                            </Link>
                        </div>
                        <div>
                            <Link>
                                News
                            </Link>
                        </div>
                        <div>
                            <Link>
                                Help desk
                            </Link>
                        </div>
                        <div>
                            <Link>
                                Support
                            </Link>
                        </div>
                    </div>
                </div>

                {/* {/* Third col */}

                <div className='flex flex-col gap-8'>
                    <div className='text-gray-500 text-lg'>
                        services
                    </div>
                    <div className='flex flex-col gap-4 text-xl font-thin'>
                        <div>
                            <Link>
                                Digital Marketing
                            </Link>
                        </div>
                        <div>
                            <Link>
                                Content Writing
                            </Link>
                        </div>
                        <div>
                            <Link>
                                SEO for Business
                            </Link>
                        </div>
                        <div>
                            <Link>
                                UI Design
                            </Link>
                        </div>
                    </div>
                </div> 

                {/* Fourth col */}

                <div className='flex flex-col gap-8'>
                    <div className='text-gray-500 text-lg'>
                        Legal
                    </div>
                    <div className='flex flex-col gap-4 text-xl font-thin'>
                        <div>
                            <Link>
                                Privacy Policy
                            </Link>
                        </div>
                        <div>
                            <Link>
                                Terms & Condition
                            </Link>
                        </div>
                        <div>
                            <Link>
                                Return Policy
                            </Link>
                        </div>

                    </div>
                </div>

                {/* last */}

                <div className='flex flex-col gap-8'>
                    <div className='text-gray-500 text-lg'>
                        Contact Us
                    </div>
                    <div className='flex flex-col gap-4 text-xl font-thin'>
                        <div>
                            <Link>
                                support@brainwave.io
                            </Link>
                        </div>
                        <div>
                            <Link>
                                +133-394-34-39-1435
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-screen-xl w-full flex justify-between p-6 sm:flex-col sm:gap-6 sm:items-center lg:flex-row'>
                <div className='text-gray-500'>
                    &copy; 2024 Copyright, All Right Reserved, Made by Seju_ui_ux with &nbsp;
                    <i className="fa-solid fa-heart text-[#1082E9]"></i>
                </div>
                <div className='text-xl flex gap-4'>
                    <Link to="#" className="hover:text-gray-400">
                        <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link to="#" className="hover:text-gray-400">
                        <i className="fa-brands fa-facebook"></i>
                    </Link>
                    <Link to="#" className="hover:text-gray-400">
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link to="#" className="hover:text-gray-400">
                        <i className="fa-brands fa-linkedin"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

