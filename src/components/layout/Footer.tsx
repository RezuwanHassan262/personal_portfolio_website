import React from 'react';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  alt: string;
  height: string;
  width: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <h3>Md. Rezuwan Hassan</h3>
        <p>A researcher by day, an engineer by night, and an artist all the way.</p>
        <br/>
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
        <div className="container">
          <div className="copyright">
            <span>© {currentYear}</span> <strong className="px-1">Md. Rezuwan Hassan</strong> <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 