// import React from 'react'

// export const ProductDesciption = () => {
//     return (
//         <div className='w-full flex flex-col justify-center items-center py-20'>

//             <div className='w-full flex text-2xl gap-20 font-bold border-b '>
//                 <div className='text-[#473BF0]  border-b border-[#473BF0] py-6'>
//                     Description
//                 </div>

//                 <div className='py-6'>
//                     Specification
//                 </div>

//                 <div className='py-6'>
//                     Reviews
//                 </div>
//             </div>

//             <div className='text-lg text-[#161C2D] py-10 flex flex-col gap-10'>
//                 <div>
//                     Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Leverage agile frameworks to provide a robust synopsis for high level overviews.
//                 </div>
//                 <div>
//                     terative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
//                 </div>
//                 <div>
//                     Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
//                 </div>
//             </div>

//         </div>
//     )
// }


import React, { useState } from 'react';

export const ProductDesciption = () => {
    const [activeTab, setActiveTab] = useState('description');

    const renderContent = () => {
        switch (activeTab) {
            case 'description':
                return (
                    <div className='text-lg text-[#161C2D] py-10 flex flex-col gap-10'>
                        <div>
                            Leverage agile frameworks to provide a robust synopsis for high-level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic worldview of disruptive innovation via workplace diversity and empowerment.
                        </div>
                        <div>
                            Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                        </div>
                    </div>
                );
            case 'specification':
                return (
                    <div className='text-lg text-[#161C2D] py-10 flex flex-col gap-10'>
                        <h2 className='font-bold'>Specifications</h2>
                        <ul className='list-disc pl-6'>
                            <li>Active noise cancellation</li>
                            <li>Transparency mode</li>
                            <li>Soft, tapered silicone tips</li>
                            <li>Sweat and water resistant</li>
                        </ul>
                    </div>
                );
            case 'reviews':
                return (
                    <div className='text-lg text-[#161C2D] py-10 flex flex-col gap-10'>
                        <h2 className='font-bold'>Reviews</h2>
                        <div>No reviews yet. Be the first to write a review!</div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='w-full flex flex-col justify-center items-center py-20'>
            <div className='w-full flex flex-col sm:flex-row text-2xl gap-20 font-bold border-b'>
                <div
                    className={`cursor-pointer py-6 ${activeTab === 'description' ? 'text-[#473BF0] border-b border-[#473BF0]' : ''}`}
                    onClick={() => setActiveTab('description')}
                    aria-selected={activeTab === 'description'}
                >
                    Description
                </div>
                <div
                    className={`cursor-pointer py-6 ${activeTab === 'specification' ? 'text-[#473BF0] border-b border-[#473BF0]' : ''}`}
                    onClick={() => setActiveTab('specification')}
                    aria-selected={activeTab === 'specification'}
                >
                    Specification
                </div>
                <div
                    className={`cursor-pointer py-6 ${activeTab === 'reviews' ? 'text-[#473BF0] border-b border-[#473BF0]' : ''}`}
                    onClick={() => setActiveTab('reviews')}
                    aria-selected={activeTab === 'reviews'}
                >
                    Reviews
                </div>
            </div>

            {renderContent()}
        </div>
    );
};
