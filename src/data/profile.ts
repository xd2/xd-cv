export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  url?: string;
  urls?: string[];
  logo?: string;
}

export interface Education {
  degree: string;
  school: string;
  period?: string;
  description?: string;
  logo?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface TechnicalSkill {
  description: string;
  level: string;
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  location: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  summary: string;
  experiences: Experience[];
  education: Education[];
  skills: {
    technical: TechnicalSkill[];
    tools: string[];
    soft: string[];
  };
  languages: {
    name: string;
    level: string;
  }[];
  projects: Project[];
  interests: string[];
}

import subwritersLogo from '../assets/subwriters.png';
import metroscopeLogo from '../assets/metroscope.png';
import dashlaneLogo from '../assets/dashlane.png';
import pupscanLogo from '../assets/pupscan.png';
import inforLogo from '../assets/infor.png';
import numvisionLogo from '../assets/numvision.png';
import unilogLogo from '../assets/unilog.png';
import leWagonLogo from '../assets/le-wagon.jpeg';
import courseraLogo from '../assets/coursera.jpeg';
import centraleNantesLogo from '../assets/centrale-nantes.jpeg';

export const profileData: ProfileData = {
  name: "Renaud Pélissier",
  title: "AI Engineer, Fullstack Engineer, Data Scientist, Founder, Agile Tech Executive",
  subtitle: "Leading end-to-end GenAI application development",
  email: "renaud@subwriters.com",
  location: "Paris, France • International mobility",
  linkedin: "https://linkedin.com/in/renaudpelissier",
  website: "https://subwriters.com",
  summary: "AI Engineer, Fullstack Engineer, Data Scientist, Founder, and Agile Tech Executive with strong communication skills and an analytical and creative mindset. Passionate about technical leadership, product design, and team development. Currently leading end-to-end GenAI application development at Subwriters.com.",
  
  experiences: [
    {
      title: "Founder",
      company: "Subwriters.com",
      period: "2023 - 2025",
      description: "Leading end-to-end GenAI application development. We help you leverage recent advances in natural language AI to automate your repetitive tasks.",
      technologies: ["LLMs", "Prompt Engineering", "Evals", "Agents", "MCP", "Embedding", "RAG", "Deep learning"],
      url: "https://subwriters.com",
      logo: subwritersLogo
    },
    {
      title: "Tech Lead & Engineering Manager",
      company: "Metroscope",
      period: "2021 - 2023",
      description: "Backend Tech Lead (Java/Kotlin/Spring and Node/TypeScript/Express) and Engineering Manager. Metroscope optimizes thermal hydraulic processes for nuclear plants, gas plants, and data centers. Our digital twin, built from a physical model, outperformed state-of-the-art machine learning and statistical solutions.",
      technologies: ["Java", "Kotlin", "Spring", "Node.js", "TypeScript", "Express"],
      url: "https://metroscope.tech",
      logo: metroscopeLogo
    },
    {
      title: "Engineering Manager",
      company: "Dashlane",
      period: "2020",
      description: "Manager hands on (servant leader) in the backend team over multiple location (Paris, NY, Lisbon). In charge of developers, team organization, hiring and scaling. Dealing with advanced encryption tech, millions of users, load and scalability issues. Dashlane is a subscription-based password manager and digital wallet application available on macOS, Windows, iOS and Android.",
      technologies: ["Typescript", "Node.js", "Redis", "AWS", "ELK"],
      url: "https://dashlane.com",
      logo: dashlaneLogo
    },
    {
      title: "Founder & CEO", 
      company: "Pupscan",
      period: "2014 - 2019",
      description: "CEO of my own hardware company. In charge of every aspect of the business including Product Management, UX/UI design and close collaboration with my CTO. Pupscan 'the world fastest pocket (document) scanner', a hardware device to bring your paper documents into your cloud in one click. 14 employees, 2M€ turnover, 10K backers in 90 countries, 500 active users, 1K manufactured units, communication in 3 languages, 30K man-hours, 30K lines of code in 14 software technologies, 8 industrial subcontractors in 4 countries, 66 parts and components.",
      technologies: ["Android", "Kotlin", "Firebase", "Vue.js", "Gitlab"],
      url: "https://www.indiegogo.com/projects/pup-scan-the-world-s-fastest-pocket-scanner#/",
      logo: pupscanLogo
    },
    {
        title: "JEE Architect",
        company: "Infor Easy RMS",
        period: "2013 - 2014",
        description: "Java architect of a SaaS data application. Eazy RMS is a revenue management system deployed at world scale in the hospitality business.",
        technologies: ["Java", "JEE", "Jboss", "pure html/css/javascript", "Oracle DB"],
        url: "https://www.infor.com/products/ezrms",
        logo: inforLogo
    },
    {
      title: "Co-founder & CTO",
      company: "Numvision",
      period: "2009 - 2012",
      description: "CTO and Tech lead of a SaaS solution for sharing and securing business documents and directories. Numsync is 'the Dropbox for Business', a SaaS company in the field of enterprise data synchronization.",
      technologies: ["Java/J2EE", "EJB", "JPA", "JSF / Primefaces", "JMS", "Hibernate", "Spring"],
      logo: numvisionLogo
    },
    {
      title: "Developer and Consultant in Software",
      company: "Various Clients",
      period: "2004 - 2008",
      description: "Provided software development and consulting services across multiple industries, building custom solutions and helping businesses with their digital transformation.",
      technologies: ["Software Development", "Consulting", "Custom Solutions"],
      url:   "https://www.cgi.fr",
      logo: unilogLogo
    }
  ],

  education: [
    {
      degree: "AI Bootcamp (400 hours)",
      school: "Le Wagon - Paris",
      description: "Intensive 400-hour program covering machine learning, deep learning, neural networks, and practical AI applications. Hands-on projects with Python, TensorFlow, and real-world datasets.",
      logo: leWagonLogo
    },
    {
      degree: "Machine Learning",
      school: "Coursera",
      period: "2018",
      description: "Machine Learning, 12 weeks, with Andrew Ng",
      logo: courseraLogo
    },
    {
      degree: "Diplôme d'Ingénieur",
      school: "École Centrale de Nantes",
      period: "2004 - 2008",
      description: "General engineering degree with a major in computer science and digital technologies. Coursework included applied mathematics, algorithms, and project management.",
      logo: centraleNantesLogo
    }
  ],

  skills: {
    technical: [
      { description: "LLMs, Prompt Engineering, Evals, Agents, MCP, Embedding, RAG", level: "lead dev capabilities" },
      { description: "TS, Node.js, Express, Prisma", level: "lead dev capabilities" },
      { description: "Python, Pandas, Numpy, Scikit-learn, PyTorch, TensorFlow", level: "dev capabilities" },
      { description: "React, javascript, HTML, CSS", level: "dev capabilities" },
      { description: "Java, Kotlin, SpringBoot, JPA, Hibernate", level: "lead dev capabilities" },
      { description: "SQL / NoSQL", level: "lead dev capabilities" }
    ],
    tools: [
      "Docker", "Kubernetes", "CI/CD", "AWS", "GCP", "Azure"
    ],
    soft: [
      "Strong Communication", "Analytical Mindset", "Creative Mindset", 
      "Technical Leadership", "Product Design", "Team Development"
    ]
  },

  languages: [
    { name: "French", level: "Native language" },
    { name: "English", level: "Full professional proficiency" }
  ],

  projects: [
    {
      name: "Subwriters Platform",
      description: "End-to-end GenAI application development",
      technologies: ["Python", "TypeScript", "React"]
    }
  ],

  interests: [
    "Opera singer", "Wood cabinet maker", "Sports and nature enthusiast", "Technology Innovation", "AI Research"
  ]
};