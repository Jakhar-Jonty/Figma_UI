// import React from 'react'
// import HeroImgAbtus from '../About_Us/About_Us_Img/AboutUsHeroImg.png'

// export const HeroAboutUs = () => {
//   return (
//     <div className='w-full h-[900px]  mt-10 flex items-center justify-center'>
//             <div className='w-[1100px] h-[780px] text-center flex flex-col justify-between'>
//                 <div className='font-bold text-6xl'>
//                     Our story
//                 </div>
               
//                 <div className='text-lg text-gray-500'>
//                 With lots of unique blocks, you can easily build a page without coding.
//                 <br/>
//                 Build your next consultancy website within few minutes.
//                 </div>

//                 <div>
//                     <img src={HeroImgAbtus} alt='img'/>
//                 </div>
//             </div>
//     </div>
//   )
// }
import React from 'react';
import HeroImgAbtus from '../About_Us/About_Us_Img/AboutUsHeroImg.png';

export const HeroAboutUs = () => {
  return (
    <div className='w-full mt-10 flex items-center justify-center'>
      <div className='max-w-screen-lg w-full  text-center flex flex-col justify-center items-center'>
        <div className='font-bold text-6xl mb-6'>
          Our story
        </div>
       
        <div className='text-lg text-gray-500 mb-8'>
          With lots of unique blocks, you can easily build a page without coding.
          <br />
          Build your next consultancy website within a few minutes.
        </div>

        <div>
          <img src={HeroImgAbtus} alt='A visual representation of our story' className='w-full h-auto rounded-lg' />
        </div>
      </div>
    </div>
  );
};
