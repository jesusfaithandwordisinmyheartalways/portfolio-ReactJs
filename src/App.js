


import React from "react";
import Portfolio from "./pages/portfolio.js";
import { Routes, Route } from "react-router-dom";
import SimpleCaseStudy from "./pages/SimpleCaseStudy.jsx";
import ClothingCaseStudy from "./pages/ClothingCaseStudy.jsx";
import CampusCaseStudy from "./pages/CampusCaseStudy.jsx";
import PostgresSQL from "./pages/PostgresSQL.jsx";
import NextPlayNation from "./pages/NextPlayNation.jsx";
import ShoeStore from "./pages/ShoeStore.jsx";
import Java from "./pages/Java.jsx";



const App = () => {
    
    return (
        <>

       
                <Routes>
                    <Route path="/" element={<Portfolio/>}/>
                    <Route path="/simple/case/study" element={<SimpleCaseStudy/>}/>
                    <Route path="/clothing/case/study" element={<ClothingCaseStudy/>}/>
                    <Route path="/campus/case/study" element={<CampusCaseStudy/>}/>
                    <Route path="/postgres/case/study" element={<PostgresSQL/>}/>
                    <Route path="/nextplay/test/tools" element={<NextPlayNation/>}/>
                    <Route path="/shoestore/test/tools" element={<ShoeStore/>}/>
                    <Route path="/java/test/tools" element={<Java/>}/>





                </Routes>
           
        </>
    )
}



export default App