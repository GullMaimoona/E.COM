"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavigationMenuDemo } from './navlinks'
import { useAppSelector } from '@/app/store/hooks'
import Cart from '@/app/cart/page'


const Navbar = () => {
  const cart = useAppSelector((state)=>state.cart); 
  return (
    <div>
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden p-0 text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href={'/'}>Home</Link></li>
        <li>
          <summary>Women</summary>
          <ul className="p-2 text-black bg-white">
            <li><Link  href={'/tops'}>Tops</Link></li>
            <li><Link  href={'/pants'}>Pants</Link></li>
            <li><Link  href={'/accessories'}>Acessoriies/Jewellary</Link></li>
            <li><Link  href={'/shoes'}>Shoes</Link></li>
          </ul>
        </li>
        <li><Link href={'/aboutUs'}>About</Link></li>
        <li><Link href={'/contact'}>Contact</Link></li>
      </ul>
    </div>
    <Image src='/mo.webp' alt='logo' width={100} height={100} 
    className="hidden lg:block" />
  </div>
  <div className="navbar-center">
  <Image src='/mo.webp' alt='logo' width={100} height={100} 
    className="block lg:hidden" />
  <div className=' hidden lg:flex'>
    <NavigationMenuDemo />
  </div>
  </div>
  
  <div className="navbar-end">
    <Link href={"/cart"}>
      <label tabIndex={0} className="pr-4 cursor-pointer group
      ">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7   group-hover:text-blue-800 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          {cart.length>0 && 
           <span className="badge badge-sm indicator-item text-myWhite bg-blue-800 group-hover:animate-pulse">
           {cart.length}
           </span> }
         
        </div>
      </label>
      </Link>
     
    </div>
  </div>
</div>

  )
}

export default Navbar