import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';
import Quote from './components/Quote/Quote';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/math-magicians/" element={<Home />} />
            <Route path="/math-magicians/calculator" element={<Calculator />} />
            <Route path="/math-magicians/quote" element={<Quote />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
