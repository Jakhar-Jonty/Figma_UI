import React from 'react'
import { Link } from 'react-router-dom'
import allcards from './CheckoutIMG/allcards.png'
// import visacard from './CheckoutIMG/visacard.png'
import paypal from './CheckoutIMG/paypal.png'
import air from './CheckoutIMG/airpodscheck.png'
export const Checkout = () => {
    return (
        <div className='w-full flex justify-center items-center bg-[#F4F7FA] p-20'>
            <div className='flex flex-col w-[1100px] justify-center items-center'>

                <div className='flex flex-col justify-center items-center gap-6 py-6'>
                    <div className='text-5xl font-bold'>
                        Checkout
                    </div>
                    <div className='text-gray-500 text-lg'>
                        2 Items on your cart
                    </div>
                </div>

                <div className='w-full flex justify-between  py-20'>

                    <div className='w-1/2 py-10 bg-white rounded-lg h-full'>
                        <form>
                            <div className='flex flex-col text-xl gap-6 p-8 rounded-lg justify-center'>
                                <div className=' font-bold text-2xl'>
                                    Billing Details
                                </div>
                                <div className='flex flex-col gap-4 w-full'>
                                    <label className=' font-bold'>First & Last Name</label>
                                    <input type="text" name="name" placeholder='i.e. John Doe' className=' h-16 border rounded-lg text-xl pl-6' />
                                </div>

                                <div className='flex flex-col  gap-4 w-full'>
                                    <label className='font-bold'>Email</label>
                                    <input type='email' name="mail" placeholder='i.e. john@mail.com' className=' h-16 border rounded-lg text-xl pl-6' />
                                </div>

                                <div className='flex flex-col  gap-4 w-full'>
                                    <label className='font-bold'>Country</label>
                                    <select className=' h-16 border rounded-lg text-xl pl-6'>
                                        <option >United States of America</option>
                                    </select>
                                </div>

                                <div className='flex w-full justify-between'>
                                    <div className='flex flex-col gap-4 w-2/5'>
                                        <label className=' font-bold'>City/State</label>
                                        <input type="text" placeholder='City' className='h-16 border rounded-lg text-xl pl-6' />
                                    </div>
                                    <div className='flex flex-col gap-4 w-2/5'>
                                        <label className=' font-bold'>Zip/Postal Code</label>
                                        <input type="text" placeholder='Zip Code' className='h-16 border rounded-lg text-xl pl-6' />
                                    </div>
                                </div>

                                <div className='font-bold text-2xl'>
                                    Payment Method
                                </div>

                                <div className=' border w-full h-16 flex items-center justify-between px-4 font-bold text-xl'>
                                    <div >
                                        <input type='Radio' select />
                                        <label className='ml-2'>Credit Cards</label>
                                    </div>
                                    <div>
                                        <img src={allcards} alt='img' />
                                    </div>
                                </div>

                                <div className='flex flex-col gap-4 w-full'>
                                    <label className=' font-bold'>Card Number</label>
                                    <input type="text" name="name" placeholder='11154 6556 6464 656' className=' h-16 border rounded-lg text-xl pl-6' />
                                </div>

                                <div className='flex w-full justify-between'>
                                    <div className='flex flex-col gap-4 w-2/5'>
                                        <label className=' font-bold'>Expire Date</label>
                                        <input type="text" placeholder='Month/Year' className='h-16 border rounded-lg text-xl pl-6' />
                                    </div>
                                    <div className='flex flex-col gap-4 w-2/5'>
                                        <label className=' font-bold'>Security Code</label>
                                        <input type="text" placeholder='PIN' className='h-16 border rounded-lg text-xl pl-6' />
                                    </div>
                                </div>

                                <div className=' border w-full h-16 flex items-center justify-between px-4 font-bold text-xl'>
                                    <div >
                                        <input type='Radio' select />
                                        <label className='ml-2'>paypal</label>
                                    </div>
                                    <div>
                                        <img src={paypal} alt='img' />
                                    </div>
                                </div>
                                <div className='text-lg'>
                                    By clicking the button you agree the <Link className='text-[#473BF0] ]'>Terms and Conditions</Link>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='w-full h-16 bg-[#473BF0] flex justify-center items-center rounded-lg text-white text-xl font-bold hover:bg-[#070341]'>
                                        <Link>Proceed to checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='w-2/5 flex flex-col gap-6 bg-white rounded-lg px-8 h-full py-10'>
                        <div>
                            ORDER DETAILS
                        </div>
                        <div className='flex justify-between text-gray-500'>
                            <div>
                                Total Items
                            </div>
                            <div>
                                02 items
                            </div>
                        </div>

                        <div className='flex justify-between items-center text-lg p-3 border rounded-lg'>
                            <div>
                                <img src={air} alt='img' />
                            </div>
                            <div>
                                <div>
                                    <div className='font-bold'>Apple Airpods Pro..</div>
                                    <div className='flex justify-between'>
                                        <div>
                                            2 Items
                                        </div>
                                        <div className='font-bold'>
                                            $280
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div>
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>

                        <div className='flex justify-between items-center text-lg p-3 border rounded-lg'>
                            <div>
                                <img src={air} alt='img' />
                            </div>
                            <div>
                                <div>
                                    <div className='font-bold'>Apple Airpods Pro..</div>
                                    <div className='flex justify-between'>
                                        <div>
                                            2 Items
                                        </div>
                                        <div className='font-bold'>
                                            $280
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div>
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='text-gray-500 text-xl'>Delivery Fee</div>
                            <div className='font-bold text-lg text-[#2BD67B]'>FREE</div>
                        </div>

                        <div className='flex justify-between font-bold text-xl'>
                            <div >Total Price </div>
                            <div >$560</div>
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
