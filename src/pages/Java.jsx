import React, { useState } from 'react';
import './CSS/Java.css';
import junt from '../components/ImagesTest/junit.png';
import junt_two from '../components/ImagesTest/junittwo.png';




const Java = () => {
  const [zoomedImg, setZoomedImg] = useState(null);

  const handleImageClick = (imgSrc) => {
    setZoomedImg(imgSrc);
  };

  const handleModalClick = (e) => {
    // Close modal if the background (not the image) was clicked
    if (e.target.classList.contains('modal-overlay')) {
      setZoomedImg(null);
    }


  };





  
  return (
    <>
      <div className='next-play-container'>
        <div className='next-wrappper'>
          <div><h3>Test Case - JUnit test run Server Side</h3></div>
          <p>Implemented unit testing using JUnit 5...</p>
          <p>Configured Maven test lifecycle...</p>
          <p>Demonstrated test results via terminal logs...</p>

          <div><h3>Test Code</h3></div>

          <div><img src={junt} alt='JUnit test' loading='lazy' onClick={() => handleImageClick(junt)} /></div>
          <br />
          <div><img src={junt_two} alt='JUnit test 2' loading='lazy' onClick={() => handleImageClick(junt_two)} /></div>
        </div>
      </div>

      {/* Modal */}
      {zoomedImg && (
        <div className="modal-overlay" onClick={handleModalClick}>
          <div className="modal-content">
            <img src={zoomedImg} alt="Zoomed" />
          </div>
        </div>
      )}
    </>
  );
};

export default Java;