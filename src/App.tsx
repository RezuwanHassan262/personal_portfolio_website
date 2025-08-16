import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

// Vendor CSS first
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/vendor/bootstrap/css/bootstrap.min.css';
import './styles/vendor/bootstrap-icons/bootstrap-icons.css';
import './styles/vendor/swiper/swiper-bundle.min.css';
import './styles/vendor/glightbox/css/glightbox.min.css';

// Project fonts and base styles next
import './styles/fonts.css';
import './styles/main.css';

// Custom CSS last to allow overrides
import './App.css';
import './styles/achievement-dates.css';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Preloader from './components/common/Preloader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Preloader />
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
