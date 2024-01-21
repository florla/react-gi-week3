import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './/challenges/Home.jsx';
import Easy from './/challenges/Easy.jsx';
import Medium from './/challenges/Medium.jsx';
import Hard from './/challenges/Hard.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* Route for the Home page */}
            <Route path="/" element={<Home />} />
            {/* Route for the Easy page */}
            <Route path="/Easy" element={<Easy />} />
            {/* Route for the Medium page */}
            <Route path="/Medium" element={<Medium />} />
            {/* Route for the Hard page */}
            <Route path="/Hard" element={<Hard />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
