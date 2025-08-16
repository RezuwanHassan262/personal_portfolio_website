import React, { useState } from 'react';

interface ResearchItem {
  id: number;
  title: string;
  authors: string;
  venue: string;
  image: string;
  link: string;
  presentationLink?: string;  // Making it optional with '?'
  description: string;
  type: string;
  categories: string[];
}

const ResearchSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'federated', name: 'Federated Learning' },
    { id: 'power', name: 'Power Distribution System' },
    { id: 'agentic', name: 'Agentic AI' },
    { id: 'agriculture', name: 'Smart Agriculture' },
    { id: 'nlp', name: 'NLP' }
  ];

  const toggleCardExpansion = (cardId: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const researchData: ResearchItem[] = [

    {
      id: 1,
      title: "A Horizontal Federated Random Forest for Heart Disease Detection from Decentralized Local Data",
      authors: "Shafin Mahmud Jalal, Md. Rezuwan Hassan, Md Ashfaqul Haque, Md Golam Rabiul Alam",
      venue: "2022 IEEE 10th Region 10 Humanitarian Technology Conference (R10-HTC), 191-196",
      image: "/assets/img/research/federated-gif.gif",
      link: "https://ieeexplore.ieee.org/document/9929490",
      description: "In the modern world, reliable data is a thriving need in every sector. As the data increases, maintaining data privacy is also becoming a big concern. The healthcare sector is no different than that. Privacy in the healthcare sector is a topmost concern when sharing with other institutes. As data from a single healthcare institute is not always enough to get properly predicted outputs in machine learning approaches. There comes the idea of sharing data among multiple hospitals for having a more specified model with keeping the data details private. So, we have designed a model combining a federated central model and clients for the application of Federated Learning on heart disease patients' data. Here, we have implemented an approach for sharing only the model parameters among the clients and central in horizontal federated learning infused with random forest. At the evaluation of our model, we have come up with improved accuracy of 7.1, 2, and 6 percent respectively for the federated central and both clients.",
      type: "Conference Paper",
      categories: ["federated"]
    },
    {
      id: 2,
      title: "Monte Carlo Simulation for Reliability Worth Assessment of Distribution System Considering Momentary Interruptions",
      authors: "Md Tanjil Ahmed, Md Rezuwan Hassan, Palash Chandra Ghosh, Mohammad Saiful Huq, Mohaimenul Islam, AS Nazmul Huda",
      venue: "2022 International Conference on Energy and Power Engineering (ICEPE), 1-6",
      image: "/assets/img/research/monte_carlo_paper_fig.png",
      link: "https://ieeexplore.ieee.org/document/10044904",
      description: "This paper deals with the reliability worth assessment of electric power distribution system considering momentary interruptions. Reliability worth study quantifies the interrupted energy and also monetary losses incurred by utility customers due to electric power failures. Sequential Monte Carlo (MC) simulation technique is applied for the assessment purpose. The advantage of using MC simulation over the analytical approach is that uncertainty of associated random variables can be taken into consideration in MC simulation. Case studies are conducted on the Roy Billinton Test System connected to bus 4 distribution system. The results of MC simulation technique are complementary to those calculated by the analytical method.",
      type: "Conference Paper",
      categories: ["power"]
    },
    {
      id: 3,
      title: "AgriBuddy: An AI-powered, agent-based system for Bangladeshi Agriculture Using RAG and Vision Models",
      authors: "Shaleh Islam Tonmoy, Rawhatur Rabbi, Md. Rezuwan Hassan, Ruwad Naswan, Tanmoy Shome",
      venue: "Technical Report, 2024",
      image: "/assets/img/research/agriBuddy.jpg",
      link: "https://www.researchgate.net/publication/392194862_AgriBuddy_An_Agentic_AI_System_for_Bangladeshi_Agriculture_Using_RAG_and_Vision_Models",
      description: "Bangladesh's agriculture sector faces pressing challenges from climate variability, limited rural expert access, and the need for real-time, personalized farming advice. This paper presents AgriBuddy, an AI-powered, agent-based system that delivers localized agricultural recommendations in natural Bangla dialogue. AgriBuddy combines a Retrieval-Augmented Generation framework with specialized agents—Smart Query Handler, User Memory Agent, and Expert Advisory Agent—and a CNN-based vision module for rice disease detection. It draws on structured and unstructured data, including BRRI crop variants, community-sourced disease images, and advisory texts. Designed as a mobile-first chatbot, AgriBuddy lets farmers ask questions, share images, and receive actionable guidance. Early deployment shows strong accuracy in disease classification and high relevance in responses. We describe the system's design, architecture, and deployment, and outline future enhancements such as voice interaction, IoT integration, and real-time climate adaptation. With contributors' consent, a project overview video and source repository have been released on YouTube and GitHub as open-source resources.",
      type: "Technical Report",
      categories: ["agentic", "agriculture"]
    },
    {
      id: 4,
      title: "IPA Transcription of Bengali Texts",
      authors: "Kanij Fatema, Fazle Dawood Haider, Nirzona Ferdousi Turpa, Azmol Hossain, Sourav Ahmed, Navid Hasan, Mohammad Akhlaqur Rahman, Biplab Kumar Sarkar, Afrar Jahin, Md. Rezuwan Hassan, Md Foriduzzaman Zihad, Rubayet Sabbir Faruque, Asif Sushmit, Mashrur Imtiaz, Farig Sadeque, Syed Shahrier Rahman",
      venue: "Preprint, OpenReview 2024",
      image: "/assets/img/research/ipa_header.png",
      link: "https://openreview.net/forum?id=W9gVRjWL8e&referrer=%5Bthe+profile+of+Farig+Sadeque%5D%28%2Fprofile%3Fid%3D%7EFarig_Sadeque1%29",
      description: "The International Phonetic Alphabet (IPA) serves to systematize phonemes in language, enabling precise textual representation of pronunciation. In Bengali phonology and phonetics, ongoing scholarly deliberations persist concerning the IPA standard and core Bengali phonemes. This work examines prior research, identifies current and potential issues, and suggests a framework for a Bengali IPA standard, facilitating linguistic analysis and NLP resource creation and downstream technology development. In this work, we present a comprehensive study of Bengali IPA transcription and introduce a novel IPA transcription framework incorporating a novel dataset with DL-based benchmarks.",
      type: "Preprint",
      categories: ["nlp"]
    },
    {
      id: 5,
      title: "A character gram modeling approach towards Bengali Speech to Text with Regional Dialects",
      authors: "Md. Rezuwan Hassan",
      venue: "Masters Thesis, BRAC University, 2023",
      image: "/assets/img/research/w2v2_char_tok.png",
      link: "https://dspace.bracu.ac.bd/xmlui/handle/10361/25982",
      description: "The Bengali language, spoken in various regions of south-Asia and also among the Bengali diaspora, exhibits rich diversity with regional dialects or variations that reflect the cultural, geographic, and historical influences of different regional/sociocultural communities. Based on phonology and pronunciation, Bengali is said to have 5 distinct major dialectal variations, such as Eastern Bengali Dialect, Manbhumi, Rangpuri, Varendri, and Rarhi. For the dialects present in Bangladesh, even finer stratification can be done based on the used vocabulary, pronunciation, phonology, syntax, and morphology.These regional Bengali dialects are found in regions such as Bangladesh in the regions of Chittagong, Sylhet, Rangpur, Rajshahi, Noakhali, Barishal, etc possess unique phonetic, lexical, and syntactic features that set them apart from standard Bengali and also unique from each other. However, research and resources dedicated to understanding and harnessing the potential of natural language processing of regional Bengali languages remain limited. To bridge this gap, this work aims to investigate and document the characteristics of regional Bengali languages through comprehensive data-driven linguistic analyses, including phonetic and morphological studies. We also aim to study the feasibility of developing computational models, including Automatic Speech Recognition (ASR) systems, tailored to regional Bengali languages, which can facilitate applications like virtual voice command assistants and language processing tools. Our research findings will contribute to the understanding of regional Bengali languages, paving the way to foster the advancement of language technologies that can cater to the diverse linguistic needs of Bengali-speaking communities. Through this study, we intend to promote preservation of the regional dialects of the Bengali language, foster cultural inclusivity, and facilitate effective communication in the Bengali-speaking regions.",
      type: "Thesis",
      categories: ["nlp"]
    },
    {
      id: 6,
      title: "Efficient approach for reliability evaluation of distribution system considering momentary interruption",
      authors: "Tanjil Ahmed, Md. Rezuwan Hassan, Palash Chandra Ghosh, Mohammad Saiful Huq",
      venue: "Undergraduate Thesis, BRAC University, 2020",
      image: "/assets/img/research/monte_carlo_thesis_fig.png",
      link: "https://dspace.bracu.ac.bd/xmlui/handle/10361/14487",
      description: "This thesis presents an efficient method for reliability evaluation of power distribution systems considering momentary interruptions, utilizing sequential Monte Carlo simulation to analyze customer interruption costs and system performance.",
      type: "Thesis",
      categories: ["power"]
    }
  ];

  const filteredResearch = activeFilter === 'all' 
    ? researchData 
    : researchData.filter(research => research.categories.includes(activeFilter));

  return (
    <section id="researches" className="researches section">
      <div className="container">
        {/* Filter Buttons */}
        <div className="research-filters" data-aos="fade-up">
          <ul className="filter-list">
            {filters.map(filter => (
              <li 
                key={filter.id}
                className={`filter-item ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="row gy-4">
          {filteredResearch.map((research, index) => (
            <div key={research.id} className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="research-card">
                <div className="research-image">
                  <img src={research.image} alt={research.title} />
                  <div className="research-type">{research.type}</div>
                </div>
                
                <div className="research-content">
                  <h3 className="research-title">
                    <a href={research.link} target="_blank" rel="noopener noreferrer">
                      {research.title}
                    </a>
                  </h3>
                  
                  <div className="research-authors">
                    {research.authors.split(', ').map((author, idx) => (
                      <span key={idx} className={author.includes('Rezuwan Hassan') ? 'highlight-author' : ''}>
                        {author}
                      </span>
                    ))}
                  </div>

                  <div className="research-venue">
                    {research.venue}
                  </div>

                  <div className="research-description-container">
                    <div className="research-description">
                      {expandedCards[research.id] 
                        ? research.description 
                        : research.description.length > 200 
                          ? (
                            <>
                              {research.description.substring(0, 200)}
                              <span 
                                className="see-more-inline"
                                onClick={() => toggleCardExpansion(research.id)}
                              >
                                ... See More
                              </span>
                            </>
                          )
                          : research.description
                      }
                    </div>
                    {expandedCards[research.id] && research.description.length > 200 && (
                      <span 
                        className="see-less-inline"
                        onClick={() => toggleCardExpansion(research.id)}
                      >
                        See Less
                      </span>
                    )}
                  </div>
                  
                  <div className="research-link">
                    <a href={research.link} target="_blank" rel="noopener noreferrer" className="read-more">
                      Read Paper <i className="bi bi-arrow-up-right"></i>
                    </a>
                    {research.presentationLink && (
                      <a href={research.presentationLink} target="_blank" rel="noopener noreferrer" className="read-more ms-3">
                        View Presentation <i className="bi bi-camera-video"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection; 