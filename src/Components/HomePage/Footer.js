import React from 'react'
import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='w-full h-24 flex justify-center items-center'>
        <div className='w-[1100px] h-8 flex justify-between'>
           <div className='font-bold text-xl'>
                Brainwave.io
           </div>
           <div>
                <div>
                    <div className='flex gap-16 font-semibold text-base'>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>Terms & Conditions</Link>
                        <Link to='/'>Support</Link>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}
