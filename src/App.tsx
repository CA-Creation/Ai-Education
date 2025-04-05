import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AITools from './pages/AITools';
import Introduction from './pages/Introduction';
import EthicalConsiderations from './pages/EthicalConsiderations';
import Tools from './pages/ProsandCons';
import Futureofai from './pages/Futureofai';
import References from './pages/References';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/AITools" element={<AITools />} />
            <Route path="/EthicalConsiderations" element={<EthicalConsiderations />} />
            <Route path="/ProsandCons" element={<Tools />} />
            <Route path="/Futureofai" element={<Futureofai />} />
            <Route path="/References" element={<References/>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;