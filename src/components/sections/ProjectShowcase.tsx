import React, { useState } from 'react';
import ImageGallery from '../common/ImageGallery';
import OptimizedImage from '../common/OptimizedImage';

interface ProjectImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  mainImage: string;
  images: ProjectImage[];
  technologies: string[];
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
}

interface ProjectShowcaseProps {
  projects: Project[];
  activeFilter: string;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects, activeFilter }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="row portfolio-content">
        {filteredProjects.map((project, index) => (
          <div className="col-lg-4 col-md-6" key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="portfolio-item" onClick={() => handleProjectClick(project)}>
              <OptimizedImage 
                src={project.mainImage}
                alt={project.title}
                aspectRatio="4/3"
                objectFit="cover"
                className="portfolio-project-image"
              />
              <div className="portfolio-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <button className="preview-link" title="View Project" aria-label="View project details">
                  <i className="bi bi-eye"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>
              <i className="bi bi-x-lg"></i>
            </button>
            
            <div className="project-modal-header">
              <h3>{selectedProject.title}</h3>
              <p className="project-category">{selectedProject.category}</p>
            </div>
            
            <div className="project-modal-body">
              <div className="project-description">
                <p>{selectedProject.description}</p>
              </div>
              
              <div className="project-technologies-modal">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              {selectedProject.images.length > 0 && (
                <div className="project-gallery-section">
                  <h4>Project Screenshots</h4>
                  <ImageGallery 
                    images={selectedProject.images}
                    aspectRatio="16/9"
                    className="project-gallery"
                  />
                </div>
              )}
              
              {selectedProject.links && (
                <div className="project-links">
                  <h4>Project Links</h4>
                  <div className="link-buttons">
                    {selectedProject.links.live && (
                      <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <i className="bi bi-box-arrow-up-right"></i>
                        Live Demo
                      </a>
                    )}
                    {selectedProject.links.github && (
                      <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                        <i className="bi bi-github"></i>
                        View Code
                      </a>
                    )}
                    {selectedProject.links.demo && (
                      <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                        <i className="bi bi-play-circle"></i>
                        Demo Video
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectShowcase; 