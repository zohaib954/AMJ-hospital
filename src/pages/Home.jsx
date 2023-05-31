import React from 'react';
import TopNav from '../components/topNav/TopNav'
import Footer from '../components/footer/Footer'
import HomeImagePanel from '../components/homeContent/HomeImagePanel/HomeImagePanel'
import FeaturesPanel from '../components/homeContent/featuresPanel/FeaturesPanel';


function Home() {
  return (
    <div className='homePage'>
            <TopNav />
            <HomeImagePanel />
            <FeaturesPanel />
            <Footer />
    </div>
  )
}

export default Home