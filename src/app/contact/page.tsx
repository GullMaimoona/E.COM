import React from "react";
 import { Button } from "@/components/ui/button";
 import { AiOutlineMail} from "react-icons/ai"

export default function Contact() {
  return (
    <div className="-mt-14">
      <div
        className=" flex items-center max-w-7xl mx-auto leading-8 mb-10"
        id="contact"
      >
        <div className="text-gray-500 px-10 mt-32 mx-auto">
          <h1 className="scroll-m-20 text-xl font-semibold tracking-tight lg:text-6xl text-myBlackHead text-center ">Contact</h1>
          <p className="text-center text-black my-5 text-2xl font-medium">Reach out to <span className='text-blue-800'>US</span></p>
          <form action="https://formspree.io/f/xdordpne"  method="POST">
            <div>
              <input
                placeholder="Your name"
                type="text"
                required
                name="name"
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-blue-700 text-black outline-black/75  outline-double"
              />
            </div>
            <div className="my-5">
              <input
                required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-blue-700 text-black outline-double"
                placeholder="Your email"
                type="email"
                name="email"
              />
            </div>
            <div>
              <textarea
                rows={8}
                name="meraMessage"
                required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-blue-700 text-black  outline-double"
                placeholder="Your message here..."
              />
            </div>
            <Button className='outline outline-offset-2 outline-2 text-black group hover:rounded-3xl duration-300
         hover:outline-blue-800 ml-20 mt-2
       
        '>
      <AiOutlineMail className="mr-2 h-6 w-6 group-hover:text-blue-600 group-hover:animate-bounce" />Explore Now
    </Button>
          </form>
        </div>
      </div>
    </div>
  );
}