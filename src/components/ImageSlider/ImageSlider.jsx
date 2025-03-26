import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import './ImageSlider.css';
import img1 from '../../assets/slide4.jpg';
import img2 from '../../assets/slide2.jpg';
import img3 from '../../assets/slide1.jpg';

const ImageSlider = ({ programsRef }) => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: 'ease',
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleScrollToPrograms = () => {
    if (programsRef?.current) {
      programsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#programs'); // Fallback if ref is not available
    }
  };

  return (
    <div className="slider-section">
      <div className="slider-text">
        <h1 className="fade-in">Alva's College of Naturopathy and Yogic Science</h1>
        <div className="slider-buttons fade-in-delay">
          <button className="apply-now">Apply Now</button>
          <button className="know-more" onClick={handleScrollToPrograms}>
            View Our Programs
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings} className="image-slider">
        <div>
          <img src={img1} alt="Slide 1" className="slider-image" />
        </div>
        <div>
          <img src={img2} alt="Slide 2" className="slider-image" />
        </div>
        <div>
          <img src={img3} alt="Slide 3" className="slider-image" />
        </div>
      </Slider>
      <div className="slider-arrows">
        <button className="prev-arrow" onClick={handlePrev}>&#10094;</button>
        <button className="next-arrow" onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default ImageSlider;
