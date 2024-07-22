import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Portfolio from './pages/portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


  const Load = () => {
      return (
        <>
          <Router>
            <Routes>
              <Route path='/' element={<Portfolio />}>
              

              </Route>
            </Routes>
          </Router>
        </>
      )
  }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Load />);


