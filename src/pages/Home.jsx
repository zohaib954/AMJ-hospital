import React from 'react';
import TopNav from '../components/topNav/TopNav'
import Footer from '../components/footer/Footer'
import HomeContent from '../components/homeContent/HomeContent';


function Home() {
  return (
    <div className='homePage'>
            <TopNav />
            <HomeContent />
            <Footer />
    </div>
  )
}

export default Home