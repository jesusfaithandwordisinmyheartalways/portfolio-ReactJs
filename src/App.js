


import React from "react";
import Portfolio from "./pages/portfolio.js";
import { Routes, Route } from "react-router-dom";
import SimpleCaseStudy from "./pages/SimpleCaseStudy.jsx";
import ClothingCaseStudy from "./pages/ClothingCaseStudy.jsx";
import CampusCaseStudy from "./pages/CampusCaseStudy.jsx";



const App = () => {
    
    return (
        <>

       
                <Routes>
                    <Route path="/" element={<Portfolio/>}/>
                    <Route path="/simple/case/study" element={<SimpleCaseStudy/>}/>
                    <Route path="/clothing/case/study" element={<ClothingCaseStudy/>}/>
                    <Route path="/campus/case/study" element={<CampusCaseStudy/>}/>



                </Routes>
           
        </>
    )
}



export default App