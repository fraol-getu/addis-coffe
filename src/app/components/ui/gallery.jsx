import React from 'react'
import "../../styles/gallery.css"
import Image from 'next/image'
import Gallery1 from '../../assets/gallery1.jpg'
import Gallery2 from '../../assets/gallery2.jpg'
import Gallery3 from '../../assets/gallery3.jpg'
import Gallery4 from '../../assets/gallery4.jpg'
import Gallery5 from '../../assets/gallery5.jpg'
const Gallery = () => {
  return (
    <section className="g-wrapper">
     <div className="g-container">
      <div className="g-side">
       <Image src={Gallery1} alt='gallery' className='left-image' />
       <Image src={Gallery2} alt='gallery' className='left-image' /> 
        </div>
        
        <Image src={Gallery3} alt='gallery' className='middle-image' />
        
        <div className="g-side">
       <Image src={Gallery4} alt='gallery' className='left-image' />
       <Image src={Gallery5} alt='gallery' className='left-image' /> 
        </div>



     </div>
      

    </section>
  )
}

export default Gallery