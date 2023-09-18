"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BestSellingCard from './bestSellingCard';

const FeaturedProducts = () => {
    //my data
    const bestSell = [
   
        {
          src:"/tops/tp16.webp",
          alt:"Black tshirt",
          title:"Dyed Grip Top",
          description:"Dyed style top,Tie knot enclosed V-shaped neckline",
          price: 250,
          category:"tops",
          slug:"dyed-grip-top",
          discount:"78",
        },
        {
          src:"/pants/pt5.webp",
          alt:"Black Pumpees",
          title:"Dyed Velvet Trousers",
          description:"Trousers with elasticized waistband, Two side pockets",
          price: 500,
          category:"pants",
          slug:"dyed-velvet-trousers",
        },
        {
          src:"/accessories/purse3.webp",
          alt:"Black Pumpees",
          title:"Three Tone Clutch",
          description:"THeart shape top part with velvet finishing",
          price: 500,
          category:"accessories",
          slug:"three-tone-clutch",
        },
        {
            src:"/accessories/er4.webp",
            alt:"Black Pumpees",
            title:"Heart Pompom Drop Earrings",
            description:"THeart shape top part with velvet finishing",
            price: 500,
            category:"accessories",
            slug:"heart-pompom-drop-earrings",
          },
      
          {
            src:"/shoes/sh5.webp",
            alt:"White tshirt",
            title:"Kitten Heels",
            description:"Heels in kitten style, Small heels, Comfy sole",
            price: 150,
            category:"shoes",
            slug:"kitten-heels",
          },
      ]
    //carousal settting
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
              
            }
          }
        ]
      };
      return (
    <div>
         {/*heading*/}
   <div className="text-center mb-10">
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl text-myBlackHead">
        Featured Products
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-blue-800 inline-flex" />
      </div>
    </div>
    {/*carousaal */}
    <Slider {...settings}>
    {
          bestSell.map((items:any,i)=>(
            <BestSellingCard
            key={i}
            src={items.src}
            alt={items.alt}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug}
            discount={items.discount}
            />
          ))
        }
        </Slider>
    </div>
  )
}

export default FeaturedProducts