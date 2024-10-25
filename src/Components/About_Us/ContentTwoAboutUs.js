import React from 'react';
import img1 from '../About_Us/About_Us_Img/content2Img1.png';
import img2 from '../About_Us/About_Us_Img/content2Img2.png';
import img3 from '../About_Us/About_Us_Img/content2Img3.png';
import img4 from '../About_Us/About_Us_Img/content2Img4.png';

export const ContentTwoAboutUs = () => {
    return (
        <div className='w-full flex justify-center items-center pt-32 pb-32'>
            <div className='max-w-screen-xl w-full flex flex-wrap gap-10 sm:gap-20 lg:justify-around sm:justify-center items-center p-4'>
                
                {/* Image Section */}
                <div className='flex flex-col justify-center items-center gap-7 sm:flex-row sm:gap-10'>
                    <div className='flex flex-col justify-center items-center gap-7'>
                        <img src={img1} alt='img1' className='w-10/12 sm:w-full rounded-xl'/>
                        <img src={img2} alt='img2' className='w-10/12 sm:w-full rounded-xl'/>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-7'>
                        <img src={img3} alt='img3' className='w-10/12 sm:w-full rounded-xl'/>
                        <img src={img4} alt='img4' className='w-10/12 sm:w-full rounded-xl'/>
                    </div>
                </div>

                {/* Text Section */}
                <div className='flex flex-col items-start'>
                    <div className='font-bold text-4xl leading-tight'>
                        High skilled coders
                        <br />
                        from worldwide.
                    </div>
                    <div className='leading-relaxed text-lg text-gray-500 mt-10'>
                        <div>
                            We share common trends and strategies for improving
                            <br />
                            your rental income and making sure you stay in high
                            <br />
                            demand for service.
                        </div>
                        <div className='mt-10'>
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
        </div>
    );
};

