import React from 'react'
import { cardRelatedProduct } from '../../AppData'

export const RelatedProducts = () => {
    console.log(cardRelatedProduct)
    return (
        <div className='w-full bg-[#F7F9FB] flex justify-center items-center py-20'>

            <div className='w-full flex flex-col justify-center items-center gap-14'>
                <div className='font-bold text-3xl'>
                    Related Products
                </div>

                <div className='w-full flex justify-around flex-wrap'>

                    {
                        cardRelatedProduct.map((item, index) => {
                            return (
                                <div className='flex flex-col justify-center items-center gap-3' key={index}>
                                    <div>
                                        <img src={item.productImg} className='rounded-lg' />
                                    </div>
                                    <div className='text-lg font-bold'>
                                        {item.firstPrice} <span className='text-gray-500 font-normal'>{item.newPrice}</span>
                                    </div>
                                    <div className='text-xl font-bold'>
                                        {item.productName}
                                    </div>
                                    <div className='text-[#FFAC4D]'>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-stroke"></i>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
