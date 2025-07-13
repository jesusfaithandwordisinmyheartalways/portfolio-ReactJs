



import React, { useState } from 'react';
import './CSS/ShoeStore.css';
import jest_api_auth from '../components/ImagesTest/jestapiauth.png';
import playwright_shoe_store_code from '../components/ImagesTest/playwrightshoestorecode.png';
import jir_shoe_store from '../components/ImagesTest/jir shoe store.png';

const ShoeStore = () => {
  const [zoomedImg, setZoomedImg] = useState(null);

  const handleImageClick = (src) => {
    setZoomedImg(src);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setZoomedImg(null);
    }
  };

  return (
    <>
      <div className='next-play-container'> 
        <div className='next-wrappper'>
          <div>
            <h3>Test Case - Jest and SuperTest Server Side</h3>
            <p>GET /auth/authentication route</p>

            <h3>Test Code</h3>
            <div>
              <img src={jest_api_auth} alt='' loading='lazy' onClick={() => handleImageClick(jest_api_auth)} />
            </div>

            <h3>Test Case: Playwright – What’s being tested:</h3>
            <p>The site Hero logo should be visible</p>

            <h3>Test Code</h3>
            <div>
              <img src={playwright_shoe_store_code} alt='' loading='lazy' onClick={() => handleImageClick(playwright_shoe_store_code)} />
            </div>

            <h3>Jira: Bug Tracking & Task</h3>
            <p>Results</p>

            <h3>Test Code</h3>
            <div>
              <img src={jir_shoe_store} alt='' loading='lazy' onClick={() => handleImageClick(jir_shoe_store)} />
            </div>
          </div>
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

export default ShoeStore;