import React from 'react'
import "./homeImagePanel.css"
function HomeImagePanel() {
  return (
    <div className='homeImagePanel'>
        <div className="bg-image">
            <div className="bg-head">
                <h1>Welcome to Neelangada Ayurvedic Hospital</h1>
            </div>
            <div className="bg-para">
            <span>"Dedicated to bringing you the timeless wisdom of authentic Ayurveda
                     tailored to meet your contemporary needs"</span>
            </div>
            <div className="contact-btn">
                <button>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default HomeImagePanel