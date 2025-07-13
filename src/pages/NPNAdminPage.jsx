import React, { useRef, useState, useEffect } from 'react';
import Blank_Event_Page from '../components/AdminImages/Blank Event Page.png';
import Event_Page from '../components/AdminImages/Event Page.png';
import Admin_Panel from '../components/AdminImages/Admin Panel Edit.png';
import Admin_Panel_Two from '../components/AdminImages/Admin Panel Edit Two.png';
import './CSS/NPNAdminPage.css';

import adminVideo from '../videos/npn-admin-record.mp4';

const NPNAdminPage = () => {
  const videoRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className='main-video-container'>
        <div className='main-video-wrapper'>
          <div><h3>Admin Panel Calendar Live Event Websocket</h3></div>

          <div className="video-container">
            <video
              ref={videoRef}
              width="640"
              height="360"
              controls
              onClick={handleVideoClick}
            >
              <source src={adminVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div><h3>Admin Panel Images of Updates</h3></div>

          <div><img src={Blank_Event_Page} alt='' onClick={() => openModal(Blank_Event_Page)} /></div>
          <br />
          <div><img src={Event_Page} alt='' onClick={() => openModal(Event_Page)} /></div>
          <br />
          <div><img src={Admin_Panel} alt='' onClick={() => openModal(Admin_Panel)} /></div>
          <br />
          <div><img src={Admin_Panel_Two} alt='' onClick={() => openModal(Admin_Panel_Two)} /></div>
        </div>
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </>
  );
};

export default NPNAdminPage;