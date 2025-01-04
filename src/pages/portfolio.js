

import React from "react";
import '../components/portfolio/portfolio.css';
import { useNavigate } from "react-router-dom";
import HandImage from '../images/handsign.png';
import Graduation from '../images/graduation image .jpg';
import HeaderImage from '../images/portfolio image.jpg';
import GitHub from '../images/github image.png';
import Linkedin from '../images/linkedin.png';
import JavaScript from '../images/javascript.png';
import ReactLogo from '../images/react-1-logo.png';
import GitLogo from '../images/gitversioncontrol.png';
import HTML from '../images/html5.png';
import CSSLogo from '../images/css.png';
import RegexLogo from '../images/regex.png';
import UXUILogo from '../images/UI_UX image.avif';
import TravelLand from '../images/travel.png';
import UserForm from '../images/Laptop Screen.png';
import Space from '../images/space land page(1).png';
import TravelLandPage from '../images/travel screenshot.png';
import User from '../images/user icon icon.png';
import Location from '../images/location.jpg';
import Email from '../images/email.png';
import RecipeSearchImage from '../images/receipesearch.png';
import FigmaLogo from '../images/figmalogo.png';
import JSONImage from '../images/json.png';
import GoToTech from '../images/go to tech screenshot.png';
import TS from '../images/ts.png';
import StockMarketScreenshot from '../images/screenshotstockmarket.png';
import weatherappimage from '../images/weather app screenshot.png'
import ExpressJs from '../images/expressjs.png';
import NodeJs from '../images/nodejs logo.png'
import BeverageMarketplace from '../images/beveragemarketplacefront.png'
import Doctor from '../images/doctor.png'
import SaasLogo from '../images/SaaS.png';
import NodeMailerScreenshot from '../images/nodemailerSaaSscreenshot.png'
import ReactNativeCal  from '../images/ UserReactNativeCalculator.png';
import ReactNativeLogo  from '../images/reactnativelogo.png';
import ShoeEcommerce from '../images/shoeecommmercehomepageshort.png'
import MongoDB from '../images/mongo db.png'
import ChatApp from '../images/websocket React App.png'
import WebSocket from '../images/websocket.png'
import ReactNativeMobileApp from '../images/reactnativemobileapp.png'




