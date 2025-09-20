import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about section" style={{ overflow: 'hidden' }}>
      <div className="container" data-aos="fade-up" data-aos-delay="100" style={{ position: 'relative' }}>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-5">
            <div style={{
              height: 'fit-content',
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <img 
                src="/assets/img/profile-img.jpg"
                className="img-fluid" 
                alt="Md. Rezuwan Hassan"
                style={{
                  borderRadius: '15px',
                  width: '100%',
                  maxHeight: '595px',
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
              />
            </div>
          </div>
          
          <div className="col-lg-7 content" style={{ overflow: 'visible', position: 'relative' }}>
            <div style={{
              marginBottom: '30px'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <h2 style={{
                  fontWeight: '700', 
                  fontSize: '26px',
                  margin: '0',
                  color: '#20BEFF',
                  lineHeight: '1.3',
                  textShadow: '0 0 20px rgba(32, 190, 255, 0.3)'
                }}>
                  Engineer | Researcher | Artist | Geek | ENFJ-T <br/> Learner | Human | Believer <br/>
                  Bengali  🇧🇩
                </h2>
                
                {/* <h3 style={{
                  fontWeight: '500',
                  fontSize: '20px',
                  color: 'var(--default-color)',
                  lineHeight: '1.4',
                  margin: '0',
                  opacity: '0.9'
                }}>
                  Human | Learner | Believer | Bengali 🇧🇩
                </h3> */}
              </div>
            </div>
            
            <p className="fst-italic py-3" style={{
              fontSize: '16px',
              color: 'var(--default-color)',
              fontStyle: 'italic',
              marginBottom: '25px',
              padding: '15px',
              background: 'var(--surface-color)',
              borderRadius: '8px',
              border: '1px solid rgba(32, 190, 255, 0.3)'
            }}>
              An artistic soul with a passion for AI
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul style={{
                  listStyle: 'none', 
                  padding: '0',
                  marginBottom: '20px'
                }}>
                  {[
                    { label: 'Birthday', value: '20 August, 1995' },
                    { label: 'Website', value: 'https://rezuwan262.vercel.app/' },
                    { label: 'Phone/WhatsApp', value: '+8801735066946' }
                  ].map((item, index) => (
                    <li key={index} style={{
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 15px',
                      background: 'var(--surface-color)',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
                        <strong style={{ 
                          marginRight: '8px', 
                          color: 'var(--heading-color)',
                          fontSize: '14px',
                          fontWeight: '600',
                          lineHeight: '1.4'
                        }}>
                          {item.label}:
                        </strong>
                        <span style={{ 
                          color: 'var(--default-color)',
                          fontSize: '14px',
                          lineHeight: '1.4'
                        }}>
                          {item.value}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="col-lg-6">
                <ul style={{
                  listStyle: 'none', 
                  padding: '0',
                  marginBottom: '20px'
                }}>
                  {[
                    { label: 'Education', value: 'Masters' },
                    { label: 'Email', value: 'rezwanhasan262@gmail.com' },
                    { label: 'City', value: 'Dhaka, Bangladesh' }
                  ].map((item, index) => (
                    <li key={index} style={{
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 15px',
                      background: 'var(--surface-color)',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
                        <strong style={{ 
                          marginRight: '8px', 
                          color: 'var(--heading-color)',
                          fontSize: '14px',
                          fontWeight: '600',
                          lineHeight: '1.4'
                        }}>
                          {item.label}:
                        </strong>
                        <span style={{ 
                          color: 'var(--default-color)',
                          fontSize: '14px',
                          lineHeight: '1.4'
                        }}>
                          {item.value}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="card" style={{
              marginTop: '10px',
              marginLeft: '-15px',
              marginRight: '15px',
              width: 'calc(100% + 15px)',
              background: 'var(--surface-color)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px'
            }}>
              <div className="card-body p-4">
                <p className="card-text" style={{
                  margin: '0',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: 'var(--default-color)',
                  textAlign: 'justify'
                }}>
                  Hey, I'm Md. Rezuwan Hassan. I am a curious mind and a heuristic learner who loves to explore and experiment with new technologies. 
                  I love to put my merit and skills to use in making the lives of general people easier by developing open-source technologies and contributing to advancing Bangla NLP research.
                </p>
                {/* 
                <p className="card-text mt-3">
                  I completed both my B.Sc. in Electrical and Electronic Engineering and my M.Sc. in Computer Science and Engineering, specializing in Artificial Intelligence, at BRAC University. AI has been my passion for years, and I'm driven to contribute meaningfully across its many domains.
                </p>
                <p className="card-text mt-3">
                  My fascination with languages—especially my mother tongue, Bengali—started early. I've always found it to be grammatically intricate yet exquisitely beautiful, a quality that shines in classical literature and song lyrics. The elegance and melody of the language drew me naturally toward Natural Language Processing as my core research area.
                </p>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 