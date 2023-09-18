import React from 'react'
import Image from '../../node_modules/next/image'

const Services = () => {
  return (
    <div>
        <section className="text-gray-600 body-font mb-[100px] mt-[100px] ">
  <div className="container px-5 mx-auto">
    <div className="text-center mb-10">
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl text-myBlackHead">
        Our Services
      </h1>
     
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-blue-800 inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
     {/*delivery */}
      <div className="group p-4 lg:w-1/3 flex flex-col text-center items-center mx-auto">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full
         mb-5 flex-shrink-0">
       <Image src='/cv.webp'
       alt='Delivery' width={120} height={120}
       className="w-20 h-20" />
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3 group-hover:text-blue-800 duration-300">
            Free Delivery
          </h2>
          <p className="text-myBlackPara line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight transition-colors group-hover:text-myBlackPara/80">
          Free Delivery on Order Above $1000
          </p>
        
        </div>
      </div>

        {/*24/7 services */}
        <div className="group p-4 lg:w-1/3 flex flex-col text-center items-center mx-auto">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full
         mb-5 flex-shrink-0">
       <Image src='/jh.webp'
       alt='Delivery' width={200} height={200}
       className="w-20 h-20" />
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3 group-hover:text-blue-800 duration-300">
            24/7 Customer Service
          </h2>
          <p className="text-myBlackPara line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight transition-colors group-hover:text-myBlackPara/80">
          For Queries and Questions Feel Free to Contact
          </p>
        
        </div>
      </div>

  {/*money back */}
  <div className="group p-4 lg:w-1/3 flex flex-col text-center items-center mx-auto">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full
         mb-5 flex-shrink-0">
       <Image src='/m.webp'
       alt='Delivery' width={100} height={100}
       className="w-20 h-20" />
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3 group-hover:text-blue-800 duration-300">
            Money Back Guarantee
          </h2>
          <p className="text-myBlackPara line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight transition-colors group-hover:text-myBlackPara/80">
          Get Money Back Guarantee on Damage Products
          </p>
        
        </div>
      </div>
     
      
    </div>
   
  </div>
</section>

    </div>
  )
}

export default Services