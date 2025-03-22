import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./VideoTestimonials.css"; // Import CSS

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video.mp4";
import video3 from "../../assets/video2.mp4";

const testimonials = [
  { name: "John Doe", type: "video", video: video1, feedback: "This service is amazing! It has changed my life for the better." },
  { name: "Jane Smith", type: "video", video: video2, feedback: "I highly recommend this to everyone. Excellent experience!" },
  { name: "Mike Johnson", type: "video", video: video3, feedback: "Top-notch service with great support. I'm truly satisfied!" },
];

const TestimonialSlider = () => {
  const [popupVideo, setPopupVideo] = useState(null);

  const openPopup = (videoSrc) => {
    setPopupVideo(videoSrc);
  };

  const closePopup = (e) => {
    if (e.target.classList.contains("video-popup") || e.target.classList.contains("close-btn")) {
      setPopupVideo(null);
    }
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true} // Loop enabled
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          className="swiper-container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <video
                src={testimonial.video}
                autoPlay
                muted
                loop
                className="testimonial-video"
                onClick={() => openPopup(testimonial.video)}
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-feedback">{testimonial.feedback}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      {/* Video Popup */}
      {popupVideo && (
        <div className="video-popup" onClick={closePopup}>
          <div className="video-popup-content">
            <span className="close-btn">&times;</span>
            <video src={popupVideo} controls autoPlay className="popup-video"></video>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialSlider;
