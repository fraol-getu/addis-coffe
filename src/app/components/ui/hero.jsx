"use client"



import React from 'react'
import "../../styles/hero.css"
import Slider from "react-slick"
const Hero = () => {
  const settings = {
    fade:true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
     slidesToScroll: 1,
     pauseOnHover: false,
     arrows: false,
   };
 
 
  return (

   <div className="hero-container1">
     <div className="hero-description">
    
    <div className='hero-top'> 
    <p>Delicious Coffe</p>
      <h1>Freshly Roasted<br/> Coffe</h1>
      </div>
      <div><button className='btn'>shop now</button> </div>
     </div>
     </div>


   

   
      
          
          

  )
}

export default Hero