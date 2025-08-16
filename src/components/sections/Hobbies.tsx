import React from 'react';
import './Hobbies.css';

interface HobbyItem {
  title: string;
  image: string;
  description: string;
  color: string;
}

const Hobbies: React.FC = () => {
  const hobbiesItems = [
    {
      title: "Music",
      image: "https://cdn-icons-png.flaticon.com/512/3659/3659784.png",
      description: "Enjoying and exploring various music genres and artists. Both playing and listening.",
      color: "#ff6b6b"
    },
    {
      title: "Songwriting",
      image: "https://cdn-icons-png.flaticon.com/512/2907/2907253.png",
      description: "Composing lyrics and melodies as a creative outlet. Both writing and analyzing",
      color: "#4ecdc4"
    },
    {
      title: "Workout",
      image: "https://cdn-icons-png.flaticon.com/512/2936/2936886.png",
      description: "Maintaining fitness and strength through regular workouts",
      color: "#6a0572"
    },
    {
      title: "Sketching",
      image: "https://cdn-icons-png.flaticon.com/512/1547/1547093.png",
      description: "Drawing portraits, landscapes and conceptual art",
      color: "#45b7d1"
    },
    {
      title: "Photography",
      image: "https://cdn-icons-png.flaticon.com/512/1042/1042390.png",
      description: "Capturing moments and exploring visual storytelling",
      color: "#f8a055"
    },
    {
      title: "Writing",
      image: "https://cdn-icons-png.flaticon.com/512/2593/2593482.png",
      description: "Expressing ideas through creative and technical writing",
      color: "#f67280"
    },
    {
      title: "Movies",
      image: "https://cdn-icons-png.flaticon.com/512/3418/3418886.png",
      description: "Watching and analyzing films across different genres",
      color: "#8675a9"
    },
    {
      title: "Reading",
      image: "https://cdn-icons-png.flaticon.com/512/2436/2436882.png",
      description: "Exploring literature, fiction and non-fiction books",
      color: "#88d498"
    },
    {
      title: "Cycling",
      image: "https://cdn-icons-png.flaticon.com/512/6669/6669767.png",
      description: "Exploring scenic routes and staying active on two wheels",
      color: "#c06c84"
    },
  ];

  return (
    <section id="hobbies" className="interests section">
      <div className="container">
        <div className="section-title">
          <h2>Hobbies</h2>
          <br/>
          <div><span>My</span> <span className="description-title">Hobbies &amp; Interests</span></div>
          <p className="subtitle" style={{ fontSize: '1rem', color: '#666', maxWidth: '750px', margin: '0 auto', marginTop: '15px' }}>
            The activities I enjoy and the interests I pursue in my free time.
          </p>
        </div>

        <div className="row gy-4">
          {hobbiesItems.map((hobby, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="features-item" style={{ borderTop: `3px solid ${hobby.color}` }}>
                <div className="icon" style={{ backgroundColor: `${hobby.color}15` }}>
                  <img
                    src={hobby.image}
                    alt={hobby.title}
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
                      fallbackIcon.className = 'bi bi-controller';
                      fallbackIcon.style.fontSize = '2rem';
                      fallbackIcon.style.color = hobby.color;
                      target.parentNode?.appendChild(fallbackIcon);
                    }}
                  />
                </div>
                <h3>{hobby.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px', marginBottom: '8px' }}>
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Links Section */}
        <div className="portfolio-section" data-aos="fade-up" data-aos-delay="100">
          <h5 className="portfolio-title">Find me on other platforms</h5>
          <div className="portfolio-links">
            <a href="https://open.spotify.com/user/0efb57bct29kilrcjvkw9jnjk?si=62e69017ee0b4741&nd=1&dlsi=b9e75a106e034278" target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1200px-Spotify_icon.svg.png" alt="Spotify" title="Spotify" />
            </a>
            <a href="https://www.flickr.com/photos/139437500@N06/page1" target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img src="https://www.flickrhelp.com/hc/article_attachments/4419907666708/unnamed.png" alt="Flickr" title="Flickr" />
            </a>
            <a href="https://www.imdb.com/user/ur62837581/?ref_=nv_usr_prof_2" target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png" alt="IMDb" title="IMDb" />
            </a>
            <a href="https://soundcloud.com/listener-rezwan-9" target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145809.png" alt="SoundCloud" title="SoundCloud" />
            </a>
            <a href="https://www.deviantart.com/noobdoodlerrazor" target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img src="https://cdn-icons-png.freepik.com/512/145/145800.png" alt="DeviantArt" title="DeviantArt" />
            </a>
            <a href="https://medium.com/@rezwanhasan626" target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png" alt="Medium" title="Medium" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
