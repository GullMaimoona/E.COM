import React from 'react'
import { Button } from './ui/button'
import{FaShoppingCart, FaHeart} from "react-icons/fa"
import Image from '../../node_modules/next/image'
import Link from '../../node_modules/next/link'

const BestSellingCard = ({
    src, 
    alt, 
    title,
    description, 
    price,
    category,
    slug,
    discount,
    }:
    {
    src:string
    alt:string
    title:string
    description:string 
    price:number
    category:string
    slug:string
    discount:number
    }) => {
  return (
    <div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
   <Link  href={`/${category}/${slug}`}>
   {/* image div */}
    <div className='block h-[23rem] rounded overflow-hidden  '>
      <Image src={src} alt="kuch bhi" width={400} height={400}  />
    </div>
  {/*typography div*/}
  <div className="mt-4">
   {title && (
     <h2 className='scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0 text-myBlackHead line-clamp-1'>
     {title}
     </h2>
   )}
   {description && ( 
     <p className='mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackPara line-clamp-1'>
    {description}
    </p>
    )}
   
   {price && (
    <div className='flex gap-4 '>
     <p className={`mt-2 scroll-m-20 text-base font-semibold tracking-tight
      text-myBlackHead line-clamp-1 ${
        discount > 0 &&
         "line-through decoration-2 decoration-blue-600"
         } `}
         >
     ${price}
     </p>
     {/**discount value */}
     {discount >0 && (
      <p className='mt-2 scroll-m-20 text-base font-semibold tracking-tight
       text-myBlackHead line-clamp-1 '>
      ${price - ((price*discount)/100)}
      </p>
      )}
      </div>
   )

   }
   </div>
   </Link>
   {/*button div*/}
   <div>
   
   
    {discount>0 && (

      <div className='scroll-m-20 text-lg text-myWhite bg-blue-900 absolute top-2 left-1 p-1 rounded-bl-xl myDiscount text-center uppercase rounded-tl-xl w-[87px] font-semibold tracking-tight'>{`${discount}% off`} </div>
    )}

   
    
   </div>
   </div>
  )
}

export default BestSellingCard