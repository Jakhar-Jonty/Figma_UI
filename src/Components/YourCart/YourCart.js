import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cart1 from './Cartimg/cart1.png'
import cart2 from './Cartimg/cart2.png'

export const YourCart = () => {

    let [ budcount ,setbudcount] = useState(2);
    let [ casecount,setCasecount] = useState(1)



    return (
        <div className='w-full bg-[#F4F7FA] flex items-center justify-center py-20'>
            <div className='lg:w-[1100px] flex flex-col justify-center items-center gap-6 sm:w-full'>
                <div className='flex flex-col justify-center items-center gap-6 py-6'>
                    <div className='text-5xl font-bold'>
                        Your Cart
                    </div>
                    <div className='text-gray-500 text-lg'>
                        2 Items on your cart
                    </div>
                </div>

                <div className='w-full flex font-bold text-lg'>
                    <span className=' w-2/5'>PRODUCT</span>
                    <span className='w-1/5'>PRICE</span>
                    <span className='w-3/12'>QUANTITY</span>
                    <span>TOTAL</span>
                </div>

                <div className='w-full flex flex-col gap-4'>

                    <div className='flex justify-between items-center bg-white p-2'>
                        <div className='font-bold text-lg flex lg:flex-row sm:flex-col sm:items-start items-center gap-4 w-1/3 '>
                            <img src={cart1} alt='img' />
                            Amazon Echo Super Extra Bass <br/>Home System
                        </div>
                        <div className='font-bold text-lg w-1/12'>
                            $70
                        </div>
                        <div className='flex gap-6 w-3/12'>
                            <Link className='bg-gray-300 px-5 py-3 rounded-full font-bold text-2xl flex justify-center items-center' onClick={()=>{if(budcount>1){setbudcount(--budcount)}}}> - </Link>
                            <div className='border w-20 flex justify-center items-center font-bold text-2xl'> {budcount} </div>
                            <Link className='bg-gray-300 rounded-full px-5 py-3 font-bold text-2xl flex justify-center items-center' onClick={()=>{setbudcount(++budcount)}}> + </Link>
                        </div>

                        <div className='font-bold text-lg w-1/12'>
                            ${budcount *70}
                        </div>
                        <Link>
                            <i class="fa-solid fa-xmark"></i>
                        </Link>
                    </div>


                    <div className='flex justify-between items-center  bg-white p-2'>
                        <div className='font-bold text-lg items-center flex lg:flex-row sm:flex-col sm:items-start gap-4 w-1/3'>
                            <img src={cart2} alt='img' />
                            Apple AirPods with Wired <br/>Charging Case
                        </div>
                        <div className='font-bold text-lg w-1/12'>
                            $150
                        </div>
                        <div className='flex gap-6 w-3/12'>
                            <Link className='bg-gray-300 px-5 py-3 rounded-full font-bold text-2xl flex justify-center items-center' onClick={()=>{if(casecount>1){setCasecount(--casecount)}}}> - </Link>
                            <div className='border w-20 flex justify-center items-center font-bold text-2xl'> {casecount} </div>
                            <Link className='bg-gray-300 rounded-full px-5 py-3 font-bold text-2xl flex justify-center items-center' onClick={()=>{setCasecount(++casecount)}}> + </Link>
                        </div>

                        <div className='font-bold text-lg w-1/12'>
                            ${150 *casecount}
                        </div>
                        <Link>
                            <i class="fa-solid fa-xmark"></i>
                        </Link>
                    </div>

                </div>


                <div className='w-full flex justify-between py-20'>
                <div className='flex justify-center items-center px-8 rounded-lg bg-white text-[#473BF0] font-bold text-xl h-14  hover:bg-[#070341]  hover:text-white'>
                        <Link to='/products'>Continue Shopping </Link>
                    </div>

                    <div className='flex flex-col gap-8 p-6 bg-white rounded-lg w-96'>

                        <div className='font-bold text-sm'>
                            ORDER DETAILS
                        </div>
                        <div className='flex justify-between'>
                            <div className='text-gray-500 text-lg'>{casecount+budcount} items</div>
                            <div className='font-bold text-lg'>${(casecount*150)+(budcount*70)}</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='text-gray-500 text-lg'>Delivery Fee</div>
                            <div className='font-bold text-lg text-[#2BD67B]'>FREE</div>
                        </div>

                        <div className='flex justify-between font-bold text-lg border-t border-dashed'>
                            <div className='t text-lg'>Total Price</div>
                            <div className='font-bold text-lg'>${(casecount*150)+(budcount*70)}</div>
                        </div>

                        <div className='flex justify-center items-center py-3 px-8 rounded-lg bg-[#473BF0] text-white font-bold text-xl hover:bg-[#070341]'>
                            <Link to='/checkout'>Proceeed to checkout</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
