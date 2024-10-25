// import React from 'react'
// import { Link } from 'react-router-dom'
// import product from './ProductIMG/Product.png'
// import sideimg1 from './ProductIMG/sideimg1.png'
// import sideimg2 from './ProductIMG/sideimg2.png'
// import sideimg3 from './ProductIMG/sideimg3.png'
// import sideimg4 from './ProductIMG/sideimg4.png'
// import { useState } from 'react'


// export const ProductInfo = () => {

//     let [quantity, setquantity] = useState(1);

//     const decrement = () => {
//         if (quantity > 0) {
//             setquantity(--quantity)
//         }
//     }

//     const increment = () => {
//         setquantity(++quantity)
//     }

//     return (
//         <div className='lg:w-[1100px] sm:w-full flex  sm:flex-col lg:flex-row py-20 gap-12'>
//             {/* 1st */}
//             <div className='flex gap-10'>
//                 <div >
//                     <div>
//                         <img src={sideimg1} alt='img' />
//                     </div>
//                     <div>
//                         <img src={sideimg2} alt='img' />
//                     </div>
//                     <div>
//                         <img src={sideimg3} alt='img' />
//                     </div>
//                     <div>
//                         <img src={sideimg4} alt='img' />
//                     </div>
//                 </div>
//                 {/* 2nd */}
//                     <div >
//                         <img src={product} alt='img' className='w-full'/>
//                     </div>
                
//             </div>
//             {/* 3rd */}

//             <div className='flex flex-col gap-6'>
//                 <div className='text-[#FFAC4D]'>
//                     <i class="fa fa-star"></i>
//                     <i class="fa fa-star"></i>
//                     <i class="fa fa-star"></i>
//                     <i class="fa fa-star"></i>
//                     <i class="fa fa-star-half-stroke"></i>
//                 </div>

//                 <div className='font-bold text-5xl'>
//                     Apple AirPods with Wired Charging Case
//                 </div>
//                 <div className='text-xl'>
//                     by <span className='text-[#473BF0]'>Apple</span>
//                 </div>

//                 <div className='text-3xl text-gray-500'>
//                     List Price: $90
//                 </div>
//                 <div className='text-4xl text-gray-500 font-bold' >
//                     Price:<span className='text-black'>$70</span>
//                 </div>
//                 <div className='pl-6'>
//                     <ul className=' list-disc text-xl'>
//                         <li>
//                             Active noise cancellation for immersive sound
//                         </li>
//                         <li>
//                             Transparency mode for hearing and connecting
//                         </li>
//                         <li>
//                             Three sizes of soft, tapered silicone tips
//                         </li>
//                         <li>
//                             Sweat and water resistant
//                         </li>

//                     </ul>
//                 </div>

//                 <div className='flex gap-6'>
//                     <div className='text-gray-500 text-3xl'>Quantity :</div>
//                     <Link className='bg-gray-300 px-5 py-3 rounded-full font-bold text-2xl flex justify-center items-center' onClick={decrement}> - </Link>
//                     <div className='border w-20 flex justify-center items-center font-bold text-2xl'> {quantity} </div>
//                     <Link className='bg-gray-300 rounded-full px-5 py-3 font-bold text-2xl flex justify-center items-center' onClick={increment}> + </Link>
//                 </div>

//                 <div className='flex gap-16'>
//                     <div className='bg-[#473BF0] flex justify-center items-center py-3 px-8 rounded-lg text-white font-bold text-xl hover:bg-[#070341]'>
//                         <Link to='/cart'> Buy now</Link>
//                     </div>

//                     <div className='flex justify-center items-center py-3 px-8 rounded-lg text-[#473BF0] font-bold text-xl  hover:text-white hover:bg-[#070341]'>
//                         <Link to='/cart' > Add to cart</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import product from './ProductIMG/Product.png';
import sideimg1 from './ProductIMG/sideimg1.png';
import sideimg2 from './ProductIMG/sideimg2.png';
import sideimg3 from './ProductIMG/sideimg3.png';
import sideimg4 from './ProductIMG/sideimg4.png';

export const ProductInfo = () => {
    const [quantity, setQuantity] = useState(1);

    const decrement = () => {
        setQuantity(prev => Math.max(prev - 1, 0)); // Prevent negative quantity
    };

    const increment = () => {
        setQuantity(prev => prev + 1);
    };

    return (
        <div className='lg:w-[1100px] sm:w-full flex sm:flex-col lg:flex-row  sm:py-20 gap-12'>
            {/* Image Section */}
            <div className='flex gap-10'>
                <div className='flex flex-col'>
                    {[sideimg1, sideimg2, sideimg3, sideimg4].map((img, index) => (
                        <div key={index}>
                            <img src={img} alt={`Product preview ${index + 1}`} className='mb-2' />
                        </div>
                    ))}
                </div>
                <div>
                    <img src={product} alt='Apple AirPods' className='w-full h-auto rounded-lg' />
                </div>
            </div>

            {/* Product Details Section */}
            <div className='flex flex-col gap-6'>
                <div className='text-[#FFAC4D]'>
                    {[...Array(4)].map((_, index) => (
                        <i key={index} className="fa fa-star"></i>
                    ))}
                    <i className="fa fa-star-half-stroke"></i>
                </div>

                <div className='font-bold text-5xl'>
                    Apple AirPods with Wired Charging Case
                </div>
                <div className='text-xl'>
                    by <span className='text-[#473BF0]'>Apple</span>
                </div>

                <div className='text-3xl text-gray-500'>
                    List Price: $90
                </div>
                <div className='text-4xl text-gray-500 font-bold'>
                    Price: <span className='text-black'>$70</span>
                </div>
                <div className='pl-6'>
                    <ul className='list-disc text-xl'>
                        <li>Active noise cancellation for immersive sound</li>
                        <li>Transparency mode for hearing and connecting</li>
                        <li>Three sizes of soft, tapered silicone tips</li>
                        <li>Sweat and water resistant</li>
                    </ul>
                </div>

                {/* Quantity Selector */}
                <div className='flex gap-6'>
                    <div className='text-gray-500 text-3xl'>Quantity :</div>
                    <button
                        className='bg-gray-300 px-2 py-1 sm:px-5 sm:py-3 rounded-full font-bold text-2xl'
                        onClick={decrement}
                        aria-label="Decrease quantity"
                    >
                        -
                    </button>
                    <div className='border w-10 sm:w-20 flex justify-center items-center font-bold text-2xl'>
                        {quantity}
                    </div>
                    <button
                        className='bg-gray-300 rounded-full px-2 py-1 sm:px-5 sm:py-3 font-bold text-2xl'
                        onClick={increment}
                        aria-label="Increase quantity"
                    >
                        +
                    </button>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-16'>
                    <Link
                        to='/cart'
                        className='bg-[#473BF0] flex text-center justify-center items-center py-2 px-3 sm:py-3 sm:px-8 rounded-lg text-white font-bold text-xl hover:bg-[#070341] transition'
                    >
                        Buy now
                    </Link>
                    <Link
                        to='/cart'
                        className='flex justify-center text-center items-center py-2 px-3 sm:py-3 sm:px-8 rounded-lg text-[#473BF0] font-bold text-xl hover:text-white hover:bg-[#070341] transition'
                    >
                        Add to cart
                    </Link>
                </div>
            </div>
        </div>
    );
};
