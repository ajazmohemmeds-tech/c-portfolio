export const personalInfo = {
  name: "Ajaz Mohemmed S",
  tagline: "AI ENGINEER",
  email: "ajazmohemmeds@gmail.com",
  phone: "+91 7306587895",
  location: "Bangalore",
  linkedin: "https://www.linkedin.com/in/ajaz-mohemmed-12581727a",
  github: "https://github.com/ajazmohemmeds-tech",
  instagram: "https://www.instagram.com/__.ajxz?igsh=MXI4MXI2Z3Q5aHRxYw%3D%3D&utm_source=qr",
  education: [
    {
      institution: "CHRIST (Deemed to be University), Bangalore",
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      year: "2022 - 2026"
    }
  ]
};

export const skills = {
  technical: ["Python", "SQL", "MS Office", "Power BI"],
  libraries: ["NumPy", "Pandas", "PyTorch", "Google Colab", "Scikit-learn", "OpenCV"],
  soft: ["Emotional Intelligence", "Team Collaboration", "Adaptability", "Work Ethic", "Analytical Thinking"]
};

export const experience = [
  {
    company: "Cognifyz",
    role: "Python Intern",
    period: "04/2025 – 05/2025",
    type: "Remote",
    description: [
      "Designed and implemented a machine learning system to predict restaurant ratings using real-world food-tech datasets, enhancing recommendation accuracy by 35%.",
      "Incorporated end-to-end preprocessing which improved model accuracy by 20% and reduced data errors by 15%.",
      "Developed and optimized regression and classification models using scikit-learn, Pandas, and NumPy.",
      "Automated 95% of the ML pipeline, resulting in a 28% boost in model performance."
    ],
    secret: "Debugged more than I developed... but we don't talk about that."
  },
  {
    company: "TrizLabs",
    role: "Research Intern",
    period: "06/2024 – 09/2024",
    type: "On-site",
    description: [
      "Designed an infrared monocular depth estimation system for real-time use.",
      "Explored single-camera techniques and infrared-based depth perception.",
      "Applied theoretical knowledge to system design for robotics and surveillance applications."
    ],
    secret: "Explored depth in images... and occasionally in heavy research papers."
  }
];

export const projects = [
  {
    title: "ATELIER – Luxury Gifting E-Commerce Platform",
    description: "A premium gifting website offering curated hampers, bespoke frames, and floral arrangements through a refined and elegant interface designed for a high-end shopping experience.",
    tech: ["UI/UX", "E-Commerce", "Frontend", "Responsive Design", "Animations"],
    role: "Developer",
    outcome: "Delivered a visually rich, smooth, and immersive shopping experience with premium aesthetics and seamless user interaction.",
    image: "images/atelier.png"
  },
  {
    title: "Personal Voice Assistant",
    description: "AI-powered voice assistant application integrating a Hugging Face chatbot for natural, context-aware conversations.",
    tech: ["NLP", "Hugging Face", "Python", "Speech-to-Text"],
    status: "In Progress (40%)",
    role: "Developer",
    outcome: "Improved contextual accuracy and faster response times.",
    image: "images/voice-assistant.png"
  },
  {
    title: "Business Intelligence Agent",
    description: "AI agent that can answer founder-level business intelligence queries by integrating with monday.com boards containing work orders and deals data.",
    tech: ["AI Agent", "monday.com API", "NLP", "Python", "Data Integration"],
    role: "Developer",
    outcome: "Streamlined business intelligence querying for immediate data insights.",
    image: "images/bi-agent.png",
    demoLink: "https://monday-bi-agent-nlp9.onrender.com",
    githubLink: "#"
  }
];

export const research = [
  {
    title: "Decision Flow Tracing and Word Impact Analysis in Hybrid Transformer-Conditioned Diffusion Models",
    conference: "2nd International Conference on Sustainable Computing and Intelligent Systems (SCIS 2025)",
    publisher: "Springer",
    date: "11/2025",
    description: "Developed a hybrid diffusion model combining UNet denoising with transformer-based cross-attention to enhance both image quality and interpretability in text-to-image generation. Introduced an explainability framework using attention heatmaps and temporal analysis to track how text tokens influence image regions. Achieved measurable improvements in FID, CLIP score, and attention coherence, enabling more transparent and controllable generative AI systems.",
    authors: ["Ajaz Mohemmed S", "Aldrin P Thomas", "Shiju George", "N Anand Raj", "Mdhun Shaju", "Akil Nasim"],
    certificateLink: "/c-portfolio/images/research-cert.jpg", /* Fixed base path */
    paperLink: "#"
  }
];

export const volunteering = [
  {
    organization: "CUESTIC (Christ University)",
    role: "Media Vice Head",
    description: "Progressed from media volunteer to Vice Head. Contributed to photography, videography, and content creation for university events."
  },
  {
    organization: "National Service Scheme (NSS)",
    role: "Volunteer",
    period: "2020 - 2022",
    description: "Participated in cleanliness drives, awareness campaigns, and environmental projects."
  }
];

export const volunteeringGallery = [
  {
    image: "/images/photo1.jpg",
    title: "Leadership Recognition",
    desc: "Media Team Contribution",
    backDesc: "Recognised by the HOD for contribution to the Media Team"
  },
  {
    image: "/images/gallery_1.jpg",
    title: "Executive Appointment",
    desc: "Media Vice Head",
    backDesc: "Appointed as Media Vice Head - trusted to lead, create and deliver."
  },
  {
    image: "/images/photo2.JPG",
    title: "The Pillars",
    desc: "Core Team",
    backDesc: "The team behind it all."
  },
  {
    image: "/images/photo3.JPG",
    title: "Academic Synergy",
    desc: "Students & Faculty",
    backDesc: "Students and Faculty - learning, building and delivering together."
  },
  {
    image: "/images/photo4.jpg",
    title: "Excellence Award",
    desc: "Media Execution",
    backDesc: "Awarded by Col. Jai Govind for excellence in media execution."
  }
];

export const certifications = [
  {
    name: "Data Science for Engineers-NPTEL",
    issuer: "IIT Madras",
    date: "12/2025 – Present"
  },
  {
    name: "AWS Academy Cloud Foundation",
    issuer: "Amazon Web Service Training and Certification",
    date: ""
  },
  {
    name: "Cybersecurity Training",
    issuer: "CISCO",
    date: ""
  }
];
