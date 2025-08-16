import React, { useState } from 'react';
import PageTitle from '../components/sections/PageTitle';

interface ProjectLinks {
  github?: string;
  demo?: string;
  live?: string;
  dataset?: string;
  tableauDashboard?: string;
  huggingfaceSpace?: string;
  report?: string;
  presentation?: string;
  model?: string;
  datathon?: string;
  paper?: string;
}

interface Project {
  id: number;
  title: string;
  category: string[];
  image: string;
  description: string;
  technologies: string[];
  links: ProjectLinks;
  year: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'fl', name: 'Federated Learning' },
    { id: 'nlp', name: 'Natural Language Processing' },
    { id: 'cv', name: 'Computer Vision' },
    { id: 'aai', name: 'Agentic AI'},
    { id: 'mlds', name: 'Machine Learning & Data Science'},
    { id: 'dsda', name: 'Data Science and Tableau Data Analysis'},
    { id: 'hci', name: 'Human Computer Interaction'},
    { id: 'web', name: 'Web Development' },
    { id: 'ws', name: 'Web Scraping' },
    { id: 'hmai', name: 'Healthcare/Medical AI' },
    { id: 'ost', name: 'Open-Source Tools' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Demographics of Best CS Scientists Worldwide',
      category: ['ws','dsda'],
      image: 'https://i.ibb.co.com/7tRsyj9Y/Capture.png',
      description: 'This project involved web scraping from a dynamic site and using Tableau to analyze top computer scientists, highlighting key research regions and institutions.',
      technologies: ['Python', 'Selenium', 'Web Scraping', 'Dataset Curation', 'Tableau'],
      links: {
        github: 'https://github.com/RezuwanHassan262/Tableau-Practice-work-Demographics-of-Best-CS-Scientists-Worldwide/tree/main?tab=readme-ov-file',
        dataset: 'https://github.com/RezuwanHassan262/Tableau-Practice-work-Demographics-of-Best-CS-Scientists-Worldwide/blob/main/best_cs_scientist_details.csv',
        tableauDashboard: 'https://public.tableau.com/app/profile/md.reuzwan.hassan/viz/PracticeworkDemographicsofBestCSScientistsWorldwide/DemographicsofBestCSScientistsWorldwide'
      },
      year: '2023'
    },
    {
      id: 2,
      title: 'Last 100+ years of Earthquake Data Scraping Analysis and Visualization',
      category: ['ws', 'dsda'],
      image: 'https://raw.githubusercontent.com/RezuwanHassan262/Last-100-plus-years-Earthquake-Data-Analysis-And-Visualization/main/dashboard_images/8.%20Total%20Earthquake%20in%20Bangladesh%2C%20India%2C%20Bhutan%20%26%20Myanmar%20(BIBM)%20sub-region%20(Map).png',
      description: 'Scraped earthquake data from a website covering Bangladesh and neighboring countries, cleaned, curated, and visualized insights using Tableau.',
      technologies: ['Python', 'Selenium', 'Web Scraping', 'Dataset Curation', 'Tableau'],
      links: {
        github: 'https://github.com/RezuwanHassan262/Last-100-plus-years-Earthquake-Data-Analysis-And-Visualization',
        dataset: 'https://github.com/RezuwanHassan262/Last-100-plus-years-Earthquake-Data-Analysis-And-Visualization/blob/main/csv_files/EarthquakeData.csv',
        tableauDashboard: 'https://public.tableau.com/app/profile/md.reuzwan.hassan/viz/Last100yearsEarthquakeData-Analysis/LocationwiseEarthquakecountBINM'
      },
      year: '2023'
    },
    {
      id: 3,
      title: 'Aviation Accident Risk Analysis and Making Business Recommendations',
      category: ['mlds', 'dsda'],
      image: 'https://raw.githubusercontent.com/RezuwanHassan262/Aviation-Accident-Data-Analysis-and-Business-Recommendations/main/images/D1.PNG',
      description: 'Used the "Aviation Accident Database" and Tableau to identify low‐risk aircraft and recommend safer models and practices for the aviation industry.',
      technologies: ['Python', 'Scikit Learn', 'Dataset Analysis', 'Tableau'],
      links: {
        github: 'https://github.com/RezuwanHassan262/Titanic-EDA-and-Survival-Prediction',
        dataset: 'https://github.com/RezuwanHassan262/Aviation-Accident-Data-Analysis-and-Business-Recommendations/blob/main/data/Aviation_Accident_Fixed_Database.csv',
        tableauDashboard: 'https://public.tableau.com/app/profile/md.reuzwan.hassan/viz/AviationAccidentDatabaseTableauDashboards/Dashboard1'
      },
      year: '2025'
    },
    {
      id: 4,
      title: 'Titanic EDA and Survival Prediction',
      category: ['mlds', 'dsda'],
      image: 'https://raw.githubusercontent.com/RezuwanHassan262/Titanic-EDA-and-Survival-Prediction/main/figures/11.png',
      description: 'This project analyzes factors like age, class, and gender affecting Titanic survival and predicts passenger survival chances based on given features using different machine learning algorithms.',
      technologies: ['Python', 'Scikit Learn', 'Dataset Analysis', 'Machine Learning Algorithms'],
      links: {
        github: 'https://github.com/RezuwanHassan262/Titanic-EDA-and-Survival-Prediction'
      },
      year: '2024'
    },
    {
      id: 5,
      title: 'Prototype system design of Bengali humor in Unmad style',
      category: ['nlp', 'hci'],
      image: 'https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/354043071_653375850167696_1862718270923061923_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEqAv1rfv2dPcnjWYi5nvmBTxwXMXVvXzdPHBcxdW9fNxwAb_2ooqwqkcW-dpcsd40&_nc_ohc=_gZl81q1rVsQ7kNvwGQgfww&_nc_oc=Admjzv8w_jOt325yrRvaQg19r9NkfQOfDs0gKx9KfNwUsCHw2RhyF-l9MiWn2PHDJD4&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=C18AXTv03ruAl7bkyM2NWg&oh=00_AfXABGPTcwPsEzGK5bF5syJ5pRDG9Bjx9KlQxp_Jxpsnvw&oe=68A44733',
      description: 'A Bangla satirical chatbot inspired by Unmad magazine\'s comedic, sarcastic writing style. It takes a user\'s question, retrieves relevant Bangla text snippets from a knowledge base, and answers with humorous, exaggerated, and witty satire never in a direct, serious tone.',
      technologies: ['OpenAI', 'Vector Database', 'Retrieval-Augmented Generation', 'Hugging Face', 'Large Language Model', 'Prompt Engineering'],
      links: {
        github: 'https://github.com/RezuwanHassan262/USB_Unmad_Satirical_Bot',
        demo: 'https://huggingface.co/spaces/Rezuwan/USB_Unmad_Satirical_Bot?logs=container'
      },
      year: '2025'
    },
    {
      id: 6,
      title: 'Parrot Classifier',
      category: ['cv', 'ws'],
      image: '/assets/img/research/three.png',
      description: 'Scraped parrot species images, fine‐tuned a fast.ai classifier (93% accuracy on 60 species), deployed on Hugging Face Spaces, and integrated the API into another custom website.',
      technologies: ['Python', 'Image Classifier','Data Scraping', 'Hugging Face'],
      links: {
        github: 'https://github.com/RezuwanHassan262/Parrot-Species-Classifier',
        demo: 'https://parrot-classifier-60.netlify.app/',
        dataset: 'https://huggingface.co/datasets/Rezuwan/Parrot60_Dataset/tree/main',
        huggingfaceSpace: 'https://huggingface.co/spaces/Rezuwan/parrot_classifier'
      },
      year: '2023'
    },
    {
      id: 7,
      title: 'Custom Training YOLOv8 to detect Vehicle, Pedestrians, and Signboards',
      category: ['cv', 'ws'],
      image: 'https://raw.githubusercontent.com/RezuwanHassan262/YOLOv8-Custom-Training-Object-Detection/main/images/streamlit_2.PNG',
      description: 'Fine‐tuned YOLOv8n on a custom dataset from video frames, auto‐labeled with Roboflow, and deployed on Hugging Face Spaces Streamlit, and locally without API support.',
      technologies: ['Python', 'Image Classifier', 'Dataset Creation', 'Hugging Face'],
      links: {
        github: 'https://github.com/RezuwanHassan262/Custom-Training-YOLOv8-to-detect-Vehicle-Pedestrians-and-Signboards',
        demo: 'https://yolov8-custom-training-object-detection-j3besa9ppegzcdzslzsk8t.streamlit.app/',
        dataset: 'https://app.roboflow.com/bondstein-technologies-limited/bondstein_project/browse?queryText=&pageSize=50&startingIndex=0&browseQuery=true',
        huggingfaceSpace: 'https://huggingface.co/spaces/Rezuwan/Road_and_Pedestrian_Detection'
      },
      year: '2024'
    },
    {
      id: 8,
      title: 'AgriBuddy',
      category: ['aai', 'ws'],
      image: '/assets/img/research/agb.png',
      description: 'AI-powered agricultural assistant for Bangladeshi farmers using RAG and Vision Models',
      technologies: ['Python', 'Langchain', 'OpenAI', 'Faiss', 'CNN'],
      links: {
        github: 'https://github.com/AgriBRACUtion',
        report: 'https://www.researchgate.net/publication/392194862_AgriBuddy_An_Agentic_AI_System_for_Bangladeshi_Agriculture_Using_RAG_and_Vision_Models',
        presentation: 'https://youtu.be/vTWUjcQ4wnM'
      },
      year: '2025'
    },
    {
      id: 9,
      title: 'Bengali Speech Recognition with Regional Dialects',
      category: ['nlp'],
      image: '/assets/img/research/w2v2_char_tok.png',
      description: "My master’s thesis involved building a regional speech corpus and fine‐tuning Wav2Vec2 for Bengali dialect transcription. The project led to a datathon using a dataset checkpoint, after which I fine‐tuned a Whisper model and deployed it on HuggingFace Space.",
      technologies: ['Python', 'PyTorch', 'HuggingFace', 'Wav2Vec2', 'Whisper', 'ASR'],
      links: {
        github: 'https://github.com/RezuwanHassan262/Bengali-Speech-Recognition-with-Regional-Dialects',
        demo: 'https://huggingface.co/spaces/Rezuwan/Regional_Speech_ASR',
        report: 'https://www.researchgate.net/publication/387686959_A_character_gram_modeling_approach_towards_Bengali_Speech_to_Text_with_Regional_Dialects',
        model: 'https://huggingface.co/Rezuwan/regional_asr_weights',
        datathon: ''
      },
      year: '2024'
    },
    {
      id: 10,
      title: 'Automatic Bengali Transcription System',
      category: ['nlp'],
      image: 'https://tds-images.thedailystar.net/sites/default/files/styles/social_share/public/images/2022/11/18/zoom_virtual_background.jpg',
      description: 'A robust Bangla speech recognition system has been prototyped, achieving exceptional transcription accuracy. We are now in the deployment phase, aiming to provide a user‐friendly web interface for generating CSV/Excel outputs from audio inputs',
      technologies: ['Python', 'Automatic Speech Recognition', 'Whisper', 'Hugging Face'],
      links: {
        github: 'https://github.com/RezuwanHassan262/Automatic-Bangla-Transcription'
      },
      year: '2024'
    },
    {
      id: 11,
      title: 'Multi-label Film Genre Classifier',
      category: ['nlp', 'ws'],
      image: 'https://raw.githubusercontent.com/RezuwanHassan262/Multi-label-Film-Classifier/main/images/fgcw.PNG',
      description: 'Scraped movie and TV data to build a multi-label genre classifier, fine-tuned a transformer model, converted it to ONNX for faster inference, and deployed it via Flask on HuggingFace Space and OnRender.',
      technologies: ['Python', 'Text Classification', 'Roberta', 'Hugging Face'],
      links: {
        github: 'https://github.com/RezuwanHassan262/Multi-label-Film-Classifier/tree/main',
        dataset: 'https://github.com/RezuwanHassan262/Multi-label-Film-Classifier/blob/main/data/film_details.csv',
        demo: 'https://multi-label-film-classifier.onrender.com/',
        huggingfaceSpace: 'https://huggingface.co/spaces/Rezuwan/film_genre_classifier'
      },
      year: '2024'
    },
    {
      id: 12,
      title: 'A prototype system design of Heart Disease Detection using Horizontal Federated Learning with Random Forest',
      category: ['fl','hmai'],
      image: '/assets/img/research/federated-gif.gif',
      description: 'Horizontal Federated Random Forest for Heart Disease Detection from Decentralized Data',
      technologies: ['Python', 'Scikit-learn', 'Federated Learning', 'Healthcare AI'],
      links: {
        paper: 'https://ieeexplore.ieee.org/document/9929490',
        github: 'https://github.com/federated-heart-disease'
      },
      year: '2022'
    },
    {
      id: 14,
      title: 'ChemQuery: Learn Molecules Easily',
      category: ['ost'],
      image: 'https://i.ibb.co.com/YTWWqFTV/5lhg17bzk0761.jpg',
      description: 'ChemQuery is a free and open-source chemistry learning tool built as part of an educational initiative to support students worldwide. ChemQuery is Powered by PubChem & PubChemPy — designed to make chemistry learning simple and fun for students, teachers, and curious minds alike.',
      technologies: ['Python', 'Gradio', 'Hugging Face'],
      links: {
        github: 'https://github.com/RezuwanHassan262/ChemQuery',
        demo: 'https://huggingface.co/spaces/Rezuwan/ChemQuery'
      },
      year: '2025'
    },
    {
      id: 15,
      title: 'Background Remover',
      category: ['ost'],
      image: 'https://i.ibb.co.com/4g4tNWyj/Capture.png',
      description: 'Open-Source background remover tool implementation through python, gradio and huggingface. Upload an image or use an example to remove its background. Not the best image background remover out there but good enough for a free tool.',
      technologies: ['Python', 'Gradio', 'Hugging Face'],
      links: {
        github: 'https://github.com/RezuwanHassan262/Background_Remover',
        demo: 'https://huggingface.co/spaces/Rezuwan/Image_Background_Remove'
      },
      year: '2025'
    },
        {
      id: 16,
      title: 'Portfolio Website',
      category: ['wd'],
      image: 'https://i.ibb.co.com/JWJBD2MW/Capture.png',
      description: 'My personal portfolio website showcasing my projects and skills.',
      technologies: ['React', 'TypeScript', 'CSS'],
      links: {
        github: 'https://github.com/RezuwanHassan262/personal_portfolio_website',
        demo: 'https://rezuwan262.vercel.app/'
      },
      year: '2025'
    },
  ];

  // First sort projects by year (latest to oldest)
  const sortedProjects = [...projects].sort((a, b) => {
    // Convert year strings to numbers for comparison
    const yearA = parseInt(a.year, 10);
    const yearB = parseInt(b.year, 10);
    
    // Sort in descending order (latest to oldest)
    return yearB - yearA;
  });

  const filteredProjects = activeFilter === 'all' 
    ? sortedProjects 
    : sortedProjects.filter(project => Array.isArray(project.category) && project.category.includes(activeFilter));

  return (
    <>
      <PageTitle 
        title="Projects"
        description="AI projects aren't built on code alone, but on curiosity, patience, and a thousand tiny experiments."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Projects' }
        ]}
      />
      
      <section className="projects section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="project-filters" data-aos="fade-up">
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

          {/* Projects Grid */}
          <div className="projects-grid" data-aos="fade-up" data-aos-delay="100">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-year">{project.year}</div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="project-links">
                    {project.links && 'live' in project.links && (
                      <a href={String(project.links.live)} target="_blank" rel="noopener noreferrer" className="project-link">
                        Live Demo
                      </a>
                    )}
                    {project.links?.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Code
                      </a>
                    )}
                    {project.links?.paper && (
                      <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Paper
                      </a>
                    )}
                    {project.links?.report && (
                      <a href={project.links.report} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Report
                      </a>
                    )}
                    {project.links?.presentation && (
                      <a href={project.links.presentation} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Presentation
                      </a>
                    )}
                    {project.links?.model && (
                      <a href={project.links.model} target="_blank" rel="noopener noreferrer" className="project-link">
                        Model Weights
                      </a>
                    )}
                    {project.links?.datathon && (
                      <a href={project.links.datathon} target="_blank" rel="noopener noreferrer" className="project-link">
                        Datathon
                      </a>
                    )}
                    {project.links?.dataset && (
                      <a href={project.links.dataset} target="_blank" rel="noopener noreferrer" className="project-link">
                        Dataset
                      </a>
                    )}
                    {project.links?.huggingfaceSpace && (
                      <a href={project.links.huggingfaceSpace} target="_blank" rel="noopener noreferrer" className="project-link">
                        HuggingFace Space
                      </a>
                    )}
                    {project.links?.tableauDashboard && (
                      <a href={project.links.tableauDashboard} target="_blank" rel="noopener noreferrer" className="project-link">
                        Tableau Dashboard
                      </a>
                    )}
                    {project.links?.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects; 