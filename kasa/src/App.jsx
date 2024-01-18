import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";

// import Apropos from "./Pages/Apropos.jsx";
// import Logements from "./Pages/Logements.jsx"
// import Error from "./Pages/Error.jsx";

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
          <Route path="/Apropos" element={<div>mettre fonction quand la page sera faite</div>} />
          {/* Route page Logements */}
          <Route path="/Logement/:id" element={<div>component=logement</div>} />
          {/* Route page d'erreur Error */}
          <Route path='/Error' element={<div>Error</div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
