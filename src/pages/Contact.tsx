import React from 'react';
import PageTitle from '../components/sections/PageTitle';
import '../styles/contact.css';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: 'bi bi-geo-alt',
      title: 'Address',
      content: 'Khilgaon, Dhaka-1219, Bangladesh',
      link: null
    },
    {
      icon: 'bi bi-telephone',
      title: 'Call/WhatsApp',
      content: '+8801735066946',
      link: 'tel:+8801735066946'
    },
    {
      icon: 'bi bi-envelope',
      title: 'Email',
      content: 'rezwanhasan262@gmail.com',
      link: 'mailto:rezwanhasan262@gmail.com'
    },
    {
      icon: 'bi bi-linkedin',
      title: 'LinkedIn',
      content: 'md-rezuwan-hassan/',
      link: 'https://www.linkedin.com/in/md-rezuwan-hassan/'
    }
  ];

  return (
    <>
      <PageTitle
        title="Contact"
        description="Feel free to reach out to me for any inquiries, collaborations, or just to say hello! I'm always open to new opportunities and connections."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact' }
        ]}
      />

      <section className="contact section">
        <div className="container">
          <div className="row gy-5">
            {/* Contact Information */}
            <div className="col-lg-12">
              <div className="contact-info" data-aos="fade-up">
                <h3 className="contact-title">Get In Touch</h3>
                <p className="contact-description">
                  I'm always open to discussing new opportunities, interesting projects, creative ideas, or opportunities to be part of your visions.
                </p>

                <div className="row">
                  <div className="col-md-6">
                    {/* First column: Address and Call/WhatsApp */}
                    <div className="contact-column">
                      {contactInfo.slice(0, 2).map((item, index) => (
                        <div key={index} className="contact-item" data-aos="fade-up" data-aos-delay={index * 100}>
                          <div className="contact-icon">
                            <i className={item.icon}></i>
                          </div>
                          <div className="contact-details">
                            <h4>{item.title}</h4>
                            {item.link ? (
                              <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.content}
                              </a>
                            ) : (
                              <p>{item.content}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* Second column: Email and LinkedIn */}
                    <div className="contact-column">
                      {contactInfo.slice(2, 4).map((item, index) => (
                        <div key={index} className="contact-item" data-aos="fade-up" data-aos-delay={(index + 2) * 100}>
                          <div className="contact-icon">
                            <i className={item.icon}></i>
                          </div>
                          <div className="contact-details">
                            <h4>{item.title}</h4>
                            {item.link ? (
                              <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.content}
                              </a>
                            ) : (
                              <p>{item.content}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 