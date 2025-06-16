import React, {useEffect, useRef ,useState,} from "react";
import '../components/portfolio/portfolio.css';
import { useNavigate } from "react-router-dom";
import HandImage from '../images/handsign.png';
import HeaderImage from '../images/portfolio image.jpg';
import GitHub from '../images/github image.png';
import Linkedin from '../images/linkedin.png';
import JavaScript from '../images/javascript.png';
import ReactLogo from '../images/react-1-logo.png';
import GitLogo from '../images/gitversioncontrol.png';
import HTML from '../images/html5.png';
import CSSLogo from '../images/css.png';
import RegexLogo from '../images/regex.png';
import TravelLandPage from '../images/travel screenshot.png';
import Location from '../images/location.jpg';
import Email from '../images/email.png';
import RecipeSearchImage from '../images/receipesearch.png';
import FigmaLogo from '../images/figmalogo.png';
import JSONImage from '../images/json.png';
import TS from '../images/ts.png';
import StockMarketScreenshot from '../images/screenshotstockmarket.png';
import ExpressJs from '../images/expressjs.png';
import NodeJs from '../images/nodejs logo.png'
import Doctor from '../images/doctor.png'
import SaasLogo from '../images/SaaS.png';
import NodeMailerScreenshot from '../images/nodemailerSaaSscreenshot.png'
import ReactNativeCal  from '../images/ UserReactNativeCalculator.png';
import ReactNativeLogo  from '../images/reactnativelogo.png';
import MongoDB from '../images/mongo db.png'
import ChatApp from '../images/websocket React App.png'
import WebSocket from '../images/websocket.png'
import ReactNativeMobileApp from '../images/reactnativemobileapp.png'
import clothing_store from '../images/clothing store.png'
import  webdevelopment_image from '../images/Web development.png'
import  simplemobile_image from '../images/Mobile screenshot.png'
import  simpleweb_image from '../images/Web screenshot.png'
import PostgresSQL_Image from '../images/TypeScriptPostgrelSQLAuthentication.png'
import PostgresSQL_Image_Two from '../images/TypeScriptPostgrelSQLAuthentication_two.png'
import PostgresSQL_Image_Three from '../images/postgrelformjsonsnapshot.png'
import PostgresSQL_Image_Logo from '../images/postgres-logo.png'
import { Link } from "react-router-dom";
import Dog_Ariival from '../images/User profile image home page.png'
import tic_tak_toe from '../images/Tic Tac Toe Game react.png'
import doctor_land_page from '../images/Dr. Land page.png'
import ear_pod_landpage from '../images/Land page.png'
import tailwind_css from '../images/talwind.png'
import tailwind_css_landpage from '../images/full landpage tailwind css .png'
import tailwind_css_landpage_mobile from '../images/talwindmobile.png'
import AWS from '../images/aws.png'
import Docker from '../images/Docker.png'
import Internship from '../images/intenrship home pages.png'
import JAVA_LOGO from '../images/java.png'
import SPRING_BOOT from '../images/spring boot.png'
import MERN_JAVA from '../images/MERN JAVA.png'






