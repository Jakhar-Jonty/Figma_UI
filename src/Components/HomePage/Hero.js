// import React from 'react'
// import {Link} from 'react-router-dom';
// import airpodimg from '../Images/airpod-image.png'
// export const Hero = () => {
//   return (
//     <div className='flex flex-col justify-evenly items-center text-center h-[940px] mt-28 mb-20'>
//         <div>
//             <img src={airpodimg} alt='img'/>
//         </div>
        
//             <div className=' text-red-600 text-xs '>
//                 NON-STOP MUSIC FOR LONG TIME
//             </div>
//             <div className='text-6xl font-bold'>
//                 Sound,that sounds better!
//             </div>

//             <div className=' text-xl text-gray-400 leading-8'>
//                 With lots of unique blocks, you can easily build a page without coding.
//                 <br/>
//                 Build your next consultancy website within few minutes.
//             </div>

//             <button className=' w-64 bg-[#473BF0] h-12 rounded-lg text-lg text-white font-bold'>
//                 Buy now - Starting at $99
//             </button>
            
//             <Link to="/" className='font-bold text-xs hover:text-[#473BF0]'>WATCH IN ACTION</Link>

        
//     </div>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';
import airpodimg from '../Images/airpod-image.png';

export const Hero = () => {
  return (
    <div className='flex flex-col justify-evenly items-center text-center h-auto py-16 sm:py-20 mt-12 sm:mt-28 mb-16 sm:mb-20 px-4'>
      {/* Image Section */}
      <div className='mb-8'>
        <img src={airpodimg} alt='airpod' className='w-64 sm:w-80 md:w-96' />
      </div>

      {/* Tagline */}
      <div className='text-red-600 text-xs sm:text-sm mb-2'>
        NON-STOP MUSIC FOR LONG TIME
      </div>

      {/* Main Heading */}
      <div className='text-3xl sm:text-4xl lg:text-6xl font-bold mb-4'>
        Sound, that sounds better!
      </div>

      {/* Description */}
      <div className='text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl'>
        With lots of unique blocks, you can easily build a page without coding.
        <br />
        Build your next consultancy website within a few minutes.
      </div>

      {/* Button */}
      <button className='w-48 sm:w-64 bg-[#473BF0] h-12 rounded-lg text-sm sm:text-lg text-white font-bold mb-4'>
        Buy now - Starting at $99
      </button>

      {/* Link */}
      <Link to="/" className='font-bold text-xs sm:text-sm hover:text-[#473BF0]'>
        WATCH IN ACTION
      </Link>
    </div>
  );
};
