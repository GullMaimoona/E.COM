"use client";
import SlugComponent from '@/components/slugComponent'
import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import React, { useState } from "react";

import { FaShoppingCart, FaHeart, FaMinus, FaPlus } from "react-icons/fa"
import { addToCart } from '@/app/store/features/cart';
import AddToCartToast from '@/components/addToCartToast';

const SlugPage = ({ params }: { params: { slug: string } }) => {
    const product = useAppSelector((state) => state.products)
    const slug = product.filter((val) => val.slug === params.slug)[0]; // Changed to [0] to get the first matching product
    const [cartItem, setCartItem] = useState({
        id: slug?.id || "",
        title: slug?.title || "",
        image: slug?.image || "",
        slug: slug?.slug || "",
        price: slug?.price || 0,
        discount: slug?.discount || 0,
        category: slug?.category || "",
        size: slug?.size[0] || "", 
        qty: 1, // Initial quantity
        color: slug?.color[0] || "",
    });

    const dispatch = useAppDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(cartItem));
    };

    return (
        <div>
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    {/*image*/}
                    <SlugComponent image={slug?.image} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        {/*category*/}
                        <h2 className="scroll-m-20 text-lg uppercase font-semibold text-gray-500 tracking-widest">
                            {slug?.category}
                        </h2>

                        {/*headings*/}
                        <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead mb-1">
                            {slug?.title}
                        </h1>
                        {/*ratings*/}
                        <div className="rating mt-2 gap-1">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" checked />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" checked />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" checked />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" checked />
                        </div>

                        {/*description*/}
                        <p className="mt-2 leading-relaxed scroll-m-20 text-base font-normal text-myBlackPara">
                            {slug?.description}
                        </p>
                        <div className="flex mt-6 items-center mb-5">
                            <div className="flex">
                                {/*colors*/}
                                <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
                                    Color
                                </span>
                                {slug?.color.map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCartItem({ ...cartItem, color: item })}
                                        className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                                        style={{ backgroundColor: item }}
                                    />
                                ))}
                            </div>
                            {/*size*/}
                            <div className="flex ml-6 items-center">
                                <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
                                    Size
                                </span>
                                <div className="relative">
                                    <select
                                        onChange={(e) => setCartItem({ ...cartItem, size: e.target.value })}
                                        className="select select-primary w-full max-w-xs"
                                    >
                                        <option disabled>Select Size</option>
                                        {slug?.size.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, i: React.Key | null | undefined) => (
                                            <option key={i}>{item}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/*quantity*/}
                        <div className='flex items-center'>
                            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead">
                                Quantity
                            </span>
                            <Button onClick={() => setCartItem({ ...cartItem, qty: cartItem.qty <= 1 ? 1 : cartItem.qty - 1 })} className='group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl'>
                                <FaMinus className="mr-2 h-4 w-4 group-hover:text-blue-800 duration-300" />
                                Less
                            </Button>
                            <div className='mr-2 ml-2 scroll-m-20 text-xl font-semibold tracking-tight'>
                                {cartItem.qty}
                            </div>
                            <Button onClick={() => setCartItem({ ...cartItem, qty: cartItem.qty + 1 })} className='group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl'>
                                <FaPlus className="mr-2 h-4 w-4 group-hover:text-blue-800 duration-300" />
                                Add
                            </Button>
                        </div>

                        <div className='divider'></div>
                        <div className="flex items-center justify-between">
                            {/*price*/}
                            <span className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead ${cartItem.discount > 0 && "line-through decoration-2 decoration-blue-600"}`}>
                                ${cartItem.price * cartItem.qty}
                            </span>

                            {/*discounted value*/}
                            {cartItem.discount > 0 && (
                                <span className='scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead'>
                                    ${(cartItem.price - (cartItem.price * cartItem.discount) / 100) * cartItem.qty}
                                </span>
                            )}

                            {/**add to cart */}
                            <div>
                                
                                <AddToCartToast cartItem={cartItem} />
                            </div>
                        </div>
                        {/*buy now*/}
                        <Button className='mt-3 w-full group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl'>
                            <FaHeart className="mr-2 h-4 w-4 group-hover:text-blue-800 duration-300" />
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlugPage;