const Portfolio = () => {

        const navigate = useNavigate()
            const [sectionIsVisible, setSectionVisible] = useState(false);
            const sectionRef = useRef(null);
            const sectionTech = useRef(null)
            const sectionResume = useRef(null)




         const Hire  = () => { 
            window.location.href = 'https://www.linkedin.com/in/andrew-johnson-64632199/'
            
         }



   
        const ResumeDownload = () => {
                window.location.href = '/resume.pdf'

        }



        const coverLetter = () => {
             window.location.href = '/coverletter.pdf'
        }


        const handleExternalNavigation = (url) => {
            window.location.href = url
        }



        const NavigateTo = (id) => {
            navigate(`#${id}`)
            const element = document.getElementById(id)
            if(element) {
                element.scrollIntoView({behavior: 'smooth'})
            }
        }






              useEffect(() => {
                    const userScrolls = () => {
                        if (sectionRef.current) {
                            const sectionTop = sectionRef.current.getBoundingClientRect().top;
                            if (sectionTop < window.innerHeight * 0.75) {
                                setSectionVisible(true);
                            }
                        }
                    };
            
                    userScrolls();
                    window.addEventListener('scroll', userScrolls);
                    return () => window.removeEventListener('scroll', userScrolls);
                }, []);
           
            




              useEffect(() => {
                const userScrolls = () => {
                    if (sectionTech.current) {
                        const sectionTop = sectionTech.current.getBoundingClientRect().top;
                        if (sectionTop < window.innerHeight * 1.40) {
                            setSectionVisible(true);
                        }
                    }
                };
        
                userScrolls();
                window.addEventListener('scroll', userScrolls);
                return () => window.removeEventListener('scroll', userScrolls);
            }, []);









            useEffect(() => {
                const userScrolls = () => {
                    if (sectionResume.current) {
                        const sectionTop = sectionResume.current.getBoundingClientRect().top;
                        if (sectionTop < window.innerHeight * 1.40) {
                            setSectionVisible(true);
                        }
                    }
                };
        
                userScrolls();
                window.addEventListener('scroll', userScrolls);
                return () => window.removeEventListener('scroll', userScrolls);
            }, []);








    


    useEffect(() => {
        const educationWrapper = document.querySelector('.education-wrapper');
        const degreeWrapper = document.querySelector('.degree-wrapper');
        const itWrapper = document.querySelector('.it-wrapper'); // IT Section wrapper
    
        const options = {
          root: null, 
          rootMargin: '0px',
          threshold: 0.1, 
        };
    
        const revealElement = (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        };
    
        const observer = new IntersectionObserver(revealElement, options);
    
        // Start observing the elements
        if (educationWrapper) observer.observe(educationWrapper);
        if (degreeWrapper) observer.observe(degreeWrapper);
        if (itWrapper) observer.observe(itWrapper); // Observe IT section
    
        // Cleanup observer on unmount
        return () => {
          if (educationWrapper) observer.unobserve(educationWrapper);
          if (degreeWrapper) observer.unobserve(degreeWrapper);
          if (itWrapper) observer.unobserve(itWrapper); // Cleanup IT section observer
        };
      }, []); 


    
    









  
    return (
        
        <>



        
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
            
            
            



                                <header className="Header-Container" id="header">

                    <div className="Header-Wrapper">

                    <div className="header-content">
                        <div className="font-end-text"><div><h3>Hi <img src={HandImage} alt=""></img> I'm Milton Andrew Johnson,  a Full Stack Web Developer</h3></div></div>
                        
                        <div className="header-links-wrapper">
                        <div onClick={Hire} className="hire"><div><button className="hire">Contact Milton</button></div></div>
                        <div onClick={ResumeDownload}><div><button  className="resume" > Resume</button></div></div>
                        <div onClick={coverLetter}><div><button  className="cl" > Cover Letter</button></div></div>


                        
                        </div>

                        

                        

                        

                    </div>



                    <div className="header-image">
                        <img style={{width: '520px'}} src={HeaderImage} alt=""></img>
                    </div>




                    </div>



                    </header>






                    <div className={'education-container'}>
                                    <div className={'education-wrapper'}>

                                        <div><h3>EDUCATION</h3></div>

                                    </div>



                                </div>





                                <div className={'degree-container'}>
                                    <div className={'degree-wrapper'}>

                                            <div><div>BIST INFORMATION TECHNOLOGY- SOFTWARE ENGINEERING</div></div>

                                    </div>




                                </div>
                                
                                
                                
                                
                                






                                                    <main ref={sectionRef} className={`Main-Content ${sectionIsVisible ? 'visible' : ''}`} id="content">
                                    <div className="Main-Wrapper">
                                        <div className="about-content">
                                            <div><h3>About Me</h3></div>
                                            <div><hr /></div>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    <div className="About-Me-Wrapper">
                        <div className="about-me-content"></div>

                        <div className="about-me-content-bio">
                            <div>
                            <div>
                                <h3>Hi, I'm Milton — a Full Stack Developer</h3>
                                    <h4>Passionate about building modern web applications</h4>
                            </div>
                            <div>
                               <p> I hold a Bachelor of Science in Information Technology with a concentration in Software Engineering
                                 from Middle Georgia State University. As a Full Stack Developer, I specialize in crafting responsive, 
                                 user-centric web and mobile applications using modern technologies like React, Node.js, TypeScript, and AWS.
                                My technical experience includes building scalable platforms in real-world environments—most recently
                                 during a hands-on internship with Next Play Nation, where I helped deliver a secure, real-time event and 
                                 internship management platform using WebSockets, Docker, AWS services, and CI/CD pipelines.
                             
                                I’m skilled across both Front-End and Back-End stacks and bring a strong foundation in UI/UX design,
                                 RESTful APIs, database integration, and DevOps best practices. I build with performance, accessibility,
                                  and maintainability in mind, continuously learning to stay current with evolving tech trends.
                                My portfolio includes e-commerce applications, mobile apps, and full-stack platforms
                                 that reflect my ability to deliver clean, scalable code and production-ready solutions—whether 
                                 independently or as part of an Agile team.
                                Explore my work via the GitHub and LinkedIn icons provided. I’m excited to bring thoughtful engineering,
                                 creativity, and problem-solving to every project I work on.</p>
                            </div>
                            </div>
                        </div>
                        </div>



                                    <div className="About-Me-Links-Wrapper">
                                    <div>
                                    <div onClick={() => handleExternalNavigation('https://github.com/jesusfaithandwordisinmyheartalways')}><img src={GitHub} alt=""></img></div>
                                    </div>

                                    <div>
                                    <div onClick={() => handleExternalNavigation('https://www.linkedin.com/in/andrew-johnson-64632199/')}><img src={Linkedin}  alt=""></img></div>
                                    </div>


                                    </div>


                                </main>










                                <div ref={sectionTech} className={`Technologies-Container ${sectionIsVisible ? 'visible' : ''}`} id="content">


                        <div className="Tech-Wrapper" id="skills">
                            <div>
                            <div><h3>Skills</h3></div>
                                <hr />
                            </div>
                        </div>
                        
                        
                        
                        <div className="Tech-Skills-Wrapper">
                     <div className="know-text">
                    <div><h3>My Experience</h3></div>
                    <div>
                    <p>
                        As a confident and adaptable Full Stack Web Developer, I’ve honed my ability to tackle complex challenges 
                        across the software development lifecycle—from concept to deployment. Through my internship at Next Play Nation, I built a
                        secure, scalable, real-time web platform in under a month, leading both client-side and server-side development. I engineered critical 
                        features like a dynamic admin panel, a real-time event calendar powered by WebSockets & Socket.IO, and 
                        integrated CI/CD pipelines for seamless AWS-based deployment. This production-grade application reflected my strong grasp of system architecture, 
                        performance optimization, and user-centric design.

                        My technical expertise spans the full stack. On the client side, I specialize in React.js with TypeScript, leveraging React Hooks, Context API, and modern UI frameworks like Tailwind CSS to build responsive, interactive user interfaces. I also have experience with React Native for cross-platform mobile development and use tools like Figma to design intuitive, polished UX.

                        On the server side, I’m skilled in Node.js, Express.js, and building robust RESTful APIs with secure, 
                        scalable architecture. I also have hands-on experience developing backend services in Java using Spring Boot, implementing JWT-based authentication, MongoDB integration, and Dockerized microservices within a multi-container setup. This includes orchestrating full-stack communication between client and server using secure HTTP endpoints and environment-based configuration.

                        My backend experience includes advanced topics like real-time communication, rate limiting, role-based authentication, 
                        error logging, and Docker containerization. I’ve also deployed applications using AWS services such as EC2, Amplify, and Elastic Beanstalk.

                        Beyond code, I embrace collaboration, Agile workflows, and continuous learning. I thrive in fast-paced environments where I can solve problems 
                        creatively and deliver high-impact solutions. With a strong foundation in both frontend and backend technologies, 
                        I’m prepared to contribute immediately and grow within a high-performing development team.
                    </p>
                                        </div>
                </div>




                                            <div className="image-wrapper">

                            <div className="image-language">

                                <img src={TS} alt="" loading="lazy" ></img>

                                <img src={tailwind_css} alt="" loading="lazy" ></img>

                                <img src={Docker} alt="" loading="lazy" ></img>
                                <img src={AWS} alt="" loading="lazy" ></img>



                                

                                <img src={ReactLogo} alt=""></img>

                                <img src={ReactNativeLogo} alt=""></img>

                                <img src={MongoDB} alt=""></img>

                                <img src={PostgresSQL_Image_Logo} alt=""></img>


                                <img src={ExpressJs} alt=""></img>
                                
                                
                                <img src={NodeJs} alt=""></img>

                                <img src={JavaScript} alt=""></img>

                                <img src={JAVA_LOGO} alt=""></img>

                                <img src={SPRING_BOOT} alt=""></img>


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













            </div>        





                   
                                </div>













                                  {/*----------------------------------MY WORTH--------------------------------------------*/}


                        <div className="My-Worth-Container" id="worth">
                            <div className="my-worth-wrapper">

                                    <div className="dev-section">
                                        <div><img src={webdevelopment_image} alt=""></img></div>
                                        <div><h3>Web Development</h3></div>
                                        <div><p>As a web developer, I design and build dynamic, functional websites using 
                                        a blend of front-end and back-end technologies. I specialize in creating responsive 
                                        interfaces that prioritize usability and performance. From e-commerce platforms to custom web 
                                        applications, I bring ideas to life through clean, scalable code and thoughtful design.
                                        </p></div>
                                    </div>



                                    <div className="dev-section">
                                        <div><img src={webdevelopment_image} alt=""></img></div>
                                        <div><h3>UI Development</h3></div>
                                        <div><p>I specialize in translating design mockups into responsive, interactive user interfaces using HTML,
                                         CSS, and JavaScript. My focus is on creating visually engaging and intuitive digital experiences
                                          that enhance usability and support seamless interaction. With a strong eye for detail and a user-first approach, 
                                        I aim to deliver interfaces that are both functional and aesthetically refined. </p></div>
                                    </div>



                                    <div className="dev-section"> 
                                        <div><img src={webdevelopment_image} alt=""></img></div>
                                        <div><h3>UI Designing</h3></div>
                                        <div><p>UI design is centered on both aesthetics and usability. As a UI designer,
                                         I create visually engaging layouts, select cohesive color schemes, and design intuitive navigation systems. 
                                         I focus on details such as typography, spacing, and visual consistency to ensure a polished user experience.
                                         My goal is to elevate the overall look and feel of digital products while maintaining functionality and clarity.
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



                            <div className="work"  >
                                    <div><img src={Internship} alt="" /></div>
                                    <div><h3>Full Stack Developer-Internship Web/ Mobile & Admin Panel(MERN)</h3></div>
                                    <div><p> 
                                    <br></br>
                                    Containerized the full stack application using Docker 
                                    <br></br>
                                    Engineered a Live Event Calendar allowing real-time event publishing 
                                    <br></br>
                                    Backend infrastructure on AWS EC2/Elastic Beanstalk to support REST APIs, 
                                    <br></br>
                                    Developed a robust Admin Panel with full control over internships, user management, and live event creation.
                                    <br></br>
                                    Collaborated closely with the CEO and development team in an Agile environment,
                                   </p></div>
                                    <div><h3>Docker | AWS (Amplify, EC2, Elastic)| Agile| TypeScript| TailwindCSS </h3></div>
                                    <div className="case-study-wrapper">
                                        <div>
                                        <span className="work-link" 
                                                onClick={() => handleExternalNavigation('https://nextplayinternshipclient.onrender.com/')}>
                                                Link To Project</span>
                                            </div>
                                 

                                    </div>
                            </div>







                            <div className="work"  >
                                    <div><img src={Dog_Ariival} alt="" /></div>
                                    <div><h3>MERN Dog Store E-commerce Web & Admin Panel</h3></div>
                                    <div><p> SidebarCart Context | Count Up & Infinite Scroll Animation | User Auth Nav 
                                    <br></br>
                                    Google Pay | Multiple User Filters |
                                    Cloudinary & Multer Server Feature | 
                                    Reviews Pagination & Filters Features </p></div>
                                    <div><h3>MongoDB | React | Nodejs | Express</h3></div>
                                    <div className="case-study-wrapper">
                                        <div>
                                        <span className="work-link" 
                                                onClick={() => handleExternalNavigation('https://dogsbreedwebappclient.onrender.com/')}>
                                                Link To Project</span>
                                            </div>
                                    <Link to="/simple/case/study" className="case-study">
                                
                                    </Link>

                                    </div>
                            </div>




                            
                                    <div className="work"  >
                                    <div><img src={simpleweb_image} alt="" /></div>
                                    <div><h3>MERN ShoeStore E-commerce Web & Mobile App</h3></div>
                                    <div><p>Auth Nav | Marquee Animation | StripePayment
                                        <br></br>
                                    Duplicate Account Prevent | Server-Side Security </p></div>
                                    <div><h3>Docker | MongoDB | React | Nodejs | </h3></div>
                                    <div className="case-study-wrapper">
                                        <div>
                                        <span className="work-link" 
                                                onClick={() => handleExternalNavigation('https://clientshoestoreclient.onrender.com/')}>
                                                Link To Project</span>
                                            </div>
                                    <Link to="/simple/case/study" className="case-study">
                                    <div>See Case Study</div>
                                    </Link>

                                    </div>
                            </div>







                            <div className="work"  >
                                    <div><img src={MERN_JAVA} alt="" /></div>
                                    <div><h3>JAVA Server Side Full Stack User Web  App</h3></div>
                                    <div><p>Authentication| Java with Spring Boot, integrating with MongoDB | 	
                                    Containerized both client (React) and server (Spring Boot) applications using Docker, 
                                        <br></br>
                                    RestFul API| Server-Side Security </p></div>
                                    <div><h3>Spring Boot | JAVA | Docker | MongoDB | TypeScript | TailwindCSS</h3></div>
                                    <div className="case-study-wrapper">
                                        <div>
                                        <span className="work-link" 
                                                onClick={() => handleExternalNavigation('https://fsjavaformclient.onrender.com/')}>
                                                Link To Project</span>
                                            </div>
                                   

                                    </div>
                            </div>









                            <div className="work">
                            <div><img src={clothing_store} alt="" /></div>
                            <div><h3>MERN Clothing Store E-commerce Web App</h3></div>
                            <div><p>Filter Items | Search Bar | PayPal Integration | Server-Side Security</p></div>
                            <div><h3>MongoDB | React | Nodejs | Express</h3></div>
                            <div className="case-study-wrapper">
                                        <div>
                                        <span className="work-link" 
                                                onClick={() => handleExternalNavigation('https://clothingstore-frontend.onrender.com/')}>
                                                Link To Project</span>
                                            </div>
                                    <Link to="/clothing/case/study" className="case-study">
                                    <div>See Case Study</div>
                                    </Link>

                                    </div>
                            </div>






                            <div className="work" onClick={() => handleExternalNavigation('https://earpodclient.onrender.com/')}>
                            <div><img src={ear_pod_landpage} alt="" /></div>
                            <div><h3>Ear Bud LandPage</h3></div>
                            <div><p>Advanced Image Sequence Scroll Animation | Animation  Features
                            <br></br>
                            UX/UI Design</p></div>
                            <div><h3>ReactJs </h3></div>
                            <span className="work-link" onClick={() => handleExternalNavigation('https://earpodclient.onrender.com/')}>Link To Project</span>
                            </div>






                            <div className="work" onClick={() => handleExternalNavigation('https://expressrestfulapidoctorpage.vercel.app//')}>
                            <div><img src={doctor_land_page} alt="" /></div>
                            <div><h3>Doctor LandPage</h3></div>
                            <div><p>Endless Interactive Animation Cycle | Responsive Web | UX/UI Design</p></div>
                            <div><h3>Nodejs | Express | TypeScript</h3></div>
                            <span className="work-link" onClick={() => handleExternalNavigation('https://expressrestfulapidoctorpage.vercel.app//')}>Link To Project</span>
                            </div>






                            <div className="work"  >
                            <div><img src={ReactNativeMobileApp} alt="" /></div>
                            <div><h3>React Native College University Mobile App</h3></div>
                            <div><p>Pagination | | Image Carousel | Search Filter | User Feedback</p></div>
                            <div><h3>React Native | NavigationContainer | ScrollView</h3></div>
                            <div className="case-study-wrapper">
                                        <div>
                                        <span className="work-link" 
                                                onClick={() => handleExternalNavigation('https://reactnativemobileapp.vercel.app/')}>
                                                Link To Project</span>
                                            </div>
                                    <Link to="/campus/case/study" className="case-study">
                                    <div>See Case Study</div>
                                    </Link>

                                    </div>
                            </div>




                            <div className="work" onClick={() => handleExternalNavigation('https://tailwindcsslandpageclient.onrender.com')}>
                            <div><img src={tailwind_css_landpage} alt="" /></div>
                            <div><img src={tailwind_css_landpage_mobile} alt="" /></div>


                            <div><h3>TailwindCSS ReactJs Land Page | Mobile </h3></div>
                            <div><p>Web, Mobile UX/UI Design</p></div>
                            <div><p>TailwindCSS | ReactJs | Animation</p></div>
                            <span className="work-link" onClick={() => handleExternalNavigation('https://tailwindcsslandpageclient.onrender.com')}>Link To Project</span>
                            </div>






                            <div className="work" onClick={() => handleExternalNavigation('https://travelapp-react-js.vercel.app/')}>
                            <div><img src={TravelLandPage} alt="" /></div>
                            <div><h3>Travel Land ReactJs Web App</h3></div>
                            <div><p>Web, UX/UI Design</p></div>
                            <div><p>ReactJs | User Re-routing | Animation</p></div>
                            <span className="work-link" onClick={() => handleExternalNavigation('https://travelapp-react-js.vercel.app/')}>Link To Project</span>
                            </div>







                            <div className="work" onClick={() => handleExternalNavigation('https://culture-search-recipe.vercel.app/')}>
                            <div><img src={RecipeSearchImage} className="image-recipe" alt="" /></div>
                            <div><h3>Recipe Culture Search Web App</h3></div>
                            <div><p>Web, UX/UI Design (Mobile, Tablet Land & Login)</p></div>
                            <div><h3>JavaScript | User Redirection | Animation</h3></div>
                            <span className="work-link" onClick={() => handleExternalNavigation('https://culture-search-recipe.vercel.app/')}>Link To Project</span>
                            </div>


                            <div className="work" onClick={() => handleExternalNavigation('https://reactnativegotocalculator.vercel.app/')}>
                            <div><img src={ReactNativeCal} alt="" /></div>
                            <div><h3>React Native Calculator Mobile App</h3></div>
                            <div><p>Responsive App | Mobile Screen Design</p></div>
                            <div><h3>React Native | TouchableOpacity | StyleSheet</h3></div>
                            <span className="work-link" onClick={() => handleExternalNavigation('https://reactnativegotocalculator.vercel.app/')}>Link To Project</span>
                            </div>


                            <div className="work" onClick={() => handleExternalNavigation('https://marketdata-typescript-s4n4.vercel.app/')}>
                            <div><img src={StockMarketScreenshot} alt="" /></div>
                            <div><h3>Popular Stock Market Web App</h3></div>
                            <div><p>Responsive Web | Laptop | UX/UI Design</p></div>
                            <div><h3>TypeScript | JSON | Animation</h3></div>
                            <span className="work-link" onClick={() => handleExternalNavigation('https://marketdata-typescript-s4n4.vercel.app/')}>Link To Project</span>
                            </div>








                            <div className="work" onClick={() => handleExternalNavigation('https://www.linkedin.com/feed/update/urn:li:activity:7278737121689919488/')}>
                            <div><img src={ChatApp} alt="" /></div>
                            <div><h3>WebSocket Chat App - Full Stack</h3></div>
                            <div><p>Responsive App | Laptop Screen Design</p></div>
                            <div><h3>Socket.io Library | Nodejs | Reactjs</h3></div>
                            <span className="work-link" onClick={() => handleExternalNavigation('https://www.linkedin.com/feed/update/urn:li:activity:7278737121689919488/')}>Link To Project</span>
                            </div>



                            <div className="work"  >
                            <div><img src={PostgresSQL_Image} alt="" /></div>
                            <div><h3>TypeScript PostgrelSQL Authentication </h3></div>
                            <div><p>Web App</p></div>
                            <div><h3>PostgresSQL | TypeScript | MongoDB | Nodejs </h3></div>
                            <div className="case-study-wrapper">
                                        <div>
                                        <span className="work-link" 
                                                onClick={() => handleExternalNavigation('')}>
                                                No Link To Project</span>
                                            </div>
                                    <Link to="/postgres/case/study" className="case-study">
                                    <div>See Case Study</div>
                                    </Link>

                                    </div>
                            </div>





                            <div className="work"  >
                            <div><img src={tic_tak_toe} alt="" /></div>
                            <div><h3>React Tic Tak Toe Game </h3></div>
                            <div><p>Mobile Design | Web App</p></div>
                            <div><h3>React </h3></div>
                            <div className="case-study-wrapper">
                                        <div>
                                        <span className="work-link" 
                                                onClick={() => handleExternalNavigation('https://reacttictactoe.onrender.com/')}>
                                                Link To Project</span>
                                            </div>
                                    <Link to="/postgres/case/study" className="case-study">
                                    </Link>

                                    </div>
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
              <div><img src={HeaderImage}  alt=""></img></div>
        </div>

        <div className="contact-text-three">
            <div><h3>Name</h3><span>Andrew Johnson</span></div>
        </div>

        <div className="contact-text-three" >
            <div><img src={Location}  alt=""></img></div>
        </div>

        <div className="contact-text-three">
            <div><h3>Address</h3><span>Savannah, TX</span></div>
        </div>

        <div>
            <div><img src={Email}  alt=""></img></div>
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
