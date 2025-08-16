import React from 'react';
import './Skills.css';

interface SkillItem {
  name: string;
  logo?: string;
  image?: string;
  color: string;
  logoColor?: string;
  style?: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", logo: "python", color: "3776AB", logoColor: "fff", style: "flat" },
        { name: "Dart", logo: "dart", color: "01d2b9", logoColor: "04599c", style: "flat-square" },
        { name: "HTML5", logo: "html5", color: "E34F26", logoColor: "fff", style: "flat-square" },
        { name: "CSS3", logo: "css3", color: "1572B6", logoColor: "fff", style: "flat-square" },
        { name: "JavaScript", logo: "javascript", color: "F7DF1E", logoColor: "000", style: "flat-square" },
        { name: "C", logo: "c", color: "A8B9CC", logoColor: "fff", style: "flat-square" },
        { name: "Markup", logo: "markup", color: "3776AB", logoColor: "000000", style: "flat" }
      ]
    },
    {
      title: "Libraries and Frameworks",
      skills: [
        { name: "NumPy", logo: "numpy", color: "013243", logoColor: "fff", style: "flat-square" },
        { name: "Pandas", logo: "pandas", color: "150458", logoColor: "fff", style: "flat-square" },
        { name: "Plotly", logo: "plotly", color: "3F4F75", logoColor: "fff", style: "flat-square" },
        { name: "SciPy", logo: "scipy", color: "0C55A5", logoColor: "white", style: "flat-square" },
        { name: "scikit-learn", logo: "scikitlearn", color: "F7931E", logoColor: "fff", style: "flat-square" },
        { name: "Keras", logo: "keras", color: "D00000", logoColor: "white", style: "flat-square" },
        { name: "TensorFlow", logo: "tensorflow", color: "FF6F00", logoColor: "fff", style: "flat-square" },
        { name: "PyTorch", logo: "pytorch", color: "EE4C2C", logoColor: "fff", style: "flat-square" },
        { name: "Langchain", logo: "langchain", color: "43B02A", logoColor: "fff", style: "flat-square" },
        { 
          name: "Fast.AI",
          image: "https://repository-images.githubusercontent.com/487949797/588d1667-9115-4d58-b2f7-955a33b88a4e",
          color: "ffffff",
          logoColor: "000000", 
          style: "flat-square" 
        },
        { 
          name: "Unsloth AI",
          image: "https://dn721905.ca.archive.org/0/items/github.com-unslothai-unsloth_-_2023-12-04_04-59-00/cover.jpg",
          color: "15b788", 
          logoColor: "ffffff",
          style: "flat-square" 
        },
        { name: "Hugging Face", logo: "huggingface", color: "FFD21E", logoColor: "000", style: "flat-square" },
        { name: "OpenAI", logo: "openai", color: "ffffff", logoColor: "000000", style: "flat-square" },
        { name: "Opencv", logo: "opencv", color: "0C55A5", logoColor: "ffff80", style: "flat-square" },
        { name: "ONNX", logo: "onnx", color: "ffffff", logoColor: "000000", style: "flat-square" },
        { name: "Selenium", logo: "selenium", color: "43B02A", logoColor: "fff", style: "flat-square" },
        { name: "Flask", logo: "flask", color: "ffffff", logoColor: "000000", style: "flat-square" },
        { name: "Flutter", logo: "flutter", color: "0CC1F3", logoColor: "white", style: "flat-square" },
        { name: "Bootstrap", logo: "bootstrap", color: "7952B3", logoColor: "fff", style: "flat-square" }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Anaconda", logo: "anaconda", color: "44A833", logoColor: "fff", style: "flat-square" },
        { name: "Jupyter", logo: "jupyter", color: "F37626", logoColor: "fff", style: "flat-square" },
        { name: "Google Colab", logo: "googlecolab", color: "F9AB00", logoColor: "fff", style: "flat-square" },
        { name: "Kaggle", logo: "kaggle", color: "20BEFF", logoColor: "fff", style: "flat-square" },
        { 
          name: "Visual Studio Code",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png",
          color: "ffffff",
          logoColor: "000000",
          style: "flat-square" 
        },
        { name: "GitHub", logo: "github", color: "181717", logoColor: "fff", style: "flat-square" },
        { name: "SQLite", logo: "sqlite", color: "003B57", logoColor: "fff", style: "flat-square" },
        { name: "Netlify", logo: "netlify", color: "ffffff", logoColor: "00C7B7", style: "flat-square" },
        { name: "Gradio", logo: "gradio", color: "fab500", logoColor: "fff", style: "flat-square" },
        { name: "Streamlit", logo: "streamlit", color: "20242f", logoColor: "7d343b", style: "flat-square" },
        { name: "Render", logo: "render", color: "ffffff", logoColor: "000000", style: "flat-square" }
      ]
    },
    {
      title: "Other Tools",
      skills: [
        { 
          name: "Tableau",
          image: "https://www.pngmart.com/files/23/Tableau-Logo-PNG-HD.png",
          color: "FFA500",
          logoColor: "000000",
          style: "flat-square" 
        },
        { name: "Overleaf", logo: "overleaf", color: "47A141", logoColor: "fff", style: "flat-square" },
        { name: "Figma", logo: "figma", color: "F24E1E", logoColor: "fff", style: "flat-square" },
        { name: "Stack Overflow", logo: "stackoverflow", color: "F58025", logoColor: "fff", style: "flat-square" },
        { name: "Roboflow", logo: "roboflow", color: "6706cf", logoColor: "fff", style: "flat-square" },
        { 
          name: "LabelBox", 
          image: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_6f5397785edd4310fc73c2e81e62f52f/labelbox.png",
          color: "ffffff", 
          logoColor: "000000", 
          style: "flat-square" 
        },
        {
          name: "Photoshop",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png",
          color: "31A8FF",
          logoColor: "ffffff",
          style: "flat-square"
        },
        {
          name: "Illustrator",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png",
          color: "FF9A00",
          logoColor: "ffffff",
          style: "flat-square"
        },
        {
          name: "Premiere Pro",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
          color: "9999FF",
          logoColor: "ffffff",
          style: "flat-square"
        }
      ]
    },
    //     {
    //   title: "Soft Skills",
    //   skills: [
    //     { name: "Interpersonal Communication", color: "FF6B6B", style: "flat-square" },
    //     { name: "Punctuality", color: "45B7D1", style: "flat-square" },
    //     { name: "Teamwork", color: "45BF8A0557D1", style: "flat-square" },
    //     { name: "Critical Thinking", color: "45B7D1", style: "flat-square" },
    //     { name: "Time Management", color: "88D498", style: "flat-square" },
    //     { name: "Creativity", color: "F8A055", style: "flat-square" },
    //     { name: "Problem Solving", color: "6A0572", style: "flat-square" }
    //   ]
    // }
  ];

  const generateBadgeUrl = (skill: SkillItem): string => {
    // Special handling for direct images for specific entries with their custom classes
    if (skill.name === "Fast.AI" && skill.image) {
      return skill.image;
    } else if (skill.name === "Unsloth AI" && skill.image) {
      return skill.image;
    } else if (skill.name === "Tableau" && skill.image) {
      return skill.image;
    } else if (skill.name === "Visual Studio Code" && skill.image) {
      return skill.image;
    } else if (skill.name === "LabelBox" && skill.image) {
      return skill.image;
    } else if (skill.name === "Photoshop" && skill.image) {
      return skill.image;
    } else if (skill.name === "Illustrator" && skill.image) {
      return skill.image;
    } else if (skill.name === "Premiere Pro" && skill.image) {
      return skill.image;
    } else if (skill.image) {
      // If image is provided and not one of the special cases, use it directly
      return skill.image;
    } else if (skill.logo) {
      // If logo is provided, generate shields.io URL with Roboto font
      const logoParam = skill.logo;
      const colorParam = skill.color;
      const logoColorParam = skill.logoColor || "fff";
      const styleParam = skill.style || "flat-square";
      
      return `https://img.shields.io/badge/${encodeURIComponent(skill.name)}-${colorParam}?logo=${logoParam}&logoColor=${logoColorParam}&style=${styleParam}&logoWidth=36&fontFamily=Roboto`;
    }
    
    // Fallback with Roboto font
    return `https://img.shields.io/badge/${encodeURIComponent(skill.name)}-${skill.color}?style=${skill.style || "flat-square"}&logoWidth=36&fontFamily=Roboto}`;
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <br/>
        <div>Technical Expertise</div>
      </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skills-category mb-4">
                <h3 className="category-title" style={{ fontFamily: 'Roboto, sans-serif' }}>{category.title}:</h3>
                <div className="badges-container" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  {category.skills.map((skill, skillIndex) => {
                    // Special handling for specific skills with custom badges
                    if (skill.name === "Fast.AI" && skill.image) {
                      return (
                        <div key={skillIndex} className="custom-badge fastai-badge">
                          <div className="logo-container">
                            <img src={skill.image} alt={skill.name} />
                          </div>
                          <div className="text-container">Fast.AI</div>
                        </div>
                      );
                    } else if (skill.name === "Unsloth AI" && skill.image) {
                      return (
                        <div key={skillIndex} className="custom-badge unsloth-badge">
                          <div className="logo-container">
                            <img src={skill.image} alt={skill.name} />
                          </div>
                          <div className="text-container">Unsloth AI</div>
                        </div>
                      );
                    } else if (skill.name === "Tableau" && skill.image) {
                      return (
                        <div key={skillIndex} className="custom-badge tableau-badge">
                          <div className="logo-container">
                            <img src={skill.image} alt={skill.name} />
                          </div>
                          <div className="text-container">Tableau</div>
                        </div>
                      );
                    } else if (skill.name === "Visual Studio Code" && skill.image) {
                      return (
                        <div key={skillIndex} className="custom-badge vscode-badge">
                          <div className="logo-container">
                            <img src={skill.image} alt={skill.name} />
                          </div>
                          <div className="text-container">Visual Studio Code</div>
                        </div>
                      );
                    } else if (skill.name === "LabelBox" && skill.image) {
                      return (
                        <div key={skillIndex} className="custom-badge labelbox-badge">
                          <div className="logo-container">
                            <img src={skill.image} alt={skill.name} />
                          </div>
                          <div className="text-container">LabelBox</div>
                        </div>
                      );
                    } else if (skill.name === "Photoshop" && skill.image) {
                      return (
                        <div key={skillIndex} className="custom-badge photoshop-badge">
                          <div className="logo-container">
                            <img src={skill.image} alt={skill.name} />
                          </div>
                          <div className="text-container">Photoshop</div>
                        </div>
                      );
                    } else if (skill.name === "Illustrator" && skill.image) {
                      return (
                        <div key={skillIndex} className="custom-badge illustrator-badge">
                          <div className="logo-container">
                            <img src={skill.image} alt={skill.name} />
                          </div>
                          <div className="text-container">Illustrator</div>
                        </div>
                      );
                    } else if (skill.name === "Premiere Pro" && skill.image) {
                      return (
                        <div key={skillIndex} className="custom-badge premiere-pro-badge">
                          <div className="logo-container">
                            <img src={skill.image} alt={skill.name} />
                          </div>
                          <div className="text-container">Premiere Pro</div>
                        </div>
                      );
                    } else {
                      // Default handling for other skills
                      return (
                        <img 
                          key={skillIndex}
                          src={generateBadgeUrl(skill)}
                          alt={`${skill.name} Badge`}
                          title={skill.name}
                        />
                      );
                    }
                  })}
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default SkillsSection; 
