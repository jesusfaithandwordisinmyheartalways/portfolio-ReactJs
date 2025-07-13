



import React from 'react'
import PostgresSQL_Image from '../images/TypeScriptPostgrelSQLAuthentication.png'
import PostgresSQL_Image_Two from '../images/TypeScriptPostgrelSQLAuthentication_two.png'
import PostgresSQL_Image_Three from '../images/postgrelformjsonsnapshot.png'
import PostgresSQL_Image_MongoDB from '../images/mongodb screenshot.png'
import './CSS/PostgresSQL.css'



const PostgresSQL = () => {
  return (
  <>

<div className='postgres-case-study-container'>
        <div className='postgres-case-study-wrapper'>
          <div><h3> TypeScript PostgrelSQL Authentication Case Study</h3></div>
        </div>


        <div className='postgres-work-wrapper'>
            <div><img src={PostgresSQL_Image_MongoDB} alt=''></img></div>
            <div><img src={PostgresSQL_Image_Three} alt=''></img></div>

        </div>

        <div className='postgres-case-overview-wrapper'>
          <div><h3>Why Did I Create This Project</h3></div>
          <div className='postgres-case-text-wrapper'>
            <div><p>  I wanted to have the TypeScript PostgrelSQL Authentication  form for the user to update the table in the 
            pg admin under the server simultaneously every time the user passes the register validation.
             And also created the. CSV & JSON files with the data</p></div>
          </div>
        </div>

        <div className='postgres-case-overview-wrapper'>
          <div><h3>Project Statement</h3></div>
          <div className='postgres-case-text-wrapper'>
            <div><p>  there was a urgency on my part to create a project that had PostgrelSQL 
             database that I can see in the pg admin. Having the implementation of the code in nodejs was really great
              to work on the server side and implement TypeScript on the client side. </p></div>
          </div>
        </div>

        <div className='postgres-case-overview-wrapper'>
          <div><h3>Tech Stack</h3></div>
          <div className='postgres-case-text-wrapper'>
            <div><p>Languages Used | Frameworks | Tools - PostgrelSQL Datebase, MongoDB, JSON, CSV, TypeScript, Node.js & Express</p></div>
          </div>
        </div>

        <div className='postgres-case-overview-wrapper'>
          <div><h3>Challenges & Learnings</h3></div>
          <div className='postgres-case-text-wrapper'>
            <div><p> The challenges really to have the integration of the server side code to interact with the PostgrelSQL Datebase, 
            columns under the table to sync simultaneously every time the user submits their data. </p></div>
          </div>
        </div>

        <div className='postgres-case-overview-wrapper'>
          <div><h3>Outcome & Impact</h3></div>
          <div className='postgres-case-text-wrapper'>
            <div><p>  the project was able to update the columns, under the PostgrelSQL Datebase,
             within the server, and that was the main reason of wanting to create the project.</p></div>
          </div>
        </div>
      </div>



  </>
  )
}

export default PostgresSQL
