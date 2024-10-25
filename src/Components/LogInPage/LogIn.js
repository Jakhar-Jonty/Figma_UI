import React from 'react'
import {Link} from 'react-router-dom'
import { HeaderSignUp } from '../SignUpPage/HeaderSignUp'
import { FooterAboutUs } from '../About_Us/FooterAboutUs'

export const LogIn = () => {
  return (
    <div>
        {/* <HeaderSignUp/> */}

        <div className='w-full flex justify-center items-center bg-[#F4F7FA] p-40'>
            <div>
                <div className='text-center'>
                    <div className='font-bold text-6xl'>
                        Login
                    </div>
                    <div className='text-gray-500 mt-10 text-lg'>
                        To get started, you need to sign in here.
                    </div>
                </div>
                <form>
                    <div className='m-10 flex flex-col gap-6 bg-white p-8 rounded-lg'>

                        <div className='flex flex-col  gap-4 w-60'>
                            <label className='text-2xl font-bold'>Email</label>
                            <input type='email' name="mail" placeholder='i.e. john@mail.com' className='w-96 h-16 border rounded-lg text-xl pl-6' />
                        </div>

                        <div className='flex flex-col gap-4 '>
                            <div className='flex justify-between'>
                            <label className='text-2xl font-bold'>Password</label>
                            <Link to='/reset-password' className='text-lg text-[#473BF0]'>Forgot Password ?</Link>
                            </div>
                           
                            <input type="password" name="pass" placeholder='********' className='w-96 h-16 border rounded-lg text-xl pl-6' />
                        </div>

                        <div className='flex gap-6'>
                            <input type="checkbox" name="terms" className='w-6 h-6' />
                            <label className='text-xl'>Remember me</label>
                        </div>

                        <div className='flex justify-center'>
                            <div className='w-96 h-16 bg-[#473BF0] flex justify-center items-center rounded-lg text-white text-xl font-bold hover:bg-[#070341]'>
                               <Link>Sign In</Link>
                            </div>
                        </div>
                    </div>
                </form>

                <div className='sm:text-2xl text-center mt-20'>
                    Don't have an account? <Link to='/sign-up' className='text-[#473BF0]' >Create an account</Link>
                </div>
            </div>
        </div>


        {/* <FooterAboutUs/> */}
    </div>
  )
}
