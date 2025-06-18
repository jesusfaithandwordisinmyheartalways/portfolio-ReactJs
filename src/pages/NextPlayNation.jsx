




import React from 'react'
import Jest_Passed from '../components/ImagesTest/jestapipassed.png'
import Jest_Passed_Two from '../components/ImagesTest/jestapipassedcode.png'
import Jest_Passed_Three from '../components/ImagesTest/jestapipassedcodetwo.png'
import Jest_Passed_four from '../components/ImagesTest/jestapipassedcodethree.png'
import navbar from '../components/ImagesTest/playwrightnavbar.png'
import footer from '../components/ImagesTest/playwrightfooter.png'
import hero from '../components/ImagesTest/playwrighthero.png'
import home from '../components/ImagesTest/playwrightexample.spec.ts.png'
import results from '../components/ImagesTest/clientpassedresults.png'
import jira from '../components/ImagesTest/Jira - Next Play Nation Internship Web App - Jira.png'






import '../pages/CSS/NextPlay.css'






const NextPlayNation = () => {


  return (
  <>

  <div className='next-play-container'>

    <div className='next-wrappper'>

       <div>


       <div><h3>Test Case -    Jest and SuperTest Sever Side  </h3></div>
        <p>When a user sends a POST request to /donate/donate-client
         with valid donation info, the server should respond with success and pretend to send an email.”
        </p>


        <div><h3>Test Code </h3></div>

        <div><img src={Jest_Passed} alt='' loading='lazy'></img></div>

        <div><img src={Jest_Passed_Two} alt='' loading='lazy'></img></div>

        <div><img src={Jest_Passed_Three} alt='' loading='lazy'></img></div>

        <div><img src={Jest_Passed_four} alt='' loading='lazy'></img></div>






        <div><h3>Test Case: Playwright What’s being tested:  </h3></div>
        <p>The site logo should be visible in the navbar.
        </p>


        <div><h3>Test Code </h3></div>

        <div><img src={navbar} alt='' loading='lazy'></img></div>
       





        <div><h3>Test Case: Playwright What’s being tested:  </h3></div>
        <p>The hero section at the top of the homepage.
        </p>


        <div><h3>Test Code </h3></div>

        <div><img src={hero} alt='' loading='lazy'></img></div>






        <div><h3>Test Case: Playwright What’s being tested:  </h3></div>
        <p>The footer should be visible and contain the text “Download our App” and “Admin Login”.
        </p>


        <div><h3>Test Code </h3></div>

        <div><img src={footer} alt='' loading='lazy'></img></div>
       






        <div><h3>Test Case: Playwright What’s being tested:  </h3></div>
        <p>The site logo should be visible when the homepage loads
        </p>


        <div><h3>Test Code </h3></div>

        <div><img src={home} alt='' loading='lazy'></img></div>







        <div><h3>Test Case: Playwright What’s being tested:  </h3></div>
        <p>Results
        </p>


        <div><h3>Test Code </h3></div>

        <div><img src={results} alt='' loading='lazy'></img></div>






        <div><h3>Jira: Bug Tracking & Task  </h3></div>
        <p>Results </p>


        <div><h3>Test Code </h3></div>

        <div><img src={jira} alt='' loading='lazy'></img></div>
       
       



       








       

       
























       </div>















    </div>

  </div>





  </>
  )
}

export default NextPlayNation
