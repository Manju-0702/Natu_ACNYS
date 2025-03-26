import React, { useRef } from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import AboutUs from './AboutUs';
import Programs from './Programs/Programs';
import Stats from './Stats';
import VideoTestimonials from './VideoTestimonials';
import './Home.css';

const Home = () => {
  const programsRef = useRef(null); // Create a reference for Programs

  return (
    <div className="home-container">
      <ImageSlider programsRef={programsRef} /> {/* Pass ref as a prop */}
      <AboutUs />
      <Stats />
      
      <div ref={programsRef} className="name"> {/* Assign ref to Programs section */}
        <h2>Our Programs</h2>
      </div>

      <Programs />

      <div className="name">
        <h2>Testimonials</h2>
      </div>
      <VideoTestimonials />
    </div>
  );
};

export default Home;
