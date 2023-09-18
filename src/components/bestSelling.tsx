"use client";
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import{FaShoppingCart, FaHeart} from "react-icons/fa"
import BestSellingCard from './bestSellingCard'
import { useAppSelector } from '@/app/store/hooks'

const BestSelling = () => {
  const product = useAppSelector((state)=>state.products)
  const bestSell = product.slice(0,3)
 
  return (
    <div className='mb-[100px] mt-[100px]'>
   {/*heading*/}
   <div className="text-center mb-10">
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl text-myBlackHead">
        Best Selling Products
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-blue-800 inline-flex" />
      </div>
    </div>
   {/*best selling products here*/}
   <div className='flex flex-wrap justify-center gap-5'>
        {
          bestSell.map((items: any,i)=>(
            <BestSellingCard
            key={i}
            src={items.image[0]}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug}
            discount={items.discount}

            />
          ))
        }
   </div>
  

   </div>
  )
}

export default BestSelling