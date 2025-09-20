import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const isHeaderHidden = useHeaderScroll();
  const [expanded, setExpanded] = useState(false);
  const navbarToggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (expanded) {
        setExpanded(false);
      }
    };

    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarToggleRef.current && !navbarToggleRef.current.contains(event.target as Node)) {
        const navbarCollapse = document.getElementById('navbar-nav');
        if (navbarCollapse && !navbarCollapse.contains(event.target as Node)) {
          setExpanded(false);
        }
      }
    };

    if (expanded) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      bg="dark"
      variant="dark" 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      onToggle={handleToggle}
      className={`${isHeaderHidden ? 'header-hidden' : ''}`}
      style={{ 
        transition: 'all 0.5s',
        backgroundColor: '#000000',
        padding: '15px 0'
      }}
    >
      <Container fluid style={{ paddingLeft: '20px', paddingRight: '40px' }}>
        {/* Logo Section */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={handleNavClick}>
          <h1 
            className="sitename mb-0" 
            style={{
              color: '#20BEFF', 
              fontWeight: 'bold', 
              fontFamily: "'Retro Signature', sans-serif", 
              fontSize: '28px'
            }}
          >
            Md. Rezuwan Hassan
          </h1>
        </Navbar.Brand>
        
        {/* Navigation Section */}
        <Navbar.Toggle aria-controls="navbar-nav" ref={navbarToggleRef} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={handleNavClick}
            >
              <i className="bi bi-house d-lg-none"></i> Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={isActive('/about') ? 'active nav-link' : 'nav-link'}
              onClick={handleNavClick}
            >
              <i className="bi bi-person d-lg-none"></i> About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/resume" 
              className={isActive('/resume') ? 'active' : ''}
              onClick={handleNavClick}
            >
              <i className="bi bi-file-earmark-text d-lg-none"></i> Resume
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/research" 
              className={isActive('/research') ? 'active' : ''}
              onClick={handleNavClick}
            >
              <i className="bi bi-search d-lg-none"></i> Research
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects" 
              className={isActive('/projects') ? 'active' : ''}
              onClick={handleNavClick}
            >
              <i className="bi bi-briefcase d-lg-none"></i> Projects
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={handleNavClick}
            >
              <i className="bi bi-envelope d-lg-none"></i> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 