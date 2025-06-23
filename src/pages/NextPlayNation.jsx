





import React, { useState } from 'react';
import Jest_Passed from '../components/ImagesTest/jestapipassed.png';
import Jest_Passed_Two from '../components/ImagesTest/jestapipassedcode.png';
import Jest_Passed_Three from '../components/ImagesTest/jestapipassedcodetwo.png';
import Jest_Passed_four from '../components/ImagesTest/jestapipassedcodethree.png';
import navbar from '../components/ImagesTest/playwrightnavbar.png';
import footer from '../components/ImagesTest/playwrightfooter.png';
import hero from '../components/ImagesTest/playwrighthero.png';
import home from '../components/ImagesTest/playwrightexample.spec.ts.png';
import results from '../components/ImagesTest/clientpassedresults.png';
import jira from '../components/ImagesTest/Jira - Next Play Nation Internship Web App - Jira.png';

import '../pages/CSS/NextPlay.css';

const NextPlayNation = () => {
  const [zoomedImg, setZoomedImg] = useState(null);

  const handleImageClick = (src) => setZoomedImg(src);
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
            <p>When a user sends a POST request...</p>

            <h3>Test Code</h3>
            <div><img src={Jest_Passed} alt='' loading='lazy' onClick={() => handleImageClick(Jest_Passed)} /></div>
            <div><img src={Jest_Passed_Two} alt='' loading='lazy' onClick={() => handleImageClick(Jest_Passed_Two)} /></div>
            <div><img src={Jest_Passed_Three} alt='' loading='lazy' onClick={() => handleImageClick(Jest_Passed_Three)} /></div>
            <div><img src={Jest_Passed_four} alt='' loading='lazy' onClick={() => handleImageClick(Jest_Passed_four)} /></div>

            <h3>Test Case: Playwright</h3>
            <p>The site logo should be visible in the navbar.</p>
            <div><img src={navbar} alt='' loading='lazy' onClick={() => handleImageClick(navbar)} /></div>

            <p>The hero section at the top of the homepage.</p>
            <div><img src={hero} alt='' loading='lazy' onClick={() => handleImageClick(hero)} /></div>

            <p>The footer should be visible and contain the text...</p>
            <div><img src={footer} alt='' loading='lazy' onClick={() => handleImageClick(footer)} /></div>

            <p>The site logo should be visible when the homepage loads.</p>
            <div><img src={home} alt='' loading='lazy' onClick={() => handleImageClick(home)} /></div>

            <p>Results</p>
            <div><img src={results} alt='' loading='lazy' onClick={() => handleImageClick(results)} /></div>

            <h3>Jira: Bug Tracking & Task</h3>
            <p>Results</p>
            <div><img src={jira} alt='' loading='lazy' onClick={() => handleImageClick(jira)} /></div>
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

export default NextPlayNation;