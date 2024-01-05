import React from 'react'
import '../../styles/topcatagories.css'
const TopCatgories = () => {
  return (
    <section className="top-wrapper">
    <div className="top-container">
    <h2 className="section-title">Top Catagories</h2>
    <div className="top-section">
      <div className="top-image-container">
        <div className="top-description">
            <h2>Coffe Moccha</h2>
             <p>View More</p>
        </div>
      </div>
      <div className="top-image-container2">
        <div className="top-description">
            <h2>Espresso Americano</h2>
             <p>View More</p>
        </div>
      </div>

      <div className="top-image-container3">
        <div className="top-description">
            <h2>Cappuccino</h2>
             <p>View More</p>
        </div>
      </div>

    </div>
    </div>

    </section>
  )
}

export default TopCatgories