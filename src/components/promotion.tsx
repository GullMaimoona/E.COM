import React from 'react'

const Promotion = () => {
  return (
    <div className='mb-[100px] mt-[100px]  -ml-14 -mr-14'>
        {/*heading*/}
       <div className="text-center mb-10">
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl text-myBlackHead">
        Our Promotions
      </h1>
     
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-blue-800 inline-flex" />
      </div>
    </div>
    {/*promotion starts here*/}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-14 ml-12 mr-12'>
    {/*1st child */}
    <div className="hero h-[25rem] promo-1 rounded-xl  " >
  <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">
        Get upto<span className='text-blue-900'> 60% </span>off
        </h1>
      <p className="mt-2 scroll-m-20 text-base font-medium text-myWhite tracking-tight">
      Take advantage of the Flash Sale to save up to 60% off on the Season Variant.
        </p>
     
    </div>
  </div>
</div>
    {/*2nd child*/}
    <div className="hero h-[25rem] promo-2 rounded-xl " >
  <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">
        Get upto<span className='text-blue-900'> 30% </span>off
        </h1>
      <p className="mt-2 scroll-m-20 text-base font-medium text-myWhite tracking-tight">
      Take advantage of the Flash Sale to save up to 30% off on the New Jewellary Arrival.
        </p>
     
    </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default Promotion