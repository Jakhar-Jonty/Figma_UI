import React from 'react'
import {Link} from 'react-router-dom';
import airpodimg from '../Images/airpod-image.png'
export const Hero = () => {
  return (
    <div className='flex flex-col justify-evenly items-center text-center h-[940px] mt-28 mb-20'>
        <div>
            <img src={airpodimg} alt='img'/>
        </div>
        
            <div className=' text-red-600 text-xs '>
                NON-STOP MUSIC FOR LONG TIME
            </div>
            <div className='text-6xl font-bold'>
                Sound,that sounds better!
            </div>

            <div className=' text-xl text-gray-400 leading-8'>
                With lots of unique blocks, you can easily build a page without coding.
                <br/>
                Build your next consultancy website within few minutes.
            </div>

            <div>
                <button className=' w-64 bg-[#473BF0] h-12 rounded-lg text-lg text-white font-bold'>
                    Buy now - Starting at $99
                </button>
            </div>
            
            <div>
                <Link to="/" className='font-bold text-xs'>WATCH IN ACTION</Link>
            </div>

        
    </div>
  )
}
