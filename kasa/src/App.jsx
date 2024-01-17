import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
{/*
import About 
import Header 
import FicheLogement 
import Footer from 
import Error from 
*/}


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Route page d'acceuil Home*/}
          <Route path="/" element={<Home />} />
          {/* Route page Apropos */}
          <Route path="/Apropos" element={<div>Apropos</div>} />
          {/* Route page Logements */}
          <Route path="/Logement/:id" element={<div>component=logement</div>} />
          {/* Route page d'erreur Error */}
          <Route path='/Error' element={<div>Error</div>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
