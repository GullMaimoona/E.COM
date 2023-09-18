import React from 'react'
import Image from '../../node_modules/next/image'
import Link from '../../node_modules/next/link'

const Categories = () => {
  return (
    <div className='mb-[100px] mt-[100px]  -ml-12 -mr-12 '>
      {/*heading*/}
       <div className="text-center mb-10">
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl text-myBlackHead">
        Our Categories
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-blue-800 inline-flex" />
      </div>
    </div>
       {/*categories start from here*/}
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-10 mr-10 gap-4'>
       {/*category 1*/}
       <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative '>
        <Link href={'tops'}>
        <Image src='/PT.webp' alt='tops' width={350} height={350}
        className="rounded-xl duration-500 group-hover:scale-125"
        />
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
          <h1 className='uppercase'>TOPS</h1>
        </div>
        <div className='block lg:hidden absolute duration-500 z-[100] bottom-10 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
          <h1 className='uppercase'>TOPS</h1>
        </div>
        </Link>
       </div>

         {/*category 2*/}
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={'/pants'}>
        <Image src='/TOPS.WEBP' alt='tops' width={350} height={350}
        className="rounded-xl duration-500 group-hover:scale-125"
        />
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
          <h1 className='uppercase'>PANTS</h1>
        </div>
        <div className='block lg:hidden absolute duration-500 z-[100] bottom-10 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
          <h1 className='uppercase'>PANTS</h1>
        </div>
        </Link>
       </div>

         {/*category 3*/}
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={'accessories'}>
        <Image src='/gla.webp' alt='tops' width={350} height={350}
        className="rounded-xl duration-500 group-hover:scale-125"
        />
        <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
          <h1 className='uppercase'>ACCESSORIES</h1>
        </div>
        <div className='block lg:hidden absolute duration-500 z-[100] bottom-10 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
          <h1 className='uppercase'>ACCESSORIES</h1>
        </div>
        </Link>
       </div>

         {/*category 4*/}
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={'shoes'}>
        <Image src='/ool.webp' alt='tops' width={350} height={350}
        className="rounded-xl duration-500 group-hover:scale-125"
        />
        <div className='hidden lg:block  absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
          <h1 className='uppercase'>SHOES</h1>
        </div>
        <div className='block lg:hidden absolute duration-500 z-[100] bottom-10 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full'>
          <h1 className='uppercase'>SHOES</h1>
        </div>
        </Link>
       </div>

       </div>
    </div>
  )
}

export default Categories