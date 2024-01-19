import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Apropos from "./Pages/Apropos.jsx";
// import Logement from "./Pages/Logement.jsx"
import Error from "./Pages/Error.jsx";

import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Route page d'acceuil Home*/}
          <Route path="/" element={<Home />} />
          {/* Route page Apropos */}
          <Route path="/Apropos" element={<Apropos />} />
          {/* Route page Logements */}
          <Route path="/Logement/:id" element={<div>component=Logement</div>} />
          {/* Route page d'erreur Error */}
          <Route path='/Error' element={<Error/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
