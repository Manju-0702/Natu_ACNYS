import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import AboutUs from './AboutUs';
import Programs from './Programs/Programs';
import Stats from './Stats'; // Import the Stats component
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <ImageSlider />
      <AboutUs />
      <Stats />
      <div className="name">
        <h2>Our Programs</h2>
      </div>
      
      <Programs />
       {/* Animated Numbers Section */}
    </div>
  );
};

export default Home;
