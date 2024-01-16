import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./Header.jsx"



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
          <Route path="/Logement/:id" component={Logements} />
          {/* Route page d'erreur Error */}
          <Route path='/Error' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
