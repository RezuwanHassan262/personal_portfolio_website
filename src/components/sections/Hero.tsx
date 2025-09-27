import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Typed from 'typed.js';
import './Hero.css';

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['a Researcher', 'an Engineer', 'an Artist'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section 
      id="hero" 
      className="hero position-relative"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#1A1A1A'
      }}
    >
      <Container fluid className="px-0">
        <Row className="g-0 min-vh-100">
          {/* Left content column */}
          <Col xs={12} lg={6} className="d-flex align-items-center">
            <div style={{ 
              paddingLeft: 'clamp(1rem, 5%, 3rem)',
              paddingRight: 'clamp(1rem, 5%, 3rem)',
              position: 'relative',
              zIndex: 2,
              paddingTop: '72px', // Header height
              paddingBottom: '72px' // Footer height
            }}>
              <h2 
                className="hero-title"
                style={{
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                  letterSpacing: '-0.02em',
                  fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                  lineHeight: '1.1',
                  wordBreak: 'break-word',
                  hyphens: 'auto'
                }}
              >
                Md. Rezuwan Hassan
              </h2>
              <p 
                className="hero-text"
                style={{
                  color: '#FFFFFF',
                  marginBottom: 'clamp(1.5rem, 2vw, 2rem)',
                  lineHeight: '1.4',
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)'
                }}
              >
                I'm <span ref={typedRef} style={{borderBottom: '3px solid #20BEFF', paddingBottom: '2px'}}></span>
              </p>
            </div>
          </Col>
          
          {/* Right image column */}
          <Col xs={12} lg={6} className="p-0">
            <div 
              className="sticky-top"
              style={{
                height: 'calc(100vh - 144px)', // Viewport height minus header and footer
                top: '72px', // Header height
                zIndex: 3
              }}
            >
              <Image 
                src="/assets/img/cover.jpg" 
                alt="Profile"
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
