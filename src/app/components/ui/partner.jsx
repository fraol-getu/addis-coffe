import React from 'react'
import "../../styles/partner.css"
import P1 from "../../assets/p1.png"
import P2 from "../../assets/p2.png"
import P3 from "../../assets/p3.png"
import P4 from "../../assets/p4.png"
import P5 from "../../assets/p5.png"
import P6 from "../../assets/p6.png"
import Image from 'next/image'
const Partner = () => {
  return (
    <section className="partner-wrapper">
        <div className="partner-container">
          <Image src={P6} alt='partner' className='partner-image'/>
          <Image src={P2} alt='partner' className='partner-image'/>
          <Image src={P3} alt='partner' className='partner-image'/>
          <Image src={P4} alt='partner' className='partner-image'/>
          <Image src={P5} alt='partner' className='partner-image p5'/>
          <Image src={P1} alt='partner' className='partner-image p5'/>
        </div>
    </section>
  )
}

export default Partner