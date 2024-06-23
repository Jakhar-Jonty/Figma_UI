import React from 'react'
import { HeaderSignUp } from '../SignUpPage/HeaderSignUp'
import { FooterAboutUs } from '../About_Us/FooterAboutUs'
import { Link } from 'react-router-dom'

export const ResetPassword = () => {
  return (
    <div>
        {/* <HeaderSignUp/> */}

        <div className='w-full flex justify-center items-center bg-[#F4F7FA] p-40'>
            <div>
                <div className='text-center'>
                    <div className='font-bold text-6xl'>
                        Reset Password
                    </div>
                    <div className='text-gray-500 mt-10 text-lg'>
                        Enter your email to get reset link
                    </div>
                </div>
                <form>
                    <div className='m-10 flex flex-col gap-6 bg-white p-8 rounded-lg'>

                        <div className='flex flex-col  gap-4 w-60'>
                            <label className='text-2xl font-bold'>Email</label>
                            <input type='email' name="mail" placeholder='i.e. john@mail.com' className='w-96 h-16 border rounded-lg text-xl pl-6' />
                        </div>

                        <div className='flex justify-center'>
                            <div className='w-96 h-16 bg-[#473BF0] flex justify-center items-center rounded-lg text-white text-xl font-bold'>
                               <Link>Send Reset Link</Link>
                            </div>
                        </div>
                    </div>
                </form>

                <div className='text-2xl text-center mt-20'>
                    Remembered the password?<Link to='/log-in' className='text-[#473BF0]' > Sign in now</Link>
                </div>
            </div>
        </div>

        <FooterAboutUs/>
    </div>
  )
}
