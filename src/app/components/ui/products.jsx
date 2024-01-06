import React from 'react'
import "../../styles/products.css"
import Product1 from '../../assets/products1.png'
import Product2 from '../../assets/products2.png'
import Product3 from '../../assets/products3.png'
import Product4 from '../../assets/products4.png'
import Product6 from '../../assets/produvct7.png'
import Image from 'next/image'

import { IoIosStar } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { RiShoppingBasketLine } from "react-icons/ri";

const Products = () => {
  return (
    <section className="p-wrapper">
    <div className="p-container">
      <h2 className='section-title'>Top Products</h2>
      <div className="p-button">
        <button className='btn'>Featured</button>
        <button className='btn1'>Latest</button>
        <button className='btn1'>BestSeller</button>
      </div>
      <div className="product-section">
      <div className="product-detail-section1">
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
        Irish Coffe
       </h6>
       <div className="product-detail-section-bottom">
        <div className="icon-container">
        <RiShoppingBasketLine className='basket' />
      </div>
        <p>$98.00</p>
       </div>
       </div>
       


      </div>

      

      <div className="product-detail-section1">
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
        Austraian Coffe
       </h6>
       <div className="product-detail-section-bottom">
        <div className="icon-container">
        <RiShoppingBasketLine className='basket' />
      </div>
        <p>$122.00</p>
       </div>
       </div>
       


      </div>

      <div className="product-detail-section1">
       <div className="image-container">
       <Image src={Product6} alt='product' className='p-image'/>
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
        Caliypso Coffe
       </h6>
       <div className="product-detail-section-bottom">
        <div className="icon-container">
        <RiShoppingBasketLine className='basket' />
      </div>
        <p>$2000.00</p>
       </div>
       </div>
       


      </div>
      
      
      
      <div className="product-detail-section1">
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
        Witch's Coffe
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

export default Products