import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          {/* Route page d'acceuil Home*/}
          <Route path="/" element= {<div>Home</div>} />
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
