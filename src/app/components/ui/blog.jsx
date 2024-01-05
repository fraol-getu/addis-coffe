import React from 'react'
import '../../styles/bolg.css'
import Image from 'next/image'
import Blog1 from '../../assets/b1.jpg'
import Blog2 from '../../assets/b4.jpg'
import Blog3 from '../../assets/b3.jpg'
const Blog = () => {
  return (
    <section className="b-wrapper">
    <div className="b-container">
      <h2 className="section-title"> Latest BLog</h2>
      <div className="b-section">
      <div className="b-detail">
        
        <Image src={Blog1} alt='blog' className='b-image'/>
        <h4>Jessica Andere</h4>
          <h6> 05 December 2023</h6>
         <p className='section-description'>Kaldi's Coffee seems to have several locations in Addis Ababa, each with varying reviews on platforms like Google and Tripadvisor. I recommend checking out those reviews to see what other customers have said about their experience, focusing on the specific branch you're interested in.</p>

         <button className='btn'>Read more</button>
        </div>
        <div className="b-detail">
        
        <Image src={Blog2} alt='blog' className='b-image'/>
         <h4>Jorge Bollon</h4>
          <h6> 05 December 2023</h6>
        <p className='section-description'>Kaldi's Coffee seems to have several locations in Addis Ababa, each with varying reviews on platforms like Google and Tripadvisor. I recommend checking out those reviews to see what other customers have said about their experience, focusing on the specific branch you're interested in.</p>
        <button className='btn'>Read more</button>
        </div>
        <div className="b-detail">
        
        <Image src={Blog3} alt='blog' className='b-image'/>
        <h4>Tom Naps</h4>
          <h6> 05 December 2023</h6>
        <p className='section-description'>Kaldi's Coffee seems to have several locations in Addis Ababa, each with varying reviews on platforms like Google and Tripadvisor. I recommend checking out those reviews to see what other customers have said about their experience, focusing on the specific branch you're interested in.</p>
        <button className='btn'>Read more</button>
      

      </div>
</div>
</div>
    
      



    </section>
  )
}

export default Blog