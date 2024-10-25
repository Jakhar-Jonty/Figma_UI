// import React from 'react'
// import { Link } from 'react-router-dom'
// import { FooterAboutUs } from '../About_Us/FooterAboutUs'

// export const ContactUs = () => {
//     return (
//         <div>
//             <div className='w-full flex  justify-center items-center bg-[#F4F7FA] p-20'>
//                 <div>
//                     <div className='text-center'>
//                         <div className='font-bold text-6xl'>
//                             Contact us
//                         </div>
//                         <div className='text-gray-500 mt-10 text-lg'>
//                             With lots of unique blocks, you can easily build a page without coding.
//                             <br />
//                             Build your next consultancy website within few minutes.
//                         </div>
//                     </div>
//                     <div className=' w-full flex gap-20  justify-center flex-wrap items-center '>
//                         <div>
//                             <form>
//                                 <div className='m-10 flex flex-col gap-6 bg-white p-8 rounded-lg'>
//                                     <div className='flex flex-col gap-4 '>
//                                         <label className='text-2xl font-bold'>First & Last Name</label>
//                                         <input type="text" name="name" placeholder='i.e. John Doe' className='w-96 h-16 border rounded-lg text-xl pl-6' />
//                                     </div>

//                                     <div className='flex flex-col  gap-4 w-60'>
//                                         <label className='text-2xl font-bold'>Email</label>
//                                         <input type='email' name="mail" placeholder='i.e. john@mail.com' className='w-96 h-16 border rounded-lg text-xl pl-6' />
//                                     </div>

//                                     <div className='flex flex-col gap-4 '>
//                                         <label className='text-2xl font-bold'>Subject</label>
//                                         <input type="text" name="sub" placeholder='i.e.I need a Help' className='w-96 h-16 border rounded-lg text-xl pl-6' />
//                                     </div>

//                                     <div className='flex flex-col gap-4 '>
//                                         <label className='text-2xl font-bold'>Message</label>
//                                         <input type="text" name="msg" placeholder='Type yor message' className='w-96 h-16 border rounded-lg text-xl pl-6' />
//                                     </div>

//                                     <div className='flex justify-center'>
//                                         <div className='w-96 h-16 bg-[#473BF0] flex justify-center items-center rounded-lg text-white text-xl font-bold'>
//                                             <Link>Send</Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>

//                         <div className='flex flex-col gap-10 w-96 '>
//                             <div className='flex flex-col gap-4'>
//                                 <div className='font-bold text-2xl'>
//                                     Call us
//                                 </div>
//                                 <div>
//                                     <div className='text-gray-500 text-lg'>
//                                         +1-940-394-2948
//                                         <br />
//                                         +1-389-385-3807
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className='flex flex-col gap-4'>
//                                 <div className='font-bold text-2xl'>
//                                     Email us
//                                 </div>
//                                 <div>
//                                     <div className='text-gray-500 text-lg'>
//                                         support@brainwave.io
//                                         <br />
//                                         contact@brainwave.io
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className='flex flex-col gap-4'>
//                                 <div className='font-bold text-2xl'>
//                                     Visit us
//                                 </div>
//                                 <div>
//                                     <div className='text-gray-500 text-lg'>
//                                         34 Madison Street
//                                         <br />
//                                         NY, USA 10005
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FooterAboutUs } from '../About_Us/FooterAboutUs';

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., send data to an API)
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className='w-full flex justify-center items-center bg-[#F4F7FA] p-20'>
            <div>
                <div className='text-center'>
                    <div className='font-bold text-6xl'>Contact us</div>
                    <div className='text-gray-500 w-full mt-10 text-lg'>
                        With lots of unique blocks,
                        <br/> you can easily build a page without coding.<br/>
                    </div>
                </div>
                <div className='w-full flex gap-20 justify-center flex-wrap items-center'>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='m-10 flex flex-col gap-6 bg-white p-8 rounded-lg'>
                                <div className='flex flex-col gap-4'>
                                    <label className='text-2xl font-bold' htmlFor='name'>First & Last Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder='i.e. John Doe'
                                        className='w-96 h-16 border rounded-lg text-xl pl-6'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='flex flex-col gap-4 w-60'>
                                    <label className='text-2xl font-bold' htmlFor='email'>Email</label>
                                    <input
                                        type='email'
                                        name="email"
                                        id="email"
                                        placeholder='i.e. john@mail.com'
                                        className='w-96 h-16 border rounded-lg text-xl pl-6'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <label className='text-2xl font-bold' htmlFor='subject'>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder='i.e. I need help'
                                        className='w-96 h-16 border rounded-lg text-xl pl-6'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='flex flex-col gap-4'>
                                    <label className='text-2xl font-bold' htmlFor='message'>Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder='Type your message'
                                        className='w-96 h-32 border rounded-lg text-xl pl-6'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className='flex justify-center'>
                                    <button type='submit' className='w-96 h-16 bg-[#473BF0] flex justify-center items-center rounded-lg text-white text-xl font-bold'>
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='flex flex-col gap-10 w-96'>
                        <div className='flex flex-col gap-4'>
                            <div className='font-bold text-2xl'>Call us</div>
                            <div className='text-gray-500 text-lg'>
                                +1-940-394-2948
                                <br />
                                +1-389-385-3807
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='font-bold text-2xl'>Email us</div>
                            <div className='text-gray-500 text-lg'>
                                support@brainwave.io
                                <br />
                                contact@brainwave.io
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='font-bold text-2xl'>Visit us</div>
                            <div className='text-gray-500 text-lg'>
                                34 Madison Street
                                <br />
                                NY, USA 10005
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
