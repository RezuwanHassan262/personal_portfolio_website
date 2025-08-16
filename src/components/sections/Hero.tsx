import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  alt: string;
  height: string;
  width: string;
}

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/md-rezuwan-hassan/",
      icon: "https://raw.githubusercontent.com/RezuwanHassan262/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg",
      alt: "LinkedIn Link",
      height: "30",
      width: "40"
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=ZUrWZhQAAAAJ&hl=en",
      icon: "https://user-images.githubusercontent.com/556268/96353342-3f386c80-10cb-11eb-9865-0c40dfe6ab8b.png",
      alt: "Google Scholar Link",
      height: "40",
      width: "40"
    },
    {
      name: "GitHub",
      url: "https://github.com/RezuwanHassan262",
      icon: "https://raw.githubusercontent.com/RezuwanHassan262/github-profile-readme-generator/master/src/images/icons/Social/github.svg",
      alt: "GitHub Link",
      height: "30",
      width: "40"
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/mdrezuwanhassan",
      icon: "https://raw.githubusercontent.com/RezuwanHassan262/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg",
      alt: "Kaggle Link",
      height: "30",
      width: "40"
    },
    {
      name: "Hugging Face",
      url: "https://huggingface.co/Rezuwan",
      icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      alt: "Hugging Face",
      height: "30",
      width: "30"
    }
  ];

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['an Engineer', 'a Researcher', 'an Artist'],
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
    <section id="hero" className="hero section dark-background">
      <img src="/assets/img/cover.jpg" alt="" data-aos="fade-in" />
      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <h2 style={{fontSize: '4rem', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '1rem'}}>Md. Rezuwan Hassan</h2>
        <p style={{fontSize: '2rem', color: '#FFFFFF', marginBottom: '2rem'}}>
          I'm <span ref={typedRef} style={{borderBottom: '3px solid #20BEFF', paddingBottom: '2px'}}></span>
        </p>
        {/* Temporarily commented out to debug the yellow graphic issue
        <div className="social-links d-flex justify-content-center">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              title={link.name}
            >
              <img 
                src={link.icon} 
                alt={link.alt} 
                height={link.height} 
                width={link.width} 
              />
            </a>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

export default Hero; 