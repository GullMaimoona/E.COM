"use client";
import React from 'react'
import CartCard from '@/components/cartCard'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '../store/hooks';

const CartPage = () => {
    const cartArray = useAppSelector((state)=>state.cart);
    const total = cartArray.reduce((total,array)=>
    {return(total+((array.price-(array.price*array.discount)/100))*array.qty)},0) 
  return (
    <div className=' grid lg:grid-cols-3 grid-cols-1'>
    {/*items */}
    <div className='col-span-2'>
      <CartCard 
      />
    </div>
    {/*summary */}
    <div className='bg-myBlackHead/5 p-5 rounded-xl'>
      {/*heading */}
      <h2 className='scroll-m-20 text-lg font-semibold tracking-tight uppercase text-myBlackHead'>
       order summary
      </h2>
      {/*divider */}
      <div className='divider mt-0 mb-1'></div>
      
      {/*pricing */}
      <div className='text-sm font-medium text-myBlackPara tracking-tight '>
        {/*product price */}
      <div className='items-center justify-between capitalize flex'> 
      <h2>sub total</h2>
      <h2>${total}</h2>
      </div>
      {/*delivery charges */}
      <div className='items-center justify-between capitalize flex'> 
      <h2>Delivery Charges</h2>
      <h2>TBD</h2>
      </div>
      {/*services charges */}
      <div className='items-center justify-between capitalize flex'> 
      <h2>Sales Tax</h2>
      <h2>TBD</h2>
      </div>
      </div>
          {/*divider */}
          <div className='divider mt-0 mb-1'></div>
            {/*estimate total */}
            <div className='items-center justify-between uppercase flex font-semibold text-sm tracking-tight text-myBlackHead'> 
      <h2>estimated total</h2>
      <h2>${total}</h2>
      </div>
           {/*divider */}
           <div className='divider mt-0 mb-1'></div>
           {/*checkout button */}
           <div className='flex items-center justify-center w-full'>
            <Button className='bg-myBlackHead hover:bg-transparent duration-300 text-myWhite 
             hover:text-myBlackHead scroll-m-20 
             text-xl font-semibold tracking-tight hover:shadow-md uppercase rounded-xl'>proceed to checkout</Button>
           </div>
                {/*divider */}
           <div className='divider mt-0 mb-1'></div>
                    {/**note */}
                    <p className=' text-sm font-semibold tracking-tight text-myBlackHead
                    w-[97%] text-center italic
                    '>Delivery Charges and the sales taxe will be calculated in the
                    Checkout Page 
                    </p>
    </div>
     </div>
  )
}

export default CartPage