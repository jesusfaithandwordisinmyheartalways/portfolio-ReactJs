



import React from 'react'
import './CSS/ShoeStore.css'
import jest_api_auth from '../components/ImagesTest/jestapiauth.png'
import playwright_shoe_store_code from '../components/ImagesTest/playwrightshoestorecode.png'
import jir_shoe_store from '../components/ImagesTest/jir shoe store.png'




const ShoeStore = () => {


  return (
  <>
  
    <div className='next-play-container'> 

    <div className='next-wrappper'>


        <div>

        <div><h3>Test Case -    Jest and SuperTest Sever Side  </h3></div>
        <p>GET /auth/authentication route </p>



        <div><h3>Test Code </h3></div>


        <div><img src={jest_api_auth} alt='' loading='lazy'></img></div>



        <div><h3>Test Case: Playwright What’s being tested:  </h3></div>
        <p>The site Hero logo should be visible 
        </p>


        <div><h3>Test Code </h3></div>

        <div><img src={playwright_shoe_store_code} alt='' loading='lazy'></img></div>




        <div><h3>Jira: Bug Tracking & Task  </h3></div>
        <p>Results </p>


        <div><h3>Test Code </h3></div>

        <div><img src={jir_shoe_store} alt='' loading='lazy'></img></div>


        </div>




    </div>






      
    </div>
  
  
  
  
  </>
  )
}

export default ShoeStore