const Portfolio = () => {
    const navigate = useNavigate()

    const NavigateTo = (id) => {
        navigate(`#${id}`)
        const element = document.getElementById(id)
        if(element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }



         const Hire  = () => { 
            window.location.href = 'https://www.linkedin.com/in/andrew-johnson-64632199/'
            
         }



   
        const ResumeDownload = () => {
                window.location.href = '/resume.pdf'

        }


        






        const handleExternalNavigation = (url) => {
            window.location.href = url
        }
  
    return (
        <>

        
            {/*----------------------------------NAVBAR --------------------------------------------*/}

            <nav className="Nav-Container">
                <div className="Nav-Wrapper">

                    <div className="portfolio">
                        <div><h3>Portfo<span className="portfolio-inner-text">lio</span></h3></div>
                    </div>



                    <div className="nav-button-content">
                       <div className="navbar-content">
                         <div onClick={() => NavigateTo('header')}><button type="button">Home</button></div>
                         </div>
                    </div>

                    <div className="nav-button-content">
                       <div className="navbar-content">
                        <div onClick={() => NavigateTo('content')}><button type="button">About</button></div>
                       </div>
                    </div>

                    <div className="nav-button-content">
                    <div className="navbar-content">
                      <div onClick={() => NavigateTo('skills')}><button type="button">Skills</button></div>
                    </div>
                    </div>

                        
                    <div className="nav-button-content"> 
                    <div className="navbar-content">
                      <div onClick={() => NavigateTo('showcase')}><button type="button">Live Projects</button></div>
                    </div>
                    </div>   

                    <div className="nav-button-content">
                    <div className="navbar-content">
                      <div onClick={() => NavigateTo('contact')}><button type="button">Contact</button></div>
                    </div>
                    </div>


                </div>
            </nav>
            
            
            
            
            
            
            
            
            
            
            {/*----------------------------------HOME SECTION --------------------------------------------*/}

                        <header className="Header-Container" id="header">

                            <div className="Header-Wrapper">

                            <div className="header-content">
                                <div className="font-end-text"><div><h3>Hi <img src={HandImage}></img> I'm Andrew Johnson, I'm a Full Stack Web Developer</h3></div></div>
                                
                                 <div className="header-links-wrapper">
                                   <div onClick={Hire} className="hire"><div><button className="hire">Contact Andrew</button></div></div>
                                   <div onClick={ResumeDownload}><div><button  className="resume" >Download Resume</button></div></div>
                                   
                                 </div>

                                

                                 

                                

                            </div>



                            <div className="header-image">
                                <img src={HeaderImage} alt=""></img>
                            </div>




                            </div>



                        </header>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        {/*----------------------------------CONTENT SECTION --------------------------------------------*/}


                        <main className="Main-Content" id="content">

                            <div className="Main-Wrapper">
                                    <div className="about-content">
                                        <div><h3>About Me</h3></div>
                                        <div><hr /> </div>
                                    </div>
                            </div>

                            <div className="About-Me-Wrapper">


                            <div className="about-me-content">
                            </div>

                            <div className="about-me-content-bio">
                                <div>
                                   <div><h3>I'm Andrew & I love to develop websites</h3></div>
                                   <div>I'm an recent college graduated with an BS in Information Technology with an concentration in Software Engineering (2023).
                                    I have an passion for Front-End & Back-End development & UI/UX design for webs apps, tablets and mobile screens.
                                   My focus is on creating dynamic and user-friendly websites within a team and continue to improve
                                   my knowledge on the latest industry technologies. I have a drive to always want to improve myself as an developer
                                   with different programming languages & tools. Here, my portfolio showcases just some of 
                                   the web applications I have developed which highlights my ability to deliver 
                                   dynamic web apps. Please visit my Github or Linkedin image icon to see my craft. </div>
                                </div>
                            </div>


                            </div>

                            <div className="About-Me-Links-Wrapper">
                                <div>
                                    <div onClick={() => handleExternalNavigation('https://github.com/jesusfaithandwordisinmyheartalways')}><img src={GitHub}></img></div>
                                </div>

                                <div>
                                    <div onClick={() => handleExternalNavigation('https://www.linkedin.com/in/andrew-johnson-64632199/')}><img src={Linkedin}></img></div>
                                </div>


                                
                            </div>


                        </main>
                        
                        
                        
                        
                        
                        
                        
                        {/*----------------------------------WHAT I KNOW SECTION --------------------------------------------*/}




                        <div className="Technologies-Container">


                            <div className="Tech-Wrapper" id="skills">
                                <div>
                                <div><h3>Skills</h3></div>
                                    <hr />
                                </div>
                            </div>


                            <div className="image-wrapper">

                                    <div className="image-language">

                                        <img src={TS} alt=""></img>

                                        <img src={ReactLogo} alt=""></img>

                                        <img src={ReactNativeLogo} alt=""></img>

                                        <img src={MongoDB} alt=""></img>


                                        <img src={ExpressJs} alt=""></img>
                                        
                                        
                                        <img src={NodeJs} alt=""></img>

                                        <img src={JavaScript} alt=""></img>

                                        <img src={SaasLogo} alt=""></img>

                                        <img src={GitLogo} alt=""></img>

                                        <img src={GitHub} alt=""></img>

                                        <img src={RegexLogo} alt=""></img>

                                        <img src={HTML } alt=""></img>

                                        <img src={CSSLogo} alt=""></img>

                                        <img src={FigmaLogo} alt=""></img>

                                        <img src={JSONImage} alt=""></img>

                                        <img src={WebSocket} alt=""></img>



                                        </div>


                                    </div>





                        <div className="Tech-Skills-Wrapper">
                                   
                                   <div className="know-text">
                                        <div><h3>My Experience</h3></div>
                                       <div><p>Experienced in developing projects with a wide range of technologies of user-friendly & lively applications.
                                        Motivated, love to learn from others, driven to achieve results, well equip in a project management environment, 
                                        team person, & continually up to date on the latest technologies trends as a Web Developer.
                                       Solid experience in Express.js and Node.js, proficient in building RESTful APIs 
                                       for handling back-end server logic and data management.
                                        With knowledge & experience with TypeScript, ReactJS framework, Context API, React Hooks,
                                         Interface Design Tools with Figma, JavaScript, Git Version Control, GitHub, Regular expressions,
                                          SaaS style sheets, CSS, CSS3, HTML5. I'm ready to contribute to your company to bring success 
                                       in the UX/UI design aspect & to help clients to bring their website ideas to life.
                                          </p></div>
                                   </div>

                           </div>


                        </div>
                        
                        
                        
                        
                        
                        
                        
                        
                        {/*----------------------------------WORK SO FAR --------------------------------------------*/}

                    <div className="Showcase-Container" id="showcase">


                        <div className="Showcase-Wrapper">

                            <div>
                                <div><h3>Some of My Projects |  Click & See </h3></div>
                                    <hr />
                            </div>

                        </div>


                        <div className="Experience-Wrapper">

                        <div className="image-one" onClick={() => handleExternalNavigation('https://travelapp-react-js.vercel.app/')}>
                            <div><img src={TravelLandPage}></img></div>
                            <div className="image-one-text"><div><h3>Travel Land ReactJs Web App</h3></div></div>
                            <div className="image-one-text-three"><div><p>Web, UX/UI Design</p></div></div>
                            <div className="image-one-text-two"><div><p>ReactJs | User Re-routing | Animation</p></div></div>

                        </div>


                        <div className="image-three" onClick={() => handleExternalNavigation('https://culture-search-recipe.vercel.app/')}>
                            <div><img src={RecipeSearchImage} className="image-recipe"></img></div>
                            <div className="image-three-text"><div><h3>Recipe Culture Search Web App</h3></div></div>
                            <div className="image-three-text-three"><div><p>Web, UX/UI Design (Mobile, Tablet Land & Login)</p></div></div>
                            <div className="image-three-text-two"><div><h3>JavScript | User Redirection | Animation</h3></div></div>
                        </div>


                        <div className="image-two" onClick={() => handleExternalNavigation('https://www.linkedin.com/feed/update/urn:li:activity:7274752334604222464/')}>
                            <div><img src={ShoeEcommerce} alt=""></img></div>
                            <div className="image-two-text"><div><h3>MERN Shoe Ecommerce Web App  </h3></div></div>
                            <div className="image-two-text-three"><div><p>Responsive Web | User Validation | UX/UI Design</p></div></div>
                            <div className="image-two-text-two"><div><h3>MongoDB | Context API | Nodejs </h3></div></div>
                        </div>


                        <div className="image-four" onClick={() => handleExternalNavigation('https://gototechecommercepage-react-js.vercel.app//')}>
                            <div><img src={GoToTech}></img></div>
                            <div className="image-four-text"><div><h3>E-Commerce Product Page Web App  </h3></div></div>
                            <div className="image-four-text-three"><div><p>Responsive Web | Mobile, Laptop | UX/UI Design</p></div></div>
                            <div className="image-four-text-two"><div><h3>ReactJS | JSON | Image Slideshow </h3></div></div>
                        </div>



                        <div className="image-five" onClick={() => handleExternalNavigation('https://marketdata-typescript-s4n4.vercel.app/')}>
                            <div><img src={StockMarketScreenshot}></img></div>
                            <div className="image-five-text"><div><h3>Popular Stock Market Web App  </h3></div></div>
                            <div className="image-five-text-three"><div><p>Responsive Web | Laptop | UX/UI Design</p></div></div>
                            <div className="image-five-text-two"><div><h3> TypeScript| JSON | Animation </h3></div></div>

                        </div>



                        <div className="image-six" onClick={() => handleExternalNavigation('https://weatherdataapp-typescript.vercel.app/')}>
                            <div><img src={weatherappimage}></img></div>
                            <div className="image-six-text"><div><h3>Weather Data Web App  </h3></div></div>
                            <div className="image-six-text-three"><div><p>Responsive Web | Laptop, Mobile | UX/UI Design</p></div></div>
                            <div className="image-six-text-two"><div><h3> TypeScript| ReactJS | Fetch API </h3></div></div>

                        </div>


                        <div className="image-seven" onClick={() => handleExternalNavigation('https://fullstackapp-beveragemarketplace.vercel.app/')}>
                            <div><img src={BeverageMarketplace}></img></div>
                            <div className="image-seven-text"><div><h3>Expressjs DrinkCompany LandPage w User Form</h3></div></div>
                            <div className="image-seven-text-three"><div><p>Responsive Web | UX/UI Design</p></div></div>
                            <div className="image-seven-text-two"><div><h3> Express | Nodejs | TypeScript </h3></div></div>

                        </div>



                        <div className="image-eight" onClick={() => handleExternalNavigation('https://expressrestfulapidoctorpage.vercel.app//')}>
                            <div><img src={Doctor}></img></div>
                            <div className="image-eight-text"><div><h3>Doctor LandPage & Welcome Page</h3></div></div>
                            <div className="image-eight-text-three"><div><p>Responsive Web | UX/UI Design</p></div></div>
                            <div className="image-eight-text-two"><div><h3> Nodejs | Express | TypeScript </h3></div></div>

                        </div>


                        <div className="image-nine" onClick={() => handleExternalNavigation('https://saa-snodemailerapp-q27c.vercel.app/')}>
                            <div><img src={NodeMailerScreenshot}></img></div>
                            <div className="image-nine-text"><div><h3>Nodemailer Express Web App</h3></div></div>
                            <div className="image-nine-text-three"><div><p>Responsive Web | Mobile Screen Design</p></div></div>
                            <div className="image-nine-text-two"><div><h3> SaaS | Express | Background Animation </h3></div></div>

                        </div>



                        <div className="image-ten" onClick={() => handleExternalNavigation('https://reactnativegotocalculator.vercel.app/')}>
                            <div><img src={ReactNativeCal}></img></div>
                            <div className="image-ten-text"><div><h3>React Native Calculator Mobile App</h3></div></div>
                            <div className="image-ten-text-three"><div><p>Responsive App | Mobile Screen Design</p></div></div>
                            <div className="image-ten-text-two"><div><h3> React Native | TouchableOpacity | StyleSheet </h3></div></div>

                        </div>




                        <div className="image-eleven" onClick={() => handleExternalNavigation('https://www.linkedin.com/feed/update/urn:li:activity:7278737121689919488/')}>
                            <div><img src={ChatApp}></img></div>
                            <div className="image-eleven-text"><div><h3>WebSocket Chat App - Full Stack</h3></div></div>
                            <div className="image-eleven-text-three"><div><p>Responsive App | Laptop Screen Design</p></div></div>
                            <div className="image-eleven-text-two"><div><h3> Socket.io Library | Nodejs | Reactjs </h3></div></div>

                        </div>




                        <div className="image-ten" onClick={() => handleExternalNavigation('https://reactnativemobileapp.vercel.app/')}>
                            <div><img src={ReactNativeMobileApp}></img></div>
                            <div className="image-ten-text"><div><h3>React Native College Mobile App</h3></div></div>
                            <div className="image-ten-text-three"><div><p>Pagination | Search Filter | User Feedback</p></div></div>
                            <div className="image-ten-text-two"><div><h3> React Native | NavigationContainer | ScrollView </h3></div></div>

                        </div>












                        </div>



                    </div>
                    
                    
                    
                    
                    



                    {/*----------------------------------CONTACT ME SECTION --------------------------------------------*/}

                    <div className="Contact-Container" id="contact">
                        <div className="Contact-Wrapper">

                            <div className="contact-text">
                            <div>
                            <h3>Contact</h3>
                                <hr />
                            </div>
                            </div>

                            <div className="contact-text-two">
                                <div>
                                <div><h3>Reach Out to Me</h3></div>
                                </div>
                            </div>

                        </div>


                                <div className="Contact-Info-Wrapper">

                                <div className="contact-text-three">
                                      <div><img src={HeaderImage}></img></div>
                                </div>

                                <div className="contact-text-three">
                                    <div><h3>Name</h3><span>Andrew Johnson</span></div>
                                </div>

                                <div className="contact-text-three" >
                                    <div><img src={Location}></img></div>
                                </div>

                                <div className="contact-text-three">
                                    <div><h3>Address</h3><span>Savannah, TX</span></div>
                                </div>

                                <div>
                                    <div><img src={Email}></img></div>
                                </div>

                                <div className="contact-text-three">
                                    <div><div><h3>Email</h3><span>andrewjohnson9393@gmail.com</span></div></div>
                                </div>


                                </div>
                    </div>
                    
                    






                    
                    {/*----------------------------------FOOTER SECTION --------------------------------------------*/}

                            <footer className="Footer-Container">


                                <div className="Footer-Wrapper">

                                <div className="footer-content">
                                    <div><h3>Created By <span>Andrew Johnson</span></h3></div>
                                    <div><p> &copy; 2024 All rights reserved</p></div>
                                </div>



                                </div>


                            </footer>



        </>
    )


}

export default Portfolio