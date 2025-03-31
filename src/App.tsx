import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import IntegratingTechnology from './pages/IntegratingTechnology';
import Introduction from './pages/Introduction';
import Introduction1 from './pages/Introduction1';
import Tools from './pages/ProsandCons';
import Administration from './pages/Administration';
import Engagement from './pages/Engagement';
import Considerations from './pages/Considerations';
import Ethics from './pages/Ethics';
import Future from './pages/Future';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


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
            <Route path="/integrating-technology" element={<IntegratingTechnology />} />
            <Route path="/introduction1" element={<Introduction1 />} />
            <Route path="/ProsandCons" element={<Tools />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/engagement" element={<Engagement />} />
            <Route path="/considerations" element={<Considerations />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/future" element={<Future />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;