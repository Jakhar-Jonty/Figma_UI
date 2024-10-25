// import React from 'react'

// export const ContentOneAboutUs = () => {
//     return (
//         <div className='w-full flex justify-center items-center pt-10 pb-10'>
//             <div className='w-[1100px] flex flex-wrap lg:justify-between sm:justify-center gap-20'>
//                 <div className='font-bold text-4xl leading-tight'>
//                     We are here to help
//                     <br />
//                     the customers to get
//                     <br />
//                     their success.
//                 </div>

//                 <div className=' leading-relaxed text-lg text-gray-500'>
//                     <div>
//                         We share common trends and strategies for improving
//                         <br />
//                         your rental income and making sure you stay in high
//                         <br />
//                         demand of service.
//                     </div>

//                     <div className='mt-10'>
//                         With lots of unique blocks, you can easily build a page
//                         <br />
//                         without coding. Build your next landing page. With lots
//                         <br />
//                         of unique blocks, you can easily build a page without
//                         <br />
//                         coding any other page.
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React from 'react';

export const ContentOneAboutUs = () => {
    return (
        <div className='w-full flex justify-center items-center py-10'>
            <div className='max-w-screen-xl w-full flex flex-wrap justify-center items-center lg:justify-around gap-10 p-4'>
                {/* Heading Section */}
                <div className='font-bold text-3xl sm:text-4xl leading-tight'>
                    We are here to help
                    <br />
                    the customers to get
                    <br />
                    their success.
                </div>

                {/* Description Section */}
                <div className='leading-relaxed text-base sm:text-lg text-gray-500 max-w-md'>
                    <div>
                        We share common trends and strategies for improving
                        <br />
                        your rental income and making sure you stay in high
                        <br />
                        demand for service.
                    </div>

                    <div className='mt-6'>
                        With lots of unique blocks, you can easily build a page
                        <br />
                        without coding. Build your next landing page. With lots
                        <br />
                        of unique blocks, you can easily build a page without
                        <br />
                        coding any other page.
                    </div>
                </div>
            </div>
        </div>
    );
};
