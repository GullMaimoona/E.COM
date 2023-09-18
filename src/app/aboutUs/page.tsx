import React from 'react'
import Image from 'next/image'
const About= () => {
  return (
    <div className="container px-5 py-24 mx-auto w-full -mt-8 ">
    <div className='flex flex-col text-center w-full mb-12 justify-center '>
      <h2 className='scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl text-myBlackHead'>Our Store Is Happy To <span className='text-blue-800'>WELCOME</span> You</h2>
      <p className='lg:w-2/3 mx-auto leading-relaxed text-2xl mt-3 text-gray-800'>Welcome to our store. Learn more about our company here.</p>
      <div className='m-auto '>
      <Image src='/maimoona.webp'
       alt='Delivery' width={200} height={100}
       className="height={50} justify-center items-center rounded-full" />
     </div>
     <p className='lg:w-2/3 mx-auto leading-relaxed text-xl mt-2 text-gray-800'>
Fashion Gallery (Maypole Pvt. Limited) is a renowned fashion clothing brand that was founded in 2020 by Miss Maimoona Gull. Under the vision of creating attractive and comfortable outfits for women of every age and persona, Fashion Gallery is working hard to provide its customers with high-quality products at a very affordable price range. A hardworking team of highly qualified professionals, design and textile creatives, marketing strategists, and finest crafters work together to present you with the most appealing and trending outfits ever. Be it stitched or unstitched, western or eastern, formal or semi-formal, men, women or girls, fragrances or body mists, accessories, bags or footwear, Fashion Gallery proudly excels at every niche.</p>
    </div>
    </div>

   
  )
}

export default About