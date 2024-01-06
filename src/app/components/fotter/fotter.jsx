'use client'
import React from 'react'
import '../../styles/footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import Visa from '../../assets/visa.svg'
import PayPal from '../../assets/paypal.svg'
import MasterCard from '../../assets/mastercard.svg'
import Discover from '../../assets/discover.svg'
const date = new Date()
const year = date.getFullYear()
const Footer = () => {
  return (
    <footer className='footer-wrapper'>
     <div className="footer-container">
      
      <div className="footer-first">
        <h2>Contact info</h2>
         <div className="footer-first-list">
            <span>Adress:</span>
            <span>AddisAbaba, bole, ednamall</span>
         </div>
         <div className="footer-first-list">
            <span>Phone:</span>
            <span>+251928696488</span>
         </div>
         <div className="footer-first-list">
            <span>Fax:</span>
            <span>012-098-77-90</span>
         </div>

         <div className="footer-first-list">
            <span>Email:</span>
            <span>Addis03@gmail.com</span>
         </div>
         <div className="footer-first-icon">
         <FaFacebook style={{color: "#3F559F"}} className='icon'/>
         <FaSquareXTwitter  className='icon'/>
         <FaLinkedin style={{color: "#07A3DF"}} className='icon'/>
         <FaYoutube style={{color: "#C53028"}} className='icon' />

         </div>
        
        </div> 
        <div className="footer-second">
            <h2>information </h2>
            <span>Delivery information</span>
            <span>Privacy Policy</span>
            <span>Terms & Condtions</span>
            <span>Contact Us</span>
            </div> 
       
      
            <div className="footer-second">
            <h2>Acount </h2>
            <span>Order History</span>
            <span>Wish List</span>
            <span>News Letter</span>
            <span>Return</span>
            </div> 

            <div className="footer-third">
                <h2>News Letter</h2>
                <p>subscribe to our news letter now and stay up to
                    <br/>date with new collections and exclusive offers
                </p>
                <span className='email'>Enter e-mail here...</span>
                <div className="subscribe-container">
                 <span>Subscribe</span>
                </div>
            </div>
            </div>

         <div className="footer-bottom">
            <p>  <i class="ri-copyright-line"></i>Copyright {year} , Devloped by Fraol Getu. All rights resrved.</p>
           <div className="footer-bottom-right">
            <Image src={Visa} alt='visa' className='footer-img'/>
            <Image src={PayPal} alt='visa' className='footer-img'/>
            <Image src={MasterCard} alt='visa' className='footer-img'/>
            <Image src={Discover} alt='visa' className='footer-img'/>
           </div>
            
         </div>


     






    </footer>
  )
}

export default Footer
// @media (max-width: 592px) {
    
// }