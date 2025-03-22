import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import AboutUs from './AboutUs';
import Programs from './Programs/Programs';
import Stats from './Stats'; // Import the Stats component
import './Home.css';
import VideoTestimonials from './VideoTestimonials';

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

       <div className="name">
        <h2>Testimonials</h2>
      </div>
       <VideoTestimonials/>     
    </div>
  );
};

export default Home;
