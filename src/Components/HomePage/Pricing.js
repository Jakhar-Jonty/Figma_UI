// import React from 'react'
// import greencase from '../Images/greencase.png'
// import whitecase from '../Images/whitecase.png'
// import silvercase from '../Images/silvercase.png';

// export const Pricing = () => {
//   return (
//     <div className='w-full flex justify-center items-center bg-white py-20'>
//         <div className='w-[1000px] lg:h-[600px] flex flex-col gap-12 sm:h-full' >

//             <div className='flex flex-col text-center'>
//                 <div className='font-bold text-5xl'>
//                     Get your airpod now.
//                 </div>

//                 <div className='text-lg mt-6 text-gray-400'>
//                 We share common trends and strategies for
//                 <br/>
//                 improving your rental income.
//                 </div>
//             </div>

//             <div className='grid lg:grid-cols-3 justify-between sm:grid-cols-1 '>
//                 <div className='flex flex-col items-center justify-center text-center gap-6'>
//                     <div>
//                         <img src={greencase} alt='img'/>
//                     </div>
//                     <div className='text-xl font-bold'>
//                         Midnight Green
//                     </div>

//                     <div className='text-base text-gray-500'>
//                          AirPods (2nd gen) iPhone Colors with
//                         <br/>
//                         Wireless Charging Case
//                     </div>

//                     <div>
//                         <button className='bg-[#473BF0] w-36 h-12 rounded-lg text-white font-bold'>
//                             Buy now-$99
//                         </button>
//                     </div>
//                 </div>

//                 <div className='flex flex-col items-center justify-center text-center gap-6'>
//                     <div>
//                         <img src={whitecase} alt='img'/>
//                     </div>
//                     <div className='text-xl font-bold'>
//                         Midnight Green
//                     </div>

//                     <div className='text-base text-gray-500'>
//                          AirPods (2nd gen) iPhone Colors with
//                         <br/>
//                         Wireless Charging Case
//                     </div>

//                     <div>
//                         <button className='bg-[#473BF0] w-36 h-12 rounded-lg text-white font-bold'>
//                             Buy now-$99
//                         </button>
//                     </div>
//                 </div>

//                 <div className='flex flex-col items-center justify-center text-center gap-6'>
//                     <div>
//                         <img src={silvercase} alt='img'/>
//                     </div>
//                     <div className='text-xl font-bold'>
//                         Midnight Green
//                     </div>

//                     <div className='text-base text-gray-500'>
//                          AirPods (2nd gen) iPhone Colors with
//                         <br/>
//                         Wireless Charging Case
//                     </div>

//                     <div>
//                         <button className='bg-[#473BF0] w-36 h-12 rounded-lg text-white font-bold'>
//                             Buy now-$99
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }


import React from 'react';
import greencase from '../Images/greencase.png';
import whitecase from '../Images/whitecase.png';
import silvercase from '../Images/silvercase.png';

export const Pricing = () => {
  return (
    <div className='w-full flex justify-center items-center bg-white py-20'>
      <div className='max-w-screen-xl w-full flex flex-col gap-12'>

        {/* Heading Section */}
        <div className='flex flex-col text-center'>
          <div className='font-bold text-4xl sm:text-5xl'>
            Get your airpod now.
          </div>

          <div className='text-base sm:text-lg mt-4 text-gray-400'>
            We share common trends and strategies for
            <br />
            improving your rental income.
          </div>
        </div>

        {/* Product Cards Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Midnight Green Product */}
          <div className='flex flex-col items-center justify-center text-center gap-6 p-4 border rounded-lg shadow'>
            <img src={greencase} alt='Midnight Green AirPods' className='w-48 h-auto' />
            <div className='text-xl font-bold'>Midnight Green</div>
            <div className='text-base text-gray-500'>
              AirPods (2nd gen) iPhone Colors with
              <br />
              Wireless Charging Case
            </div>
            <button className='bg-[#473BF0] w-36 h-12 rounded-lg text-white font-bold'>
              Buy now - $99
            </button>
          </div>

          {/* White Product */}
          <div className='flex flex-col items-center justify-center text-center gap-6 p-4 border rounded-lg shadow'>
            <img src={whitecase} alt='White AirPods' className='w-48 h-auto' />
            <div className='text-xl font-bold'>White</div>
            <div className='text-base text-gray-500'>
              AirPods (2nd gen) iPhone Colors with
              <br />
              Wireless Charging Case
            </div>
            <button className='bg-[#473BF0] w-36 h-12 rounded-lg text-white font-bold'>
              Buy now - $99
            </button>
          </div>

          {/* Silver Product */}
          <div className='flex flex-col items-center justify-center text-center gap-6 p-4 border rounded-lg shadow'>
            <img src={silvercase} alt='Silver AirPods' className='w-48 h-auto' />
            <div className='text-xl font-bold'>Silver</div>
            <div className='text-base text-gray-500'>
              AirPods (2nd gen) iPhone Colors with
              <br />
              Wireless Charging Case
            </div>
            <button className='bg-[#473BF0] w-36 h-12 rounded-lg text-white font-bold'>
              Buy now - $99
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
