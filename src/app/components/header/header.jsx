'use client'

import React, { useState } from 'react'
import '../../styles/header.css'
import { FiHeadphones } from "react-icons/fi";
import Image from 'next/image';
import CoffeBean from '../../assets/coffee-beans.png'
import { LuUser2 } from "react-icons/lu";
import { RiShoppingBasketLine } from "react-icons/ri";
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Notfound from '@/app/notfound/Notfound';




const Header = () => {

  const [open, setOpen] = useState(false)
 
  return (
    <header>
     <div className="header-top">
    <h6>Welcome to our online shop</h6>
    <div className="header-top-right">
    <div className="header-top-right-left">
    <h4>Currency</h4>
    <select className='option'>
    <option value="currency">Etb</option>
    <option  value="currency">Usd</option>   
    </select>
    </div>

    <div className="header-top-right-right">
    <h4>Languge</h4>
    <select className='option'>
    <option value="Languge">Eng</option>
    <option  value="Languge">Amh</option>   
    </select>
    </div>
    </div>
     </div>

     <div className="header-middle">
      
      <div className="header-middle-left">
      <FiHeadphones className='header-middle-icon'/>
        <div className="header-middle-left-right">
          <p className='header-middle-left-text'>customer-support</p>
           <p className='header-middle-left-text'>2519-28-69-64-88</p>  
        </div>
        </div>
        <div className="header-middle-middle">
          <Image src={CoffeBean} alt='coffebean' className='coffe-image' width={50} height={20} />
          <h1>BARISTAS</h1>
        </div>
        <div className="header-middle-right">
       <span className='user'> <LuUser2 />
</span>
  <div className='header-middle-right-right'>
   <span className='basket'><RiShoppingBasketLine /></span>
    <div className="header-middle-right-inner">
        <p>Shopping Cart</p>
        <p>(0 items)</p>
    </div>


  </div>




        </div>





     </div>

     <div className="header-bottom">
      
      <div className="header-bottom-left">
       <ul className='menu'>
        <li className={open ? "nav-item-mobile" : "nav-item"}>
     <Link className='items' href='/'>Home</Link>
     <Link className='items' href='/*'>About</Link>
     <Link className='items' href='/*'>Order</Link>
     <Link className='items' href='/*'>Blog</Link> 
     <Link className='items' href='/*'>Contact</Link> 
     <Link href='/Notfound'></Link>
        </li>

       </ul>

       
       
      
      </div>
      <button className='mobile-menu' onClick={() => {setOpen(!open)}}>
       
       {open ?(<IoClose />) : (<HiMenu />) }
       </button>
      <div className="header-bottom-right">
        
            <input className='input' type="text" placeholder='search'/>
            <FaSearch className='search' />
             

        
      </div>

      
      


     </div>

     







    </header>
  )
}

export default Header