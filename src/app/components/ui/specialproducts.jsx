import React from 'react'
import "../../styles/specialproducts.css"
import Product1 from '../../assets/s1.png'
import Product2 from '../../assets/s2.png'
import Product3 from '../../assets/s3.png'
import Product4 from '../../assets/s4.png'
import Image from 'next/image'

import { IoIosStar } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { RiShoppingBasketLine } from "react-icons/ri";

const SpecialProducts = () => {
  return (
    <section className="p-wrapper">
    <div className="p-container">
      <h2 className='section-title'>Special Products</h2>
      <div className="p-button">
        <button className='btn'>Featured</button>
        <button className='btn1'>Latest</button>
        <button className='btn1'>BestSeller</button>
      </div>
      <div className="product-section">
      <div className="product-detail-section">
      <div className="s-button">
            <button className='special-btn'>
          -10%
            </button>

          </div>
      <div className="image-container">
       
       
       <Image src={Product1} alt='product' className='p-image'/>
       </div>
       <div className="product-detail-section-2">

       
       <div className="rating">
       <IoIosStar className='rate-icon'/>
       <IoIosStar className='rate-icon'/>
       <IoIosStar className='rate-icon'/>
       <IoIosStar className='rate-icon'/>
       <CiStar className='rate-icon' />
     
       </div>
       <h6>
        Brandy Coffe
       </h6>
       <div className="product-detail-section-bottom">
        <div className="icon-container">
        <RiShoppingBasketLine className='basket' />
      </div>
        <p>$110.00</p>
       </div>
       </div>
       


      </div>

      

      <div className="product-detail-section">
      <div className="s-button">
            <button className='special-btn'>
          -20%
        </button>

          </div>
      <div className="image-container">
      
       <Image src={Product3} alt='product' className='p-image'/>
       </div>
       <div className="product-detail-section-2">

       
       <div className="rating">
       <IoIosStar className='rate-icon'/>
       <IoIosStar className='rate-icon'/>
       <IoIosStar className='rate-icon'/>
       <IoIosStar className='rate-icon'/>
       <IoIosStar className='rate-icon'/>
       </div>
       <h6>
        Correcto Coffe
       </h6>
       <div className="product-detail-section-bottom">
        <div className="icon-container">
        <RiShoppingBasketLine className='basket' />
      </div>
        <p>$482.00</p>
       </div>
       </div>
       


      </div>

      <div className="product-detail-section">
      <div className="s-button">
            <button className='special-btn'>
          -13%
            </button>
            </div>
       <div className="image-container">
       

          
       <Image src={Product2} alt='product' className='p-image'/>
       </div>
       
       <div className="product-detail-section-2">

       
       <div className="rating">
       
       <CiStar className='rate-icon' />
       <CiStar className='rate-icon' />
       <CiStar className='rate-icon' />
       <CiStar className='rate-icon' />
       <CiStar className='rate-icon' />
       </div>
       <h6>
        English Coffe
       </h6>
       <div className="product-detail-section-bottom">
        <div className="icon-container">
        <RiShoppingBasketLine className='basket' />
      </div>
        <p>$2000.00</p>
       </div>
       </div>
       


      </div>
      
      
      
      <div className="product-detail-section">
      <div className="s-button">
            <button className='special-btn'>
          -15%
            </button>
            </div>
      <div className="image-container">
      <Image src={Product4} alt='product' className='p-image'/>
          </div>
     
      
       <div className="product-detail-section-2">

       
       <div className="rating">
       <IoIosStar className='rate-icon'/>
       <IoIosStar className='rate-icon'/>
       <IoIosStar className='rate-icon'/>
       <CiStar className='rate-icon' />
       <CiStar className='rate-icon' />
     
       </div>
       <h6>
        Scotish Coffe
       </h6>
       <div className="product-detail-section-bottom">
        <div className="icon-container">
        <RiShoppingBasketLine className='basket' />
      </div>
        <p>$123.00</p>
       </div>
       </div>
       


      </div>

      



      </div>


    </div>


    </section>
  )
}

export default SpecialProducts