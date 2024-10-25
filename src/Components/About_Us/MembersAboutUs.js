import React from 'react';
import person1 from '../About_Us/About_Us_Img/person1.png';
import person2 from '../About_Us/About_Us_Img/person2.png';
import person3 from '../About_Us/About_Us_Img/person3.png';
import person4 from '../About_Us/About_Us_Img/person4.png';
import person5 from '../About_Us/About_Us_Img/person5.png';
import person6 from '../About_Us/About_Us_Img/person6.png';
import person7 from '../About_Us/About_Us_Img/person7.png';
import { Link } from 'react-router-dom';

export const MembersAboutUs = () => {
    return (
        <div className='w-full pt-20 pb-40 flex flex-col items-center'>
            <div className='text-center mb-12'>
                <div className='text-5xl font-bold'>
                    Meet our team
                </div>
                <div className='text-gray-500 mt-8 mb-8'>
                    With lots of unique blocks, you can easily build a page without coding.
                    <br />
                    Build your next consultancy website within a few minutes.
                </div>
            </div>

            <div className='grid gap-12 sm:grid-cols-2 lg:grid-cols-4 justify-items-center'>
                {[
                    { name: 'Joe Bridges', title: 'Founder', img: person1 },
                    { name: 'Jeffrey Walters', title: 'Chief Executive Officer', img: person2 },
                    { name: 'Jason Reed', title: 'Chief Technology Officer', img: person3 },
                    { name: 'Nellie Padilla', title: 'Creative Director', img: person4 },
                    { name: 'Dean Bell', title: 'Lead Programmer', img: person5 },
                    { name: 'Pearl Brooks', title: 'Digital Marketer', img: person6 },
                    { name: 'Isaiah Griffin', title: 'UX Designer', img: person7 }
                ].map((member, index) => (
                    <div key={index} className='flex flex-col items-center w-72'>
                        <img src={member.img} alt={`${member.name}'s profile`} className='rounded-lg w-full h-auto' />
                        <div className='font-bold text-lg mt-2'>{member.name}</div>
                        <div className='text-gray-500'>{member.title}</div>
                    </div>
                ))}

                <div className='text-center w-72 flex flex-col justify-center gap-8 pb-16'>
                    <div className='text-3xl font-bold'>
                        Interested to join
                        <br />
                        our team?
                    </div>
                    <Link to="#" className='text-[#473BF0] hover:underline'>
                        Apply now {'->'}
                    </Link>
                </div>
            </div>
        </div>
    );
};
