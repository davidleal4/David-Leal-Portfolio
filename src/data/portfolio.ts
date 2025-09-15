export const personalInfo = {
  name: "David Leal",
  title: "AI Data Scientist & Software Engineer | Machine Learning, Quantitative Modeling, and Scalable Systems",
  tagline: "Bridging AI, finance, and scalable engineering to create real-world impact.",
  linkedinProfile: "https://www.linkedin.com/in/david-leal-163a832a9/",
  github: "https://github.com/davidleal4",
  email: "davidlealwork@gmail.com",
  location: "Houston, TX",
  profileImage: "/images/david-profile.jpg", // Will need to add actual image
}

export const aboutInfo = {
  summary: "Computer Science student at University of Houston with extensive experience in AI, data science, and software engineering. Python & C++ certified with AWS and MIT Professional Education certifications. Proven track record in financial institutions and consulting services, with expertise spanning machine learning, quantitative modeling, and scalable system architecture.",
  languages: ["English", "Spanish", "French"],
  education: {
    institution: "University of Houston",
    degree: "Computer Science",
    status: "Current Student"
  },
  certifications: [
    "Python Certification",
    "C++ Certification", 
    "AWS Certification",
    "MIT Professional Education"
  ]
}

export const experience = [
  {
    id: 1,
    company: "Macquarie Group LTD",
    position: "Data Science Intern",
    duration: "05/2025 – 08/2025",
    description: "Built ML models on multi-million-dollar virtual power trading datasets. Developed two full-stack Python apps for data ingestion and forecasting (70% faster analysis). Created dashboards for renewable energy forecasts integrated into trading strategies.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Dashboard Development", "Trading Systems"],
    type: "internship"
  },
  {
    id: 2,
    company: "Almada-Digital LLC",
    position: "Co-Founder / Software Engineer", 
    duration: "08/2022 – Present",
    description: "Architected enterprise system designs, scalable APIs, and cloud-native applications. Configured AWS environments, CI/CD pipelines, and SQL databases. Delivered Salesforce apps and payroll platforms for financial/professional clients.",
    technologies: ["AWS", "API Development", "Cloud Architecture", "Salesforce", "SQL", "CI/CD"],
    type: "founding"
  },
  {
    id: 3,
    company: "Entrepreneurial Projects",
    position: "AI & Data Science Developer",
    duration: "Ongoing",
    description: "Stock prediction platform using advanced ML algorithms (CatBoost, LightGBM, XGBoost, NLP). SaaS AI education platform with cloud deployment. AI/data pipelines with end-to-end integration.",
    technologies: ["CatBoost", "LightGBM", "XGBoost", "NLP", "SaaS", "Cloud Deployment"],
    type: "entrepreneurial"
  }
]

export const skills = {
  languages: [
    { name: "Python", icon: "🐍", level: "Expert" },
    { name: "C++", icon: "⚡", level: "Advanced" },
    { name: "TypeScript", icon: "📘", level: "Advanced" },
    { name: "SQL", icon: "🗃️", level: "Advanced" }
  ],
  frameworks: [
    { name: "React", icon: "⚛️", level: "Advanced" },
    { name: "Next.js", icon: "▲", level: "Advanced" },
    { name: "Django", icon: "🎯", level: "Advanced" },
    { name: "Flask", icon: "🌶️", level: "Advanced" },
    { name: "TailwindCSS", icon: "🎨", level: "Advanced" }
  ],
  cloud: [
    { name: "AWS", icon: "☁️", level: "Advanced" },
    { name: "Docker", icon: "🐳", level: "Advanced" },
    { name: "CI/CD", icon: "🔄", level: "Advanced" }
  ],
  expertise: [
    { name: "APIs", icon: "🔌", level: "Expert" },
    { name: "Scalable Architecture", icon: "🏗️", level: "Expert" },
    { name: "Enterprise Solutions", icon: "🏢", level: "Advanced" },
    { name: "Machine Learning", icon: "🤖", level: "Expert" }
  ]
}

export const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "data-science", label: "Data Science" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "software-engineering", label: "Software Engineering" },
  { id: "full-stack", label: "Full-Stack" }
]