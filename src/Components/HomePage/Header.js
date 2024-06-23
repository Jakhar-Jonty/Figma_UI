import React from 'react'
import { Link } from 'react-router-dom';

export const Header= () => {
  return (
    <div className='flex justify-between items-center h-12'>
        <div className='text-2xl font-bold w-1/3'>
          <Link to='/' >Brainwave.io</Link>
        </div>

        <div className='flex justify-between text-lg font-bold pl-16 w-1/3 gap-10'>
            <Link to='/'>Demos</Link>
            <Link to='/plans'>Plans</Link>
            <Link to='/aboutus'>About</Link>
            <Link to='/contact-us'>Contact us</Link>
        </div>

        <div className='flex gap-8 w-1/3 justify-end'>
        <div className=' w-32 text-[#473BF0] h-12 rounded-lg text-2xl font-bold flex justify-center items-center'>
                  <Link to='/log-in'>Log In</Link>
            </div>
            <div className=' w-32 bg-[#473BF0] h-12 rounded-lg text-2xl text-white font-bold flex justify-center items-center'>
                  <Link to='/sign-up'>Sign Up</Link>
            </div>
        </div>

    </div>
  )
}
