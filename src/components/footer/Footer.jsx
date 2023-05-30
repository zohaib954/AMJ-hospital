import React from 'react'
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className="sections">
            <span className='logo'>LOGO</span>
            <h5>"Some Quotes regarding hospital"</h5>
        </div>
        <div className="sections">
            <h3 className='footer-heading'>Quick Links</h3>
            <div className='footer-underline'></div>

            <ul className='footerUL'>
                <li className='footerLinks'>Home</li>
                <li className='footerLinks'>Hospital Stats</li>
                <li className='footerLinks'>Hospital</li>
                <li className='footerLinks'>Contact Us</li>
            </ul>
        </div>
        <div className="sections">
        <h3 className='footer-heading'>Address</h3>
        <div className='footer-underline'></div>
           <div className="footer-mobile">
            <p className='footerPara'>8073371267</p>
           </div>
           <div className="footer-email">
            <p className='footerPara'>sushrutha2021@gmail.com</p>
           </div>
           <div className="footer-address">
            <p className='footerPara'>Neelganga Ayrurvedic Medical College, Hospital and Reasearch Centre,
                 Smt. Shanta Someshekar Mahajan Campus, Ayurgram,
                  Yerbagh Taluka Basavakalyan District Bidar Karnataka 585331</p>
           </div>
        </div>
        <div className="sections">
        <h3 className='footer-heading'>Affiliation University</h3>
        <div className='footer-underline'></div>

        <p className='footerPara'>Affiliated Rajiv Gandhi University of Health Sciences,
         4th T Block, Jaya Nagar , Bangalore</p>
        </div>


    </div>
  )
}

export default Footer