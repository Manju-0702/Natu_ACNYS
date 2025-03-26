import React, { useState } from "react";
import "./Anandamay.css";
import video1 from "../../assets/anand1.mp4";
import video2 from "../../assets/anand2.mp4";

const AnandamayaHospital = () => {
  const [popupVideo, setPopupVideo] = useState(null);

  return (
    <div>
      <div className="anandamaya-banner">
        <h1>Anandamaya Hospital</h1>
      </div>
      
      <div className="container">
        <div className="description">
          <p>
            Anandamaya Arogyadhama run by Alva's Education Foundation® is uniquely designed as an
            Integrated Health Centre which combines Naturopathy, Yoga, and Physiotherapy for holistic
            treatment. Established to provide health to all, it is surrounded by lush greenery, featuring
            experienced staff and well-equipped treatment rooms.
          </p>
          <p>
            Accommodations at Anandamaya Arogyadhama are traditionally designed with antique furniture
            and artefacts. The campus boasts a two-acre herbal garden with over 500 medicinal plants,
            including rare and exotic species, alongside 100 acres of organically cultivated medicinal plants.
          </p>
          <p>
            Located at Mijar, 7 km from Moodbidri and 26 km from Mangalore, the centre is well connected
            by road, rail, and air. The nearest railway station is Mangalore (27 km), and Mangalore
            International Airport is 22 km away. This pollution-free, tranquil environment accelerates
            rejuvenation and healing.
          </p>
        </div>

        <div className="video-grid">
          <div className="video-container" onClick={() => setPopupVideo(video1)}>
            <video className="video small-video" controls>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-container" onClick={() => setPopupVideo(video2)}>
            <video className="video small-video" controls>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <a
          href="http://www.alvasanandamaya.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="website-link"
        >
          Visit Anandamaya Hospital Website
        </a>
      
        {popupVideo && (
          <div className="popup" onClick={() => setPopupVideo(null)}>
            <div className="popup-content fade-in">
              <video className="popup-video scale-in" controls autoPlay>
                <source src={popupVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnandamayaHospital;
