import React from 'react'
import '../../styles/service.css'
import { SlPlane } from "react-icons/sl";
import { TbBriefcase2 } from "react-icons/tb";
import { FaGift } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";


const Service = () => {
  return (
    <section className='service-wrapper'>
        <div className="service-container">
         <div className="service-section">
         <SlPlane className='service-icon' />
         <div className="service-text">
            <h6>Free shoping worldwide</h6>
            <p>on order over $150</p>
         </div>

         </div>

         <div className="service-section">
         <TbBriefcase2 className='service-icon' />
         <div className="service-text">
            <h6>Cash On Delivery</h6>
            <p>100% money back guarntee</p>
         </div>

         </div>
         <div className="service-section">
         <FaGift className='service-icon' />

         <div className="service-text">
            <h6>Special Gift Card</h6>
            <p>offer special gifts with bonus</p>
         </div>

         </div>
        
         <div className="service-section">
         <CiHeadphones className='service-icon' />

         <div className="service-text">
            <h6>24/7 Customer Service</h6>
            <p>call us 251-28-69-64-88</p>
         </div>

         </div>



        </div>
    
       


    </section>

  )
}

export default Service