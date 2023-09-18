import React from 'react'
import { Button } from './ui/button'
import { AiFillShopping } from "react-icons/ai"

const Hero = () => {
  return (
    <div className='mb-[100px] -ml-10 -mr-10'>
        <div className="hero min-h-[100vh] custom-img bg-fixed bg-center bg-no-repeat" >
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">
        Futuristic <span className='text-blue-800'>Outfits</span>
        </h1>
      <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">
     Upgrade your closet with smooth and trendy Clothes and First rate Shoes.
        </p>
        <Button className='outline outline-offset-2 outline-2 text-myWhite group hover:rounded-3xl duration-300
         hover:outline-blue-800
       
        '>
      <AiFillShopping className="mr-2 h-6 w-6 group-hover:text-blue-600 group-hover:animate-bounce" />Explore Now
    </Button>
    </div>
  </div>
</div>
</div>
  )
}

export default Hero