import React from 'react';

const Interests: React.FC = () => {
  const researchInterests = [
    {
      title: "Computational Cognitive Science",
      image: "https://cdn-icons-png.flaticon.com/512/1610/1610171.png",
      description: "Understanding human cognition through computational models and AI",
      color: "#ffbb2c"
    },
    {
      title: "Human-Computer Interaction",
      //image: "https://cdn-icons-png.flaticon.com/512/1828/1828778.png",
      image: "https://www.vhv.rs/dpng/d/466-4660054_iap43345-human-computer-interaction-logo-hd-png-download.png",
      description: "Designing intuitive interfaces and user experiences",
      color: "#5578ff"
    },
    {
      title: "Computational Social Science",
      image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/42/2d33a37006421bbba9bbaf6f834b37/DSV1078_1200x1200.png",
      description: "Understanding social behavior through computational models",
      color: "#e80368"
    },
    {
      title: "Natural Language Processing",
      image: "https://cdn-icons-png.flaticon.com/512/9831/9831356.png",
      description: "Enabling machines to understand and respond to human language",
      color: "#33fd70ff"
    },
    {
      title: "Generative AI",
      image: "https://static.vecteezy.com/system/resources/previews/034/846/004/non_2x/artificial-intelligence-ai-logo-icon-vector.jpg",
      description: "Creating new content and ideas through AI",
      color: "#9e13eeff"
    },
    {
      title: "Federated Learning",
      image: "https://static.vecteezy.com/system/resources/previews/053/124/328/non_2x/synthetic-data-blue-gradient-concept-icon-type-of-privacy-enhancing-technologies-information-round-shape-line-illustration-abstract-idea-graphic-design-easy-to-use-in-article-vector.jpg",
      description: "Distributed machine learning with privacy preservation",
      color: "#d3c015ff"
    },
    {
      title: "Meta-Learning",
      image: "https://static.vecteezy.com/system/resources/previews/016/530/479/non_2x/icon-meta-learning-related-to-machine-learning-symbol-blue-eyes-style-simple-design-editable-simple-illustration-simple-icons-vector.jpg",
      description: "Learning to learn and few-shot learning approaches",
      color: "#47aeff"
    },
    {
      title: "Reinforcement Learning",
      image: "https://cdn-icons-png.flaticon.com/512/9304/9304481.png",
      description: "AI agents learning through interaction and feedback",
      color: "#ffa76e"
    },
    {
      title: "Healthcare/Medical AI",
      image: "https://static.vecteezy.com/system/resources/previews/029/272/386/non_2x/ai-in-healthcare-icon-vector.jpg",
      description: "AI applications in healthcare and medical diagnosis",
      color: "#11dbcf"
    }
  ];

  return (
    <section id="interests" className="interests section">
      <div className="container">
        <div className="section-title">
          <h2>Research Interests</h2>
          <br/>
          <div><span>I'm</span> <span className="description-title">Interested in</span></div>
          <p className="subtitle" style={{ fontSize: '1rem', color: '#666', maxWidth: '700px', margin: '0 auto', marginTop: '15px' }}>
            The topics that make me excited to explore, test ideas, and chase answers.
          </p>
        </div>

        <div className="row gy-4">
          {researchInterests.map((interest, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="features-item">
                <div className="icon">
                  <img
                    src={interest.image}
                    alt={interest.title}
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }}
                    onError={(e) => {
                      // Fallback to a default icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallbackIcon = document.createElement('i');
                      fallbackIcon.className = 'bi bi-gear';
                      fallbackIcon.style.fontSize = '2rem';
                      fallbackIcon.style.color = interest.color;
                      target.parentNode?.appendChild(fallbackIcon);
                    }}
                  />
                </div>
                <h3>{interest.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests; 