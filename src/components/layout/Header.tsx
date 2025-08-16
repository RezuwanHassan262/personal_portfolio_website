import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';

const Header: React.FC = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const location = useLocation();
  const isHeaderHidden = useHeaderScroll();

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${isHeaderHidden ? 'header-hidden' : ''}`}>
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between" style={{paddingLeft: '20px', paddingRight: '40px', marginLeft: '0', marginRight: '0', width: '100%'}}>
        
        {/* Logo Section - Takes up half the width */}
        <div style={{width: '45%'}}>
          <Link to="/" className="logo d-flex align-items-center" style={{paddingLeft: '10px', marginLeft: '10px', alignItems: 'flex-start'}}>
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt="" /> */}
            <h1 className="sitename" style={{color: '#20BEFF', fontWeight: 'bold', fontFamily: "'Retro Signature', sans-serif", marginLeft: '0', paddingLeft: '0', textAlign: 'left', display: 'block'}}>Md. Rezuwan Hassan</h1>
          </Link>
        </div>

        {/* Navigation Section - Takes up the other half */}
        <div style={{width: '55%', display: 'flex', justifyContent: 'flex-end'}}>
          <nav id="navmenu" className={`navmenu ${isMobileNavActive ? 'mobile-nav-active' : ''}`} style={{width: '100%'}}>
            <ul className="d-none d-lg-flex" style={{width: '100%', justifyContent: 'space-between', margin: '0', padding: '0 20px 0 0', listStyle: 'none'}}>
              <li>
                <Link 
                  to="/" 
                  className={isActive('/') ? 'active' : ''}
                  onClick={closeMobileNav}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={isActive('/about') ? 'active' : ''}
                  onClick={closeMobileNav}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/resume" 
                  className={isActive('/resume') ? 'active' : ''}
                  onClick={closeMobileNav}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link 
                  to="/research" 
                  className={isActive('/research') ? 'active' : ''}
                  onClick={closeMobileNav}
                >
                  Research
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className={isActive('/projects') ? 'active' : ''}
                  onClick={closeMobileNav}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={isActive('/contact') ? 'active' : ''}
                  onClick={closeMobileNav}
                >
                  Contact
                </Link>
              </li>
            </ul>
            
            {/* Mobile Navigation Menu */}
            <ul className={`d-lg-none ${isMobileNavActive ? 'd-block' : 'd-none'}`}>
              <li>
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={closeMobileNav}
                >
                  <i className="bi bi-house"></i> Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                  onClick={closeMobileNav}
                >
                  <i className="bi bi-person"></i> About
                </Link>
              </li>
              <li>
                <Link 
                  to="/resume" 
                  className={`nav-link ${isActive('/resume') ? 'active' : ''}`}
                  onClick={closeMobileNav}
                >
                  <i className="bi bi-file-earmark-text"></i> Resume
                </Link>
              </li>
              <li>
                <Link 
                  to="/research" 
                  className={`nav-link ${isActive('/research') ? 'active' : ''}`}
                  onClick={closeMobileNav}
                >
                  <i className="bi bi-search"></i> Research
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                  onClick={closeMobileNav}
                >
                  <i className="bi bi-briefcase"></i> Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                  onClick={closeMobileNav}
                >
                  <i className="bi bi-envelope"></i> Contact
                </Link>
              </li>
            </ul>
            
            <i 
              className="mobile-nav-toggle d-xl-none bi bi-list"
              onClick={toggleMobileNav}
              aria-label="Toggle navigation menu"
            ></i>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header; 