import React from 'react'
import { ProductInfo } from './ProductInfo'
import { ProductDesciption } from './ProductDesciption'
import { RelatedProducts } from './RelatedProducts'


export const ProductsDetails = () => {

//   const relatedProduct = [
//     {
//       firstPrice: '$350',
//       newPrice: '$120',
//       productName:'Men Shoe',
//       productImg: productImg1
//     },
//     {
//       firstPrice: '$190',
//       newPrice: '$170',
//       productName:'Apple Airpod 2',
//       productImg: productImg2
//     },
//     {
//       firstPrice: '$890',
//       newPrice: '$640',
//       productName:'Wooden Speaker',
//       productImg: productImg3
//     },
//     {
//       firstPrice: '$890',
//       newPrice: '$640',
//       productName:'Apple Airpod',
//       productImg: productImg4
//     },
//   ]

  return (
    <div className='w-full flex flex-col justify-center items-center p-20'>
            <ProductInfo/>
            <ProductDesciption/>
            <RelatedProducts/>
    </div>
  )
}