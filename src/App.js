


import React from "react";
import Portfolio from "./pages/portfolio.js";
import { Routes, Route } from "react-router-dom";



const App = () => {
    
    return (
        <>

       
                <Routes>
                    <Route path="/" element={<Portfolio/>}/>
                </Routes>
           
        </>
    )
}



export default App