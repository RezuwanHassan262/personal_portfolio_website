import React, { useState } from 'react';
import OptimizedImage from '../common/OptimizedImage';
import ImageModal from '../common/ImageModal';
import './Resume.css';

interface MediaItem {
  src: string;
  alt: string;
}

interface SimpleResumeItem {
  id: number;
  title: string;
  shortDescription?: string;
  description?: string | string[];
  images?: MediaItem[];
  logo?: string;
  logoAlt?: string;
}

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'achievement' | 'volunteering' | 'awards'>('experience');
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState<string>('');
  const [currentGalleryImages, setCurrentGalleryImages] = useState<MediaItem[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const experienceData = [
    {
      id: 1,
      title: "Artificial Intelligence (AI) Engineer",
      company: "RoboFication LLC",
      companyUrl: "http://robofication.net/",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQG0Bzg2J3J4FQ/company-logo_200_200/company-logo_200_200/0/1722983644704?e=1758153600&v=beta&t=fN4fq6PZU8uB5-JXyihyRNroksDJueG7rm33v8V01BI",
      logoAlt: "RoboFication LLC logo",
      employmentType: "Full-Time",
      locationType: "Remote",
      location: "Canton, Michigan, United States",
      period: "March, 2025 - Present",
      description: "RoboFication LLC is an US-based (Canton, Michigan) company that specializes in automating systems engineering and certification processes for safety-critical industries like automotive, aerospace, defense, and robotics using AI and Formal Methods. Their AI-powered tools enhance efficiency by automating safety analyses, generating precise requirements, and ensuring regulatory compliance. From AI-driven SysML generation to real-time collaboration, RoboFication LLC enhances efficiency and safety.",
      responsibilities: [
        "Develop AI-driven automation tools for safety-critical industries",
        "Incorporate advanced AI techniques to enhance existing systems",
        "Develop natural language processing capabilities for system comprehension",
        "Integrate AI functionalities into current applications",
        "Design and automate workflows to minimize repetitive tasks",
        "Collaborate with the team on various projects"
      ]
    },

    {
      id: 2,
      title: "Research Engineer",
      company: "BRAC University",
      companyUrl: "https://www.bracu.ac.bd/",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGLfIJZJcC3rQ/company-logo_200_200/company-logo_200_200/0/1631312895616?e=1758153600&v=beta&t=mLXMbe5WZtzauJr_5uRpQzlRgo3zD1O8zkujk-lsEkw",
      logoAlt: "BRAC University logo",
      employmentType: "Full-Time",
      locationType: "Hybrid",
      location: "Dhaka, Bangladesh",
      period: "February, 2024 - February, 2025",
      description: "BRAC University is a leading private university in Bangladesh, known for its innovative research and academic programs. The university focuses on interdisciplinary studies and aims to produce graduates who are not only knowledgeable but also socially responsible. The research initiatives at BRAC University emphasize real-world applications and community engagement.",
      responsibilities: [
        "Develop research protocols, pipeline, and methodology",
        "Process and analyze multiple types of raw data",
        "Automate research projects and fine-tune deep learning models",
        "Co-supervise and evaluate undergraduate thesis students",
        "Perform exam invigilation and lab classes when required"
      ],
      supervisors: [
        { name: "Dr. Farig Yousuf Sadeque", link: "https://scholar.google.com/citations?user=ULNaeowAAAAJ&hl=en" },
        { name: "Dr. Golam Rabiul Alam", link: "https://scholar.google.com/citations?user=t4GrJR4AAAAJ&hl=en" },
        { name: "Dr. S M Taiabul Haque", link: "https://scholar.google.com/citations?user=tMCRaaEAAAAJ&hl=en" },
        { name: "Dr. Swakkhar Shatabda", link: "https://scholar.google.com/citations?user=2DhrWFgAAAAJ&hl=en" }
      ],
      otherSupervisors: [
        { name: "Syed Ishtiaque Ahmed", link: "https://scholar.google.com/citations?user=A42gaP4AAAAJ&hl=en" },
        { name: "Nusrat Jahan Mim", link: "https://scholar.google.com/citations?user=HojHDRUAAAAJ&hl=en" }
      ],
      projects: [
        "Bengali Speech Recognition, Diarization, and Synthesis",
        "Transliteration and standardization of Bengali Dialects",
        "Various Bengali Text-to-Speech projects",
        "Speech to IPA Conversion",
        "Speech Biometric System (Voice signature authentication)",
        "AI-Driven Agentic Agriculture Support System",
        "Bengali humor and cultural roots with agentic AI"
      ]
    },

    {
      id: 3,
      title: "Freelance Data Scientist",
      company: "Freelance",
      companyUrl: "",
      logo: "https://cdn.worldvectorlogo.com/logos/freelancer-1.svg",
      logoAlt: "Freelancer logo",
      employmentType: "Freelance",
      locationType: "Remote",
      location: "Dhaka, Bangladesh",
      period: "July, 2022 - Present",
      description: `I sometimes do freelance Machine Learning, Deep Learning, Data Science, or any AI domain-related projects to challenge and hone my technical skills.

So far, I have pulled off a substantial amount of gigs/tasks given to me by clients from not only from Bangladesh, but also from foreign countries (US, UK & Germany to be more specific).`
    },

       {
      id: 4,
      title: "Instructor",
      company: "Lead Academy",
      companyUrl: "https://www.lead.academy/",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQEVTJ4dcwdP_g/company-logo_200_200/company-logo_200_200/0/1660997818720?e=1758153600&v=beta&t=c3p67_LZJbsvvMCl9ptSSonT_ZNGiVO47ImnKrFQPVA",
      logoAlt: "Lead Academy logo",
      employmentType: "Full-Time",
      locationType: "Hybrid",
      location: "Dhaka, Bangladesh",
      period: "October, 2023 - December, 2023",
      description: `Lead Academy approached me to design and take a NLP course by developing relevant pre-recorded contents for the course and I accepted the offer.

I worked as an instructor there on a contractual basis. So far, I have only developed one course titled "<a href="https://lead.academy/course/natural-language-processing-nlp-for-beginners-online-course" target="_blank" rel="noopener noreferrer">Natural Language Processing (NLP) for Beginners using Python</a>" where I covered all the relevant topics one might need to get started with Natural Language Processing (NLP), from the very basics of NLP to developing deep learning models and using few existing large language models. 
Apart from covering the theories, I also demonstrated the concepts practically using the programming language Python and also demonstrated the usage of a few other relevant tools and platforms.`
    },

           {
      id: 5,
      title: "Coding Instructor",
      company: "Learn Time",
      companyUrl: "https://www.learntime.com.bd/math",
      logo: "https://images.clickfunnels.com/cdn-cgi/image/width=600,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/JMBYmY/image/10386400/file/2d487c4f1b68dbc679a2a6a6c12a4e7c.png",
      logoAlt: "Learn Time logo",
      employmentType: "Part-Time",
      locationType: "Remote",
      location: "Rajshahi, Bangladesh",
      period: "November, 2021 - December, 2022",
      description: `LearnTime is a Rajshahi-based e-learning platform. This is a remote part-time job where I provide 3-4 hours a week.`,
      responsibilities: [
        "Teach programming (With Python) to people(of all ages, especially kids) from non-programming backgrounds who have little to no prior programming experience.",
        "Make notes, and documents, and set problems for the tests.",
        "Provide solutions to the problems students are struggling withh",
        "Teach data analytics using Python to interested people."
      ]
    },

    {
      id: 6,
      title: "Chief Author & Coordinator (Music Segment)",
      company: "নিয়ন আলোয় - Neon Aloy",
      companyUrl: "https://www.linkedin.com/company/neonaloy/posts/?feedView=all",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHdIeTqRknL4Q/company-logo_200_200/company-logo_200_200/0/1630611693418/neonaloy_logo?e=1758153600&v=beta&t=qhpZc85HfQ6wUL6XJH-gf7wNpFqFKzive6jDBS3ea2k",
      logoAlt: "Neon Aloy logo",
      employmentType: "Part-Time",
      locationType: "Remote",
      location: "Sylhet, Bangladesh",
      period: "November, 2017 - December, 2019",
      description: `Neon Aloy was a Sylhet based online portal founded by 4 SUST graduates. I worked at a online bangla portal or Magazine named "NEON ALOY". I started out as a trainee author and with time & proven experience, I became the Chief author & coordinator of the music segment. This was also a part time job that I used to do besides academic works & study.`,
      responsibilities: [
        "Train, proofread new authors work and provide feedback",
        "Coordinate with the editorial team for content planning",
        "Manage the music segment's content calendar",
        "Write music articles and song/album reviews of the local/international artists",
        "Interview local artists and write followup reports",
        "Organize online events and webinars featuring local artists"
      ]
    }
  ];

  const educationData = [
    {
      id: 1,
      degree: "Master of Science - M.Sc",
      field: "Computer Science Engineering",
      institution: "BRAC University",
      location: "Dhaka, Bangladesh",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGLfIJZJcC3rQ/company-logo_200_200/company-logo_200_200/0/1631312895616?e=1758153600&v=beta&t=mLXMbe5WZtzauJr_5uRpQzlRgo3zD1O8zkujk-lsEkw",
      logoAlt: "BRAC University logo",
      period: "2021 - 2023",
      thesis: {
        title: "A character gram modeling approach towards Bengali Speech to Text with Regional Dialects",
        link: "https://dspace.bracu.ac.bd/xmlui/handle/10361/25982"
      },
      supervisor: {
        name: "Dr. Golam Rabiul Alam",
        link: "https://scholar.google.com/citations?user=t4GrJR4AAAAJ&hl=en"
      },
      publication: "Approaching for a Journal with the MS thesis",
      concentration: "Natural Language Processing & Speech Recognition",
      courses: [
        "CSE710: Advanced Artificial Intelligence",
        "CSE711: Symbolic Machine Learning",
        "CSE712: Natural Language Processing",
        "CSE713: Synthetic Pattern & Speech Recognition",
        "CSE715: Neural Networks & Fuzzy Systems",
        "CSE799: Data Science"
      ]
    },


    {
      id: 2,
      degree: "Bachelor of Science - B.Sc",
      field: "Electrical and Electronics Engineering",
      institution: "BRAC University",
      location: "Dhaka, Bangladesh",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGLfIJZJcC3rQ/company-logo_200_200/company-logo_200_200/0/1631312895616?e=1758153600&v=beta&t=mLXMbe5WZtzauJr_5uRpQzlRgo3zD1O8zkujk-lsEkw",
      logoAlt: "BRAC University logo",
      period: "2016 - 2020",
      thesis: {
        title: "Efficient approach for reliability evaluation of the BUS4 distribution system considering momentary interruption. ",
        link: "https://dspace.bracu.ac.bd/xmlui/handle/10361/14487"
      },
      supervisor: {
        name: "Dr. A.S. Nazmul Huda",
        link: "https://scholar.google.com/citations?user=-QIR2lUAAAAJ&hl=en"
      },
      publication: {
        title: "Monte Carlo Simulation for Reliability Worth Assessment of Distribution System Considering Momentary Interruptions",
        link: "https://ieeexplore.ieee.org/document/10044904/"
      },
      concentration: "Networking, Signal Processing & Wireless Technologies",
      courses: [
        "EEE201 | EEE202: Electrical Circuits I | Electrical Circuits I Laboratory",
        "EEE203 | EEE204: Electrical Circuits II | Electrical Circuits II Laboratory",
        "EEE205 | EEE206: Electrical Devices I | Electrical Devices I Laboratory",
        "EEE207 | EEE208: Electrical Devices II | Electrical Devices II Laboratory",
        "EEE209: Semiconductor Devices and Materials",
        "EEE221: Energy Conversion I",
        "EEE223 | EEE224: Energy Conversion II | Energy Conversion II Laboratory",
        "EEE241: Electromagnetic Fields and Waves",
        "EEE243: Signal and Systems",
        "EEE301 | EEE302: Digital Electronics | Digital Electronics Laboratory",
        "EEE305 | EEE306: Control Systems | Control Systems Laboratory",
        "EEE341 | EEE342: Introduction to Communication Engineering | Laboratory",
        "EEE343 | EEE344: Digital Signal Processing | Digital Signal Processing Laboratory",
        "EEE361 | EEE362: Data Communication | Data Communication Laboratory",
        "EEE365 | EEE366: Microprocessor and Interfacing | Microprocessor and Interfacing Laboratory",
        "EEE411 | EEE412: VLSI Design | VLSI Design Laboratory",
        "EEE445 | EEE446: Digital Communications | Digital Communications Laboratory",
        "EEE455 | EEE456: Fundamentals of Wireless LAN | Fundamentals of Wireless LAN Laboratory"
      ]
    }
  ];

  // New tabs data (dummy/sample items)
  const achievementData: SimpleResumeItem[] = [
    {
      id: 1,
      title: "AI Hackathon - Runners up",
      shortDescription: "Issued by Bangladesh Innovation Conclave\nMay 2025",
      logo: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/352192397_1674041206449776_8403135241560079412_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGI0ZbVXxtAXHHpIg5a5gk4SkuPrp3NNXVKS4-unc01dZeVIyAXJ0S_EaWIqgZzZwU&_nc_ohc=zFAk3lnzE2wQ7kNvwGPpSvV&_nc_oc=AdkT_523-xf2jjrmPwF42WdqqGh4zD-nVHSb1yx1WRXUy0aHG0gG0nYF1qJriWGZt_k&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=A3EYHfTgPXdezMEcyR9SsA&oh=00_AfWG8om7hvldzLye81Gn_E_GxgqdoolEda7KG5Tix5RCKg&oe=68A43B8E",
      logoAlt: "Bangladesh Innovation Conclave logo",
      description: `<p>Participated in the National AI Hackathon with my team (MD. Shaleh Islam Tonmoy bhai, Tanmoy Shome, Rawhatur Rabbi, and Ruwad Naswan) named "AgriBRACUion". We participated under the Agriculture category, and we present AgriBuddy, an AI-powered, agentic support system designed to provide personalized and real-time agricultural guidance to farmers in Bangladesh. AgriBuddy combines advanced language and vision models, including a Retrieval-Augmented Generation (RAG) framework, to deliver Bangla-language recommendations through a smart chatbot.</p>

<p><strong>It supports:</strong></p>
<ul>
<li>Natural Bangla or Banglish text queries.</li>
<li>Image-based rice disease detection using CNN.</li>
<li>Context-aware farming advice tailored to the user's region, crop, and conditions.</li>
</ul>

<p><strong>Core Features:</strong></p>
<ul>
<li>Multilingual query understanding (Bangla, English, Banglish)</li>
<li>Rice disease identification from images (Total 10 classes: 9 diseases and 1 for normal case scenario)</li>
<li>Expert agricultural advisory via integrated knowledge base</li>
<li>Personalized recommendations using user profiles and memory agents</li>
<li>Tools for weather, soil condition analysis, and cultivation tips</li>
</ul>

<p><strong>Technical Highlights:</strong></p>
<ul>
<li>Modular agent-based design with Smart Query, Memory, and Expert Agents</li>
<li>CNN-based disease detection trained on the Paddy Doctor dataset</li>
<li>RAG-powered answer generation with Bangla embeddings</li>
<li>Deployment via a mobile-first Progressive Web App (PWA).</li>
</ul>

<p>Our idea was shortlisted and made it into the finals to compete against other teams with some excellent ideas as well. We didn't win first place, but we were really close. Also, the entire experience was everything. Brainstorming for ideas, coding all night after the daytime job, debugging, and lots of heuristic learning.</p>

<p>Also, a big shoutout to our professor <a href="https://scholar.google.com/citations?user=2DhrWFgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Swakkhar Shatabda</a> sir for motivating us to begin with. This project wouldn't have taken shape if Swakkhar Sir hadn't given us the initial push.</p>`,
      images: [
        { 
          src: "https://media.licdn.com/dms/image/v2/D562DAQEpOVupYh_Qfg/profile-treasury-image-shrink_1280_1280/B56ZdeXAIcG0AQ-/0/1749634778381?e=1755810000&v=beta&t=GYOTFVgZuJir8phFF5vMIgb1yzXk0Q1183gdIZJ0KsU", 
          alt: "" 
        },
        { 
          src: "https://media.licdn.com/dms/image/v2/D5622AQE21t31nRr5PA/feedshare-shrink_1280/B56ZchU_8ZGQAo-/0/1748610843245?e=1758153600&v=beta&t=GnF8XBFvzVSBSUKZqKwuYUuUVpOa7z_VkzUdypJSt-Q", 
          alt: "" 
        },
        { 
          src: "https://media.licdn.com/dms/image/v2/D5622AQHi4NX7PieWQw/feedshare-shrink_2048_1536/B56ZchU_8PGoAs-/0/1748610843065?e=1758153600&v=beta&t=HyQk4VFJfRMu5Sl9aoVdhvUaYMpHVHVsD94FL1S_7Ug", 
          alt: "" 
        },
        { 
          src: "https://media.licdn.com/dms/image/v2/D5622AQGpzzV4RWptaA/feedshare-shrink_1280/B56ZchU_8QHgAk-/0/1748610843198?e=1758153600&v=beta&t=W7X3xK-x9uRc8ny-FKqD5wBRrA_vfk5vsb9oyD5tlbM", 
          alt: "" 
        },
        { 
          src: "https://media.licdn.com/dms/image/v2/D5622AQGLiESZlMBzNQ/feedshare-shrink_1280/B56ZchU_8UG0Ak-/0/1748610843102?e=1758153600&v=beta&t=lFzLesgvFeJ4b9nX8Qc-7WLnQpd6RwZIsioleGSGQ5k", 
          alt: "" 
        },
        { 
          src: "https://media.licdn.com/dms/image/v2/D5622AQEdyJHwUByeWw/feedshare-shrink_1280/B56ZchU_8WGsAo-/0/1748610843391?e=1758153600&v=beta&t=hhHzkVACTmmtv7o3iJU-jzy86yJkaF0X35lNf5UW7qM", 
          alt: "" 
        }
      ]
    },
    {
      id: 2,
      title: "Contributed to a Google Project",
      shortDescription: "Issued by Google\nDecember 2023",
      logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
      logoAlt: "Google logo",
      description: `<p>Google approached our (Bengali.AI) founder Prio bhai for a possible collaboration with members of the Bengali.AI team with a proposal to conduct a research project related to our very own mother tongue, the language Bengali.</p>

<p>A small team was formed for this and I was one of the selected team members. Wrapped up the project within few months and submitted the work successfully to Google.</p>  

<p>It was fun working on this project. Got some better insights into my own mother tongue as well as got an initial idea of how LLM research works on Google.</p>

<p>So yeah, Officially worked & contributed to a Google project.</p>`,
      images: [
        { 
          src: "https://diplo-media.s3.eu-central-1.amazonaws.com/2024/10/google-ai-security-update-remote-phone-locking.png", 
          alt: "" 
        }
      ]
    },
    {
      id: 3,
      title: "Invitee – Google Foo Bar Challenge",
      shortDescription: "Issued by Google\nJuly 2023",
      logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
      logoAlt: "Google logo",
      description: `<p>Back in 2023, while coding for a research project, I Googled the Lambda function syntax and unexpectedly got invited to Google's Foo Bar Challenge. Google's Foo Bar Challenge is an invitation-only secret recruitment program for Google career opportunities, events, and programs.</p>

<p>The program was shut down in April 2024.</p>

<p><strong>Note:</strong> Einstein's quote, "Never memorize what you can look up in books," is a cornerstone of my learning philosophy. I hardly even try to memorize something that I know I can look up to at any time. I remember the process, not the syntax. Even as a daily data manipulation library Pandas user, I look things up as needed rather than overloading my memory with syntax. I believe if it's available out there, there's no point in remembering the syntax, as I'm just a human.</p>`,
      images: [
        { 
          src: "https://media.licdn.com/dms/image/v2/D562DAQE_lOvQu__q6w/profile-treasury-image-shrink_800_800/B56ZdebSzAHoAY-/0/1749635903382?e=1755810000&v=beta&t=NsaId64vN504i5w9ErnSJI8s1XuVEHjSpadzqhs533w", 
          alt: "" 
        },
        { 
          src: "https://media.licdn.com/dms/image/v2/D562DAQFwIiIpenvVVw/profile-treasury-image-shrink_800_800/B56ZdebPr3HEAY-/0/1749635890900?e=1755810000&v=beta&t=cWUPYmPOuygjJcYUtsIEnidM30Lq4CiXJrsRljPnfv8", 
          alt: "" 
        }
      ]
    },
    {
      id: 4,
      title: "Winner - Photography Contest",
      shortDescription: "Issued by Fotoboss\nJuly 2023",
      logo: "https://www.fotoboss.cz/wp-content/uploads/2022/04/fotobosss-logo.png",
      logoAlt: "Fotoboss logo",
      description: "Won the photography contest themed \"All about Green\" by Fotoboss.",
      images: [
        { 
          src: "https://media.licdn.com/dms/image/v2/D562DAQEA00GcmTNjTA/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1720237655596?e=1755810000&v=beta&t=Jb9ieQ_ac-ifRn7fe9_vqYMg914_96Bu9xOW3-zemsE", 
          alt: "Winning Photo" 
        },
        { 
          src: "https://media.licdn.com/dms/image/v2/D562DAQFPbuZdaiw8UQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720237597171?e=1755810000&v=beta&t=HcFZjQ-8y2HU96ZMDtMUtJHh6D7t4rwHxMEA3OCwYzk", 
          alt: "Mail Screenshot" 
        }
      ]
    },
    {
      id: 5,
      title: "100% Merit Based Scholarship Waiver for Summer 2022",
      shortDescription: "Issued by BRAC University\nApril 2022",
      logo: "https://www.bracu.ac.bd/sites/all/themes/sloth/images/f-logo.svg",
      logoAlt: "BRAC University logo",
      description: "Received a 100% tuition fee waiver as a merit scholarship based on academic results (CGPA: 4.00/4.00) up to the semester of Summer 2022."
    },
    {
      id: 6,
      title: "100% Merit Based Scholarship Waiver for Spring 2022",
      shortDescription: "Issued by BRAC University\nJanuary 2022",
      logo: "https://www.bracu.ac.bd/sites/all/themes/sloth/images/f-logo.svg",
      logoAlt: "BRAC University logo",
      description: "Received a 100% tuition fee waiver as a merit scholarship based on academic results (CGPA: 4.00/4.00) up to the semester of Spring 2022."
    },
    {
      id: 7,
      title: "Vice Chancellor's List",
      shortDescription: "Issued by BRAC University\nApril 2020",
      logo: "https://www.bracu.ac.bd/sites/all/themes/sloth/images/f-logo.svg",
      logoAlt: "BRAC University logo",
      description: "Got into the Vice Chancellor's list for achieving a GPA of 4.00 (out of a scale of 4.00) with 18 credits in the semester SPRING 2020.",
      images: [
        { 
          src: "https://i.ibb.co.com/Mx3JDt5m/Capture.png", 
          alt: "" 
        }
      ]
    }
  ];

  const volunteeringData: SimpleResumeItem[] = [
    {
      id: 1,
      title: "AI/ML Researcher | Assistant Co-ordinator",
      shortDescription: "Bengali.AI",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQF5cMCsxWhRKg/company-logo_200_200/company-logo_200_200/0/1631435147750/bengali_ai_logo?e=1758153600&v=beta&t=LkwNLfkf6RvHuhmySRsfsVx6dZEYLIHClTngBRLw9Jw",
      logoAlt: "Bengali.AI logo",
      description: `<p>Founded in 2018, Bengali.AI has been developing open-source AI language tools & technologies for the Bengali language for common people to use as well as resources for both deep learning and linguistic researchers to comprehend and understand the language better from both computational and linguistic aspects.</p>

<p>It is a non-profit initiative mostly working to solve the absence of open-sourced datasets and tools for Bengali Computer Vision/Natural Language Processing/Speech recognition, and Computational linguistic research with the ultimate aspiration of lifting our mother tongue Bengali from being a low-resourced language someday.</p>

<p>I mostly work on speech projects and with audio data.</p>

<p>Eg: Bengali speech-to-text with regional accents and dialects (Currently leading this project), Indigenous-speech-text and speech-to-IPA transcriptions, etc.</p>

<p>And different other projects as well and contribute however I can on those projects with both my technical and soft skills.</p>`,
      images: [
        { 
          src: "https://i.ibb.co.com/39BmKYVp/504277869-10222684872909678-3265587526765701363-n.jpg", 
          alt: "Bengali.AI team photo" 
        },
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/489040182_1254975679966140_6192595778372740384_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFeVFSrRYMQiadYc6n98BZX-DKzIR3Sw2L4MrMhHdLDYgf5OqyE68i_-JzawHVzbIs&_nc_ohc=Vsv-CwruwAQQ7kNvwHq8SSH&_nc_oc=AdnBrqonIIEK4dv52hMaHGEeBmJ76EmucdqgXLvsHyffmQj0gQp5JUFsXXJbGdT6npY&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=01zC03kC3_2fUQw7jWE51Q&oh=00_AfWSsDC7OTIR8t-jT22kWuoHJhgKi4yC6bSJ1p91WhfC5w&oe=68A4570C", 
          alt: "Bengali.AI media photo" 
        },
                { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/510796738_10161852941013333_8952314214951572836_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHfACHDPnlrCiwNRwsJ498291g-bmxA6ND3WD5ubEDo0GZSD60yHj15ywSCF34hQrI&_nc_ohc=IOwVNsI3uskQ7kNvwHaUAsp&_nc_oc=AdmhejpN8Chu5qzY1US4vFRObKvNwsfKnT2EWE9gEcVB4yJyPCJApprX2XIhbULh2OY&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=keeFzsWEdxi2VJBKBIQiRg&oh=00_AfUCjXIgZE79BEf7oEpxCnx_g2YwfjbNPeTIH37NIOncOg&oe=68A45570", 
          alt: "Bengali.AI media photo" 
        },
                { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/507534889_10161827284568333_428712018377438249_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFv8c0acLBDbDjfAHx0AENoiTTye0hSQAaJNPJ7SFJABpyO9RzJlP-fB9WIN_-pr6E&_nc_ohc=sA2wbA4w7n0Q7kNvwGum-b7&_nc_oc=AdmoJr_ZPEtTaykh_tyXFJPV0rKoirR5oKdFNOEG9x684S6q3JoE2IGr6zykqDp5z4k&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=pG33Y4Kwvx5neX6GXdY8aA&oh=00_AfUsEHotb6xnXKqHwQlDRImAIBpDJFcNJ8ZlLe0rbHQBVg&oe=68A43C9A", 
          alt: "Bengali.AI media photo" 
        }
      ]
    },
    {
      id: 2,
      title: "Workshop Host & Mentor - National AI Workshop on Speech Recognition",
      shortDescription: "Islamic University of Technology • March 2024",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHLr9QND3RP0g/company-logo_200_200/company-logo_200_200/0/1631327623311?e=1758153600&v=beta&t=xMiPiIt1zsw34Z0n0mDTc_d3tz5Tlyohd_xFBiLvEHU",
      logoAlt: "Islamic University of Technology logo",
      description: `<p>Bengali.AI, along with IUT Computer Society(IUTCS), is running a nationwide AI competition called "ভাষা-বিচিত্রা" (Language Variety) to find the next big talents in speech recognition for regional dialects.</p>

<p>Despite advancements in Automatic Speech Recognition (ASR), our findings indicate limitations in current technology for accurate zero-shot and fine-tuning performance on local dialects. This challenge highlights a critical area for further research and development. This datathon targets this gap by seeking solutions that enhance ASR capabilities for diverse Bengali dialects, a language lacking extensive technological support for these regional variations.</p>

<p>Along with me & my teammates from Bengali.AI, "Team Apocalypse" will also took the workshop with us side by side.</p>`,
images: [
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/491921953_1261208486009526_8710632532140493549_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEVz5s4PwbNIs_AI_XMYH1vnz-AVf3RoyifP4BV_dGjKGB5NYgd-E2M4ulucovwXH0&_nc_ohc=7I4waX3xy2YQ7kNvwEoQYQ9&_nc_oc=AdlKsEzJ8rPM4PWRyXxzTCPto8sb72AYp8kX8_idooXitYYhe3lB_6_BdvTXIUXtrxk&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=UuXRVfnCmwFG9cfENjWtww&oh=00_AfVaZO5D9s3_fXZUxLp7fBvdhIb0xDhOPZ4EgGVduQ_iFQ&oe=68A4496B", 
          alt: "" 
        }
      ]
    },
    {
      id: 3,
      title: "Workshop Host & Mentor – NLP Datathon Bootcamp",
      shortDescription: "United International University • February 2024",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFisQycB47Ruw/company-logo_200_200/company-logo_200_200/0/1631304428944?e=1758153600&v=beta&t=7GXxC8QpxKDNeTGZFSCq15aRxL6V_ussR1uPDhpkfDk",
      logoAlt: "United International University logo",
      description: `<p>Took a workshop on behalf of Bengali.AI along with some of my teammates for the inter-university natural language processing competition's bootcamp, organized by UIUCCL</p>`,
      images: [
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/490386056_1232073462254029_5789873616005259443_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGaqfNl-UGXhATeZEjoFLWM7ew4DKFaj5Xt7DgMoVqPlVVxlTyS6HibSHVJQx9qibc&_nc_ohc=Lt8JsOwpqOQQ7kNvwFM1o78&_nc_oc=AdmmkFgqczNTBFXWUfgz4JBbiOeklVVh99CFv29qNfrALVUIrUzQTznjFhvFhqjgXcg&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=Nmyl314A5dimCVgoYF93Ng&oh=00_AfXzbhfmHkWM7u3KHgb7ga8s19oqBRJ5k7X5p6HH05VcMQ&oe=68A42233", 
          alt: "" 
        },
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/490193579_1232073405587368_9025030685512605817_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeET8AkbO59RWsfVIGc_NElGf1rACdOpw8J_WsAJ06nDwgtOUkzWsHhhgFd8qIS_mNI&_nc_ohc=pgizUAHXcxIQ7kNvwGCu-TJ&_nc_oc=AdnuAcDD-WNTB1jnm5bGw6RTE4aN_FcWLzJmNCwdU04wWih2yudMi7VarvpAGg-jAB8&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=_e2G5R_3V3zo19CeXiIAuw&oh=00_AfWJ3AdYDl5aq0G2X30qk4O1561HMG05thWJEXpnh30yEg&oe=68A4338E", 
          alt: "" 
        },
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/490765862_1232073402254035_3229201619464281702_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGr0Qt_k_nlvxk2lw8KJa_hl2C48MUpQgGXYLjwxSlCAds6XH6iYeAXYKEVMzs502Q&_nc_ohc=dbFZWPlIj-UQ7kNvwGZws8r&_nc_oc=AdncCt4DbxOV4tJR5YB63SkdXPqop4L2MxB-6ALzzgjguU--s98BwCQq0TC2Z4E-94A&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=PeK7hbT1zWcQ6eWSTAZVKw&oh=00_AfVd5WnQZwSQCfUqnfTQQaI4paG278gLka02S8G1y_VWmw&oe=68A43271", 
          alt: "" 
        },
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/490501709_1232073158920726_920090749360354399_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEohJIBrQf4Ly1wmgSfxlE8AJuFi5v_zKgAm4WLm__MqKgxSed_yn9s2G-afYFynPA&_nc_ohc=5McYNxuCljYQ7kNvwHzsKAo&_nc_oc=AdmACzwwh9Ikh_chdVdmbUoggb-qvBnGmOLxfo0d3bHt5s93gYvzN2UnwcYJgkVrtsI&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=mvgxCXww0XQpI-gXT_0ytg&oh=00_AfUCEQf9RDo5IQs-uUF8uMuLB3V8nJ4iob0dp9cd6qp-7A&oe=68A44EEE", 
          alt: "" 
        }      
      ]
    },
    {
      id: 4,
      title: "Blood Donor",
      shortDescription: "Quantum Foundation • February 2021 - Present",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGvdLqspC1XMw/company-logo_200_200/company-logo_200_200/0/1630567849165?e=1758153600&v=beta&t=VY0HZ7kJAt6lAlsNC4ED_b6Vi50oF8N43GLyOahWr4o",
      logoAlt: "Quantum Foundation logo",
      description: `<p>I donate my blood here in every 4 months.</p>`
    },
    {
      id: 5,
      title: "Content Moderator and Musician",
      shortDescription: "Hawai Mithaiyar Gan • January 2019 - December 2020",
      logo: "https://scontent.fdac99-1.fna.fbcdn.net/v/t1.6435-9/183292747_318408026295977_404246945500336863_n.png?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGpBcOTzsO0009RLJiLQN9lQY-wZRRqulpBj7BlFGq6WiS-7-1wUd5Bnh80u-L6ZvE&_nc_ohc=W2JIfxvk0JUQ7kNvwEHFdwj&_nc_oc=Adm3ktwiqx8WYb1idxInmNV3vQniO_Pk58z23Agts2TVl6IgA40wP37pqu0LMkLFx4w&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=1B3qo1LIbA4Ogo1c9Hu8Qg&oh=00_AfXbEmlS483TiqvJsLEPPco8P8jpdzEG6dhJ7EjFSK-HZQ&oe=68C5E007",
      logoAlt: "Hawai Mithaiyar Gan logo",
      description: `<p>Hawai Mithaiyar Gan is basically a duo of 2 multi-instrumentalist "Murshedul Arefin Riyad" & "Tasin Bin Noor" and also a platform for musicians from different genres to collaborate.</p>

<p>I used to plan, create, and moderate the content of their YouTube channel and social media platforms and sometimes also contributed to music.</p>

<p>Youtube Channel: https://www.youtube.com/@hawaimithaiiyergan8330</p>`,
      images: [
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t1.6435-9/103190570_175572053912909_2561835901285897052_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH_SwXkSpEdY18L3GeaK8N1l5M0w3RIN1aXkzTDdEg3VmNJLx21j3np9x_NRf6d9bM&_nc_ohc=z5JvK5mZ2CAQ7kNvwFUcbIO&_nc_oc=AdlbQ-KJFL7-23ws8SL8sNXohWoM80y7gvKBsqCCh6pbpkD3sJQntuyRjk_xh2txfCY&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=t0RE3UNVtriDWmD6lGoFYw&oh=00_AfUFJqnKb-4ZdXtQHpxEoEHOT1k-EYMoXllnUA2N11l6KA&oe=68C5CF0F", 
          alt: "" 
        },
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t1.6435-9/103853992_177504570386324_6943849262373170580_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHZ2ciKnZ94O501LeOPL5E8oxpMmVPz5pmjGkyZU_Pmmb0CTxPNeUnuwX0WfuWPcnM&_nc_ohc=a9TzxZrvhd0Q7kNvwGdTx1i&_nc_oc=AdleE6bqnSp5xNj3ysg2T68e8oLW7yvlT91NkvHKkzmb2X1FQYkPyR0TaMW46bcU0vU&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=q6ZAqDYS4NDitxghe0mZow&oh=00_AfXaGVY6D_3TXyiaRgvl6V6-_WKy-gM27DZRIJov8ldOpA&oe=68C5C24C", 
          alt: "" 
        },
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t1.6435-9/75576628_181219773348137_7744483226188940381_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeESn5tPZy6mjQPqf73sXOWD1fE2Cmr5yFnV8TYKavnIWVYpTXTQtkiqlHVJu-Hi3mU&_nc_ohc=0fLlOKoB7jQQ7kNvwHoPPvX&_nc_oc=AdmPp1-YvnT9Z903Y8NJAHdF3OKNH-C0Dzc64gLOhx4IhNA-5bpKg_x0sxBmqk-7Tt0&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=wzKUe1GqyGMZYa6z-iQuVw&oh=00_AfXJefH3vAC1XaeuEuAz94C9pSIumz7LKJkit-5ZTWWqhQ&oe=68C5D0E6", 
          alt: "" 
        },
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/468015366_1102753507861421_8267247011672576889_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHDTTL6acV0rWJKMQHaMVPS2AAx9jn2e07YADH2OfZ7TnNcSSwn7vdKogGc1Fizqyo&_nc_ohc=EPGHOVlVTRUQ7kNvwEDRvlT&_nc_oc=Adknme9vT--aAPIrJI2xe-8mZYHB4yRkR0eDcasuWCpUwOuo9XHQ9AB6FDqRUvvS0WQ&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=8EwEXpA-N1ssAQ81Y8EFaA&oh=00_AfW5Qj_Fjak1aiVGJ9vA8qehvwoKQr1kZuG-UUGAB4hPDg&oe=68A43530", 
          alt: "" 
        }
      ]
    }
  ];

  const awardsData: SimpleResumeItem[] = [
    {
      id: 1,
      title: "Adjudicator",
      shortDescription: "BRAC University\nMay 2024",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGLfIJZJcC3rQ/company-logo_200_200/company-logo_200_200/0/1631312895616?e=1758153600&v=beta&t=mLXMbe5WZtzauJr_5uRpQzlRgo3zD1O8zkujk-lsEkw",
      logoAlt: "BRAC University logo",
      description: `<p>Appointed as an adjudicator by the thesis panel committee to evaluate and score the thesis research works related to natural language processing & digital signal processing of the undergraduate students of P-2 stage and provide constructive feedback to the students.</p>`,
      images: [
        { 
          src: "https://media.licdn.com/dms/image/v2/D4D2DAQEHjkRRBssqPQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719310451031?e=1755817200&v=beta&t=Rt7YhOsZpsX_77gtTfmRNBsb9vbbaftEu7zwLXTgX18", 
          alt: "" 
        }
      ]    
    },
        {
      id: 2,
      title: "Adjudicator",
      shortDescription: "Islamic University of Technology\nApril 2024",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHLr9QND3RP0g/company-logo_200_200/company-logo_200_200/0/1631327623311?e=1758153600&v=beta&t=xMiPiIt1zsw34Z0n0mDTc_d3tz5Tlyohd_xFBiLvEHU",
      logoAlt: "Islamic University of Technology logo",
      description: `<p>I'm pleased to announce that the dataset that was utilized in this national ICT fest's datathon segment "Bhashabichitra: ASR for Regional Dialects" was an extended version of the dataset that I developed from scratch as a part of my master's thesis research which I later extended with my team here in Bengali.AI</p>

<p>Huge thanks to the IUT Computer Society(IUTCS) for orchestrating such a fantastic event. Grateful to have been a part of such a grand national event.</p>`,
      images: [
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/504874933_10222700763106923_4378757555246211495_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHa5Ts3duZYLzNFn7xVoL_WlrRBp9r1xQKWtEGn2vXFAmxUcdijJ6uI57Frfh_Ubxs&_nc_ohc=cPwfZUMqft0Q7kNvwFFPMI7&_nc_oc=AdkyVheTXVH7DJ3WCg0uJhqR3RTq8sxtJnZiikclZw5A-e9EECoxEo1BNKZa_ZB7BZ0&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=aKZxVJExjj97iLvzZNEkwg&oh=00_AfU18k-JxqYyjfSKuqZyzyfH73pGPBi1z-1yZRDNvcY84A&oe=68A4246B", 
          alt: "" 
        },
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/504094779_10222700767227026_923996779257443765_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF-nrRsOpmMvKhVYxQAdb8mbH1SopyUx0tsfVKinJTHS3kzYdh0g756z2g0ry3HSzg&_nc_ohc=qWjowqu7KTUQ7kNvwFTEQ_9&_nc_oc=AdnxUZ9O5PKLTXIiBUg8EshZc4FfW1gAvRQHalHvlLlzywLrcDdWBahlVsXPNfWi6iU&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=SzAvCnm7qNW087ByJrtjTw&oh=00_AfV0eqBaff92fctc0MC8VKMDco2XCfyvPJhxgCSQ9tLqpg&oe=68A42340", 
          alt: "" 
        },
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/503924725_10222700778227301_7494372715064657231_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFIiKA1HAI6hChMAkWQGOcUTdaZDHHn66NN1pkMcefro9BohiipqsLPaLpMkn1ZvhA&_nc_ohc=lmwfryVwG6IQ7kNvwEPmXQa&_nc_oc=AdljXUjX7LR8LeULBaaELk2kzi9xG5R3NsGLSETlBkYJyOQ_GQucROWvU4n7DyrJTBs&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=tZ33spJnwXggte9vqLsQUw&oh=00_AfW5c-gFT86MraRyYx1VEI26sIIEej5auCURE-4nLEE2iw&oe=68A43FEA", 
          alt: "" 
        },
        { 
          src: "https://i.ibb.co.com/fzm10bSp/504158011-10222700763666937-3820733829808306677-n.jpg", 
          alt: "" 
        }
      ]
    },
    {
      id: 3,
      title: "Adjudicator",
      shortDescription: "United International University\nMarch 2024",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFisQycB47Ruw/company-logo_200_200/company-logo_200_200/0/1631304428944?e=1758153600&v=beta&t=7GXxC8QpxKDNeTGZFSCq15aRxL6V_ussR1uPDhpkfDk",
      logoAlt: "United International University logo",
      description: `<p>I'm pleased to announce that the dataset that was utilized in this national level datathon "Bhashamul: Bengali Text with Regional Dialects to IPA Transcription Modeling" was a prototype dataset from one of the researches I'm currently leading here with my team at Bengali.AI.</p>

<p>Thanks to UIU Cse department & UIU Computer Club for organizing such an amazing event. Glad to have been able to be a part of this datathon.</p>`,
      images: [
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/504194950_10222684871029631_5075470718434785453_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHq_4gmlU8HOAtI7eQ-R0iUQCrALTHJGQVAKsAtMckZBRO31WIAB091NdZDH714Do0&_nc_ohc=vVg7Nltewk8Q7kNvwGYu2jE&_nc_oc=Adlp8OyVIivO_YKw_DTAKWKxPEuB4WR6CZhdmYWqbuHCuBFUZFw7CF0jRG46XSn7YqM&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=u5GjpSL4CLHzj1GWLKOAaA&oh=00_AfWg6ZmLKh4uhdRkEDxHDXHYhOOCSXh-O4lm3xLP4wu5nw&oe=68A41ABE", 
          alt: "" 
        },
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/504348290_10222684869469592_9184177870373609473_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEv9TsgS-RahHhHBkobtj1BGevR7s_I4J0Z69Huz8jgnS6tRI6ouqfyRFZEFEXf0v8&_nc_ohc=ldOPCvdA7-IQ7kNvwGiYR_C&_nc_oc=Adm3YgQ2TdORMz2OtrMJ7gK-tOZblqomji1j6fdVb6ndJKZUiiVW__EkNpKc5v6AD0o&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=v9cAzjKMI5SE4Ep0UGbpQg&oh=00_AfUmJofeW29BIgyngSJ4isZVyzonakwHbbLeKZSOFBok9Q&oe=68A43902", 
          alt: "" 
        },
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/504211451_10222693611768144_1137356061023502324_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHehaXYzbSr_714Mrou8gZ9COyEjHdSI-II7ISMd1Ij4rXZ6DIi6VE3T9XXuPZFzYw&_nc_ohc=ThG0VqMHtgEQ7kNvwE4Ay4R&_nc_oc=Adln8NhQD6zQr72AjcWPPiU4MjGFdecMOz74G3GCJFy6iKPXPRSU3vr5UiijdzmnuFo&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=BYBZpC50P0jQt_j4_icJkQ&oh=00_AfVpMcvcFYb42XQSSuNnXtm9C4dM7BTEaIlvOpMOiiOzkw&oe=68A42446", 
          alt: "" 
        },
        { 
          src: "https://i.ibb.co.com/whrnxWgC/503511178-10222684872989680-1500352243817215248-n.jpg", 
          alt: "" 
        }
      ]
    },
    {
      id: 4,
      title: "Adjudicator",
      shortDescription: "University of Dhaka\nNovember 2023",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQE6fgogIsUWBQ/company-logo_200_200/company-logo_200_200/0/1631307257938?e=1758153600&v=beta&t=se5xHSKQVIlGnpOu-tDM7msqNJleEHpgnXYeXfab6NQ",
      logoAlt: "University of Dhaka logo",
      description: `<p>One of my recent co-authored research paper's dataset (Bengali text to IPA transcription) was utilized in the national deep learning competition "Datathon Challenge - Cefalo Presents ITverse 2023" arranged by Dhaka University's "IIT Software Engineers' Community" and I was invited to be one of the judges of the competition on behalf of Bengali.AI and evaluate the submissions of the top participant teams from all over the Bangladesh.</p>`,
      images: [
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/503211428_10222644485700023_1389929498450334739_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGTrrTSOzW6fXtH_SLLBrFaVQ5X-laRZrtVDlf6VpFmu80o_yugQN7Y6iTYKC9KOAE&_nc_ohc=GYj9a1r4hQAQ7kNvwE_rKpE&_nc_oc=Admm26ZLGYXeCwqi2pS3iP5r-o-DvoxsXIn8ZxF8krLJCqAzJwgibvauG4bkc-1mXnU&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=YoILKgj2GWLl3iCkj9wRLQ&oh=00_AfUp1w3zsqwQ2zges4_yg5r9_lXnb7Pjy2b2-4alfIcFeA&oe=68A41F1D", 
          alt: "" 
        },
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/503757604_10222644485580020_8077111742185052444_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH_QlDaNSqbPrj3HjM5nysC16k-W35M5eHXqT5bfkzl4WQjdsrPO_mLSUICp4fu9mA&_nc_ohc=SjMsgzvwdacQ7kNvwHAw4S8&_nc_oc=Adkg1X6W2S5Bp42tETww130JgBSNdLrTIOI4ZRZiLtVi6K0R94GEPzVM5PIjsrAo6_s&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=9-iYtnzZYYnhqGDw-3NJAQ&oh=00_AfUfba0sMHFbceokeqKF5MX6ru38KLK3nAcmNKuWET_qpA&oe=68A4429D", 
          alt: "" 
        },
        { 
          src: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/503249082_10222644483979980_305822032614717338_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGq6asrnyRKjrHPIlFB1f5DI_6uyhhxly8j_q7KGHGXL_UWPnPCph3UDyahz3DLQO4&_nc_ohc=Dz51XK2neOcQ7kNvwH_FDPk&_nc_oc=AdkjfY4T0XgOcDb-qCEUThPD2FZQJ-TXxezyDJeRhW1Jxu-hQymdloGXaasNqoU-DT8&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=v5OOoVBsVwtY0lkCVp_fpw&oh=00_AfVh4CkjWifnjGM8HkTaKGIhCD3M59uc10Z2qx_SsV8otQ&oe=68A446C6", 
          alt: "" 
        }

      ]
    },
    {
      id: 5,
      title: "Recognition from the Ministry of Foreign Affairs, Bangladesh",
      shortDescription: "Issued by Ministry of Foreign Affairs, Bangladesh\nJune 2023",
      logo: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/454573626_815199140783286_2537222928923687316_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHf4RBvbpIBRMjEtdCUgQ6vMw5d-1FDl4wzDl37UUOXjJDculxTXz8XjPiWBA774ho&_nc_ohc=eSRpm5BbUrUQ7kNvwHuT_1s&_nc_oc=AdkkeCzhdspSaIWVxK3I9su2SwbYtguKrDXgzW7L7tzDVEmPSk1iL1f1l52pcIN3_n4&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=os5qZlLHQGm9EkAZKQr3kg&oh=00_AfXIFxyR4YwoywF_Jr0_Mj8BLplGMZ6X5Ej7T87VXqyoAA&oe=68A43F69",
      logoAlt: "Ministry of Foreign Affairs, Bangladesh logo",
      description: "I was invited to talk about multiple open-source linguistic project initiatives and represent BengaliAI to the Ministry of Foreign Affairs of Bangladesh.",
      images: [
        { 
          src: "https://media.licdn.com/dms/image/v2/D562DAQEzzvrpIedKDw/profile-treasury-image-shrink_8192_8192/B56ZdecU2gG0Ag-/0/1749636173804?e=1755813600&v=beta&t=NyLOPPDDAePOY2jwtASfOHsoodzOMWrfvQUFK75vJ3g", 
          alt: "" 
        },
        { 
          src: "https://media.licdn.com/dms/image/v2/D562DAQEFXP64nkLNsQ/profile-treasury-image-shrink_800_800/B56ZdecRYrHEAY-/0/1749636160332?e=1755813600&v=beta&t=VE3t7x2v2-hvjDeQieQKcQWOpAyJnI71s3XeJYI_lGg", 
          alt: "" 
        },
        { 
          src: "https://media.licdn.com/dms/image/v2/D562DAQGzPDVKGXWEAw/profile-treasury-image-shrink_800_800/B56ZdecPnjHoAc-/0/1749636153274?e=1755813600&v=beta&t=qj7KHjjbDPPly-dfh0hP6DGlx3Wp6q85DdbDJvK2CGE", 
          alt: "" 
        }
      ]
    },
        {
      id: 6,
      title: "Invited Speaker – Talk with Researchers: Bengali Language in NLP",
      shortDescription: "Andromeda Space & Robotics Research Organization - August 2023",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQEIQM9IxK7nBA/company-logo_200_200/company-logo_200_200/0/1630648890336?e=1758153600&v=beta&t=qBDlzvReXQB8rh4JgQdFKxsNbaudS89bOwYtdN8v1kE",
      logoAlt: "Andromeda Space & Robotics Research Organization logo",
      description: `<p>Was invited to be a speaker at a webinar on AI and Bangla NLP organized by Andromeda Space & Robotics Research Organization from CUET</p>`,
      images: [
        { 
          src: "https://media.licdn.com/dms/image/v2/D562DAQHAeAwZ4pZm1A/profile-treasury-image-shrink_800_800/B56ZdefFWqGsAY-/0/1749636896917?e=1755817200&v=beta&t=GlMiXlXJXXoix-7jOqfiBBfm5YNjqlhHi6s3to_5eQY", 
          alt: "" 
        },
              
      ]
    },
    {
      id: 7,
      title: "Invited Speaker – AI Research & Academic Development Webinar",
      shortDescription: "BRAC University Computer Club - December 2023",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEyh9lWMv7vuA/company-logo_200_200/B56ZWGv4K8GQAM-/0/1741722453086/bracucc_logo?e=1758153600&v=beta&t=PTFWQW6FwT2VoSdwwRXBabmWb6RSvgpswCWLV-37uJo",
      logoAlt: "BRAC University Computer Club logo",
      description: `<p>Was invited to be a speaker at a webinar on AI, Bangla NLP, and the importance of doing impactful research, and how a student should pick good topics for their undergrad thesis, organized by BRAC University Computer Club</p>`,
      images: [
        { 
          src: "https://media.licdn.com/dms/image/v2/D562DAQHneuCR1bZaQg/profile-treasury-image-shrink_800_800/B56ZdefoICH8AY-/0/1749637039328?e=1755817200&v=beta&t=CPrE_rzHWuh4SAfQmFkGuSeErZlW1tZfCaM7xMDXGCw", 
          alt: "" 
        },
      ]
    },
    {
      id: 8,
      title: "Invited Speaker – AI Symposium : Exploring Bangla NLP with Bengali.AI",
      shortDescription: "Tech Topia - May 2023",
      logo: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/274473090_118693417398119_8951806510965305592_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFAon-Pzu50zbigoMUclfj-vt6f9j-oB86-3p_2P6gHzobDR3-PE3Mcx68W-ejjG_s&_nc_ohc=YowxDWwf3YwQ7kNvwFuTlYq&_nc_oc=Adm47U1T_ULJM4B4_NA2NaQyFRkojlkEXCdndF3K071oCskEl87KL6yJGVKCu-UWJF8&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=gT7BOTgVXeO_IwJYlqD-yg&oh=00_AfU8PSefdpKPELsx2jczI4gMKYbpQzD18aFmE_rtklDV2Q&oe=68A44447",
      logoAlt: "Tech Topia logo",
      description: `<p>Got invited as a speaker for Talk about Bangla NLP organized by TechTopia</p>`,
      images: [
        {
          src: "https://media.licdn.com/dms/image/v2/D562DAQF0SEfMTy7IFA/profile-treasury-image-shrink_800_800/B56ZdegeR0G0AY-/0/1749637261261?e=1755817200&v=beta&t=I2FnHm9UgIat52RtfR1YQFDQGiK7H5wqIDbodEy5m_4",
          alt: ""
        },
      ]
    },
            {
      id: 9,
      title: "Adjudicator",
      shortDescription: "BRAC University Electrical and Electronic Club\nMarch 2021",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHUQIyQsX6K3g/company-logo_200_200/company-logo_200_200/0/1630643298969/bracubueec_logo?e=1758153600&v=beta&t=8-k3oMiHif2LblNEEtix7w3lF-rE_8osZInPAFqFRCk",
      logoAlt: "BRAC University EEE Club logo",
      description: `<p>Was invited to evaluate the writings of the participants in a tech write-up contest "Electroditor" organized by Brac University Electrical and Electronics Club.</p>`
    },
  ];

  const renderSimpleCards = (items: SimpleResumeItem[], tab?: string) => {
    if (!items || items.length === 0) {
      return (
        <div className="resume-card" data-aos="fade-up" data-aos-delay="0">
          <div className="card-body">
            <p className="card-description">No records added yet.</p>
          </div>
        </div>
      );
    }
    
    const currentTab = tab || '';
    return items.map((item, index) => (
      <div key={item.id} className="resume-card" data-aos="fade-up" data-aos-delay={index * 100}>
        <div className="card-header">
          {item.logo && (
            <div className="card-logo">
              <OptimizedImage
                src={item.logo}
                alt={item.logoAlt || `${item.title} logo`}
                aspectRatio="1/1"
                objectFit="contain"
              />
            </div>
          )}
          <div className="card-info">
            <h3 className="card-title">{item.title}</h3>
            {item.shortDescription && (
              <div className="card-short-description">
                {currentTab === 'volunteering' && item.shortDescription.includes('•') ? (
                  <>
                    <div className="organization">{item.shortDescription.split('•')[0].trim()}</div>
                    <div className="date-line" style={{ display: 'block', marginTop: '8px', fontStyle: 'italic' }}>{item.shortDescription.split('•').slice(1).join('•').trim()}</div>
                  </>
                ) : (currentTab === 'awards' || currentTab === 'achievements') && (item.shortDescription.includes('\n') || item.shortDescription.includes(' - ')) ? (
                  <>
                    {item.shortDescription.includes('\n') ? (
                      <>
                        <div>{item.shortDescription.split('\n')[0]}</div>
                        <div style={{
                          display: 'block',
                          marginTop: '8px',
                          fontStyle: 'italic',
                          color: '#444',
                          lineHeight: '1.2',
                          fontWeight: '500'
                        }}>
                          {item.shortDescription.split('\n')[1]}
                        </div>
                      </>
                    ) : (
                      <>
                        <div>{item.shortDescription.split(' - ')[0]}</div>
                        <div style={{
                          display: 'block', 
                          marginTop: '8px',
                          fontStyle: 'italic',
                          color: '#444',
                          lineHeight: '1.2',
                          fontWeight: '500'
                        }}>
                          {item.shortDescription.split(' - ')[1]}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  item.shortDescription
                )}
              </div>
            )}
          </div>
        </div>
        <div className="card-body">
          {item.description && (
            <div className="card-description">
              {Array.isArray(item.description) ? (
                <p>{item.description.join(' ')}</p>
              ) : (
                <div dangerouslySetInnerHTML={{ 
                  __html: item.description
                    .split('\n\n')
                    .map(para => para.trim() ? `<p>${para}</p>` : '')
                    .join('')
                    .replace(/\n(\d+)\.\s/g, '<br/>$1. ')
                }} />
              )}
            </div>
          )}
          {item.images && item.images.length > 0 && (
            <div className="card-images-gallery">
              <h4>Project Gallery</h4>
              <div className="card-images">
                {item.images.map((img, i) => (
                  <div
                    key={i}
                    className="gallery-item" 
                    onClick={() => {
                      setModalImage(img.src);
                      setModalAlt(img.alt);
                      setCurrentGalleryImages(item.images || []);
                      setCurrentImageIndex(i);
                    }}
                  >
                    <div className="gallery-item-inner">
                      <img src={img.src} alt={img.alt} />
                      <div className="gallery-item-overlay">
                        <span className="zoom-icon">
                          <i className="bi bi-zoom-in"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <section id="resume" className="resume section">
      <div className="container">
        {/* Tab Navigation */}
        <div className="resume-tabs" data-aos="fade-up">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <i className="bi bi-briefcase"></i>
              Experience
            </button>
            <button
              className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <i className="bi bi-mortarboard"></i>
              Education
            </button>
            <button
              className={`tab-button ${activeTab === 'achievement' ? 'active' : ''}`}
              onClick={() => setActiveTab('achievement')}
            >
              <i className="bi bi-trophy"></i>
              Achievement
            </button>
            <button
              className={`tab-button ${activeTab === 'volunteering' ? 'active' : ''}`}
              onClick={() => setActiveTab('volunteering')}
            >
              <i className="bi bi-people"></i>
              Volunteering
            </button>
            <button
              className={`tab-button ${activeTab === 'awards' ? 'active' : ''}`}
              onClick={() => setActiveTab('awards')}
            >
              <i className="bi bi-award"></i>
              Awards and Honors
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="resume-content" data-aos="fade-up" data-aos-delay="100">
          {activeTab === 'experience' && (
            <div className="experience-section">
              {experienceData.map((exp, index) => (
                <div key={exp.id} className="resume-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card-header">
                    {exp.logo && (
                      <div className="card-logo">
                        <OptimizedImage
                          src={exp.logo}
                          alt={exp.logoAlt || `${exp.company} logo`}
                          aspectRatio="1/1"
                          objectFit="contain"
                        />
                      </div>
                    )}
                    <div className="card-info">
                      <h3 className="card-title">{exp.title}</h3>
                      <h4 className="card-company">
                        {exp.companyUrl ? (
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </h4>
                      <div className="employment-details">
                        <span className="location">{exp.location}</span>
                      </div>
                      <div className="card-meta">
                        <span>{exp.employmentType}</span>
                        <span className="separator">·</span>
                        <span>{exp.locationType}</span>
                      </div>
                      <div className="card-period">
                        <span className="period">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <div 
                      className="card-description" 
                      dangerouslySetInnerHTML={{ 
                        __html: exp.description.split('\n\n').map(para => `<p>${para}</p>`).join('') 
                      }} 
                    />
                    
                    {exp.supervisors && (
                      <div className="supervisors">
                        <strong>Supervisors:</strong>
                        <div className="supervisor-links">
                          {exp.supervisors.map((supervisor, idx) => (
                            <a key={idx} href={supervisor.link} target="_blank" rel="noopener noreferrer">
                              {supervisor.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {exp.otherSupervisors && (
                      <div className="supervisors">
                        <strong>Remote Supervisors:</strong>
                        <div className="supervisor-links">
                          {exp.otherSupervisors.map((supervisor, idx) => (
                            <a key={idx} href={supervisor.link} target="_blank" rel="noopener noreferrer">
                              {supervisor.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {exp.responsibilities && (
                      <div className="responsibilities">
                        <strong>Key Responsibilities:</strong>
                        <ul>
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.projects && (
                      <div className="projects">
                        <strong>Projects:</strong>
                        <ul>
                          {exp.projects.map((project, idx) => (
                            <li key={idx}>{project}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="education-section">
              {educationData.map((edu, index) => (
                <div key={edu.id} className="resume-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card-header">
                    {edu.logo && (
                      <div className="card-logo">
                        <OptimizedImage
                          src={edu.logo}
                          alt={edu.logoAlt || `${edu.institution} logo`}
                          aspectRatio="1/1"
                          objectFit="contain"
                        />
                      </div>
                    )}
                    <div className="card-info">
                      <h3 className="card-title">{edu.degree}</h3>
                      <h4 className="card-company">{edu.field}</h4>
                      <div className="card-meta">
                        <span className="institution">{edu.institution}</span>
                      </div>
                      <div className="card-meta">
                        <span className="location">{edu.location}</span>
                      </div>
                      <div className="card-period">
                        <span className="period">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <div className="thesis-info">
                      <strong>Thesis:</strong>
                      <a href={edu.thesis.link} target="_blank" rel="noopener noreferrer">
                        {edu.thesis.title}
                      </a>
                    </div>

                    <div className="supervisor-info">
                      <strong>Supervisor:</strong>
                      <a href={edu.supervisor.link} target="_blank" rel="noopener noreferrer">
                        {edu.supervisor.name}
                      </a>
                    </div>

                    <div className="publication-info">
                      <strong>Publication:</strong>
                      {typeof edu.publication === 'string' ? (
                        <span>{edu.publication}</span>
                      ) : (
                        <a href={edu.publication.link} target="_blank" rel="noopener noreferrer">
                          {edu.publication.title}
                        </a>
                      )}
                    </div>

                    <div className="concentration-info">
                      <strong>Concentration:</strong>
                      <span>{edu.concentration}</span>
                    </div>

                    <div className="courses-section">
                      <strong>Courses:</strong>
                      <div className="courses-list">
                        {edu.courses.map((course, idx) => (
                          <span key={idx} className="course-item">{course}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievement' && (
            <div className="achievement-section" data-tab="achievements">
              {renderSimpleCards(achievementData, 'achievements')}
            </div>
          )}

          {activeTab === 'volunteering' && (
            <div className="volunteering-section">
              {renderSimpleCards(volunteeringData, 'volunteering')}
            </div>
          )}

          {activeTab === 'awards' && (
            <div className="awards-section" data-tab="awards">
              {renderSimpleCards(awardsData, 'awards')}
            </div>
          )}
        </div>
      </div>
      
      {/* Image Modal for Gallery */}
      <ImageModal 
        isOpen={modalImage !== null}
        imageUrl={modalImage || ''}
        alt={modalAlt}
        onClose={() => setModalImage(null)}
        images={currentGalleryImages}
        currentImageIndex={currentImageIndex}
        onNavigate={(newIndex) => {
          const newImage = currentGalleryImages[newIndex];
          if (newImage) {
            setCurrentImageIndex(newIndex);
            setModalImage(newImage.src);
            setModalAlt(newImage.alt);
          }
        }}
      />
    </section>
  );
};

export default Resume; 