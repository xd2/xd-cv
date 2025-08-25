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
  interests: string[];
}

import subwritersLogo from '../assets/subwriters.png';
import decathlonLogo from '../assets/decathlon.png';
import pupscanLogo from '../assets/pupscan.png';
import sgcibLogo from '../assets/sgcib.png';
import scrumallianceLogo from '../assets/scrumalliance.jpeg';
import oracleLogo from '../assets/oracle.jpeg';
import cnamLogo from '../assets/cnam.png';
import linkedinLogo from '../assets/linkedin.jpeg';

export const profileData: ProfileData = {
  name: "Xavier DELESTRE",
  title: "AI Engineer | Fullstack Engineer | Technical Leader | Scrum master | SaaS entrepreneur",
  subtitle: "Orchestrating full lifecycle development of cutting-edge digital and AI-native products",
  email: "xavier@subwriters.com",
  location: "Fontainebleau, France • International mobility",
  linkedin: "https://www.linkedin.com/in/xavier-delestre/",
  website: "https://subwriters.com",
  summary: "Seasoned AI & software engineer with a strong product and user-centric mindset and proven expertise in Fullstack development (Kotlin, spring, microservices,typescript, Vue.js). Well-versed in design patterns, TDD/BDD, and DevOps best practices, participating in every phase of the software lifecycle. Highly motivated by the latest advancements in generative AI— particularly large language models and prompt engineering—and eager to integrate these emerging technologies to create innovative, high-value solutions.",

  experiences: [
    {
      title: "Ai Engineer & Fullcycle entrepreneur / gepetto.chat SaaS",
      company: "Subwriters.com",
      period: "2023 - present",
      description: "Built and scaled gepetto.chat, a SaaS providing ChatGPT within WhatsApp (mobile & desktop) with 13,700+ users worldwide as of Sept 2024. Designed conversation flows, context window management, and prompt engineering on GPT-3.5/4. Integrated Twilio programmable numbers, WhatsApp webhook API, Stripe payments, and cloud-native/serverless backend for high availability. Managed landing page design, hosting, analytics, and growth through Facebook/Google Ads campaigns.",
      technologies: ["LLMs", "Prompt Engineering", "RAG", "OpenAi APIs", "typescript", "jest", "firebase"],
      url: "https://gepetto.chat/",
      logo: subwritersLogo
    },
    {
      title: "Technical Leader",
      company: "Decathlon",
      period: "2018 - present",
      description: "Technical Leader at MayDay, an internal startup studio of 10 engineers, embedded in Decathlon Paris stores, delivering innovative in-store solutions with the shortest feedback loop between devs and end users. Led micro-service architecture and full CI/CD pipeline setup, coached teams on agile practices and TDD/BDD, and guided frontend (Angular 6, Android, Nuxt.js/Vue.js) and backend (Express/NestJS, Firebase/Firestore) developments. Drove automation with GitLab CI and GitHub Actions.",
      technologies: ["Java", "Kotlin", "Spring", "Node.js", "TypeScript", "Firebase", "Android", "CI/CD", "Scrum", "Postgresql"],
      url: "https://decathlon.com",
      logo: decathlonLogo
    },
    {
      title: "Senior Middleware Engineer",
      company: "Pupscan",
      period: "2017 - 2018",
      description: "Senior Middleware Engineer for Pup Scan, a handheld scanner enabling seamless document digitalization and sharing. Designed and developed the camera middleware API (C/Kotlin) and embedded software (Android/Kotlin). Built a scalable build factory with GitLab and Docker, set up Scrum organization, and handled system & hardware validation. Oversaw outsourced development in China to ensure quality and delivery.",
      technologies: ["Kotlin", "C++", "Android", "Firebase", "Gitlab"],
      url: "https://www.indiegogo.com/projects/pup-scan-the-world-s-fastest-pocket-scanner#/",
      logo: pupscanLogo
    },
    {
      title: "Technical Leader",
      company: "Societe Generale Corporate and Investment Banking - SGCIB",
      period: "2014 - 2017",
      description: "Technical Leader in Structured Finance IT, delivering a loan structuring platform covering GUI, pricing calculations, approval workflow, and closing. Developed the structuring app, a fullstack Java/AngularJS micro-services solution. Acted as certified Scrum Master for a 9-person feature team, promoting agile practices. Set up CI pipelines for five feature teams, implemented fully automated environment provisioning in a private cloud, and coordinated with offshore developers in Bangalore, India.",
      technologies: ["Java", "Kotlin", "Spring-boot", "typescript", "Oracle"],
      url: "https://www.infor.com/products/ezrms",
      logo: sgcibLogo
    },
  ],

  education: [
    {
      degree: "Learning Kubernetes",
      school: "Linkedin",
      period: "2018",
      description: "This course introduces developers, DevOps engineers, and IT pros to Kubernetes.",
      logo: linkedinLogo
    },
    {
      degree: "Certified Scrum Master",
      school: "Scrum Alliance",
      period: "2015",
      description: "Covering the Scrum framework, roles, events, and artifacts, with a focus on guiding teams in applying Scrum and embracing core Agile principles and values.",
      logo: scrumallianceLogo
    },
    {
      degree: "Oracle Certified Professional Java Programmer",
      school: "Oracle",
      period: "2014",
      description: "Oracle Certified Professional, Java SE 6 Programmer",
      logo: oracleLogo
    },
    {
      degree: "Diplôme d'Ingénieur",
      school: "Conservatoire National des Arts et Métiers (CNAM)",
      period: "2009",
      description: "Engineering degree with a major in computer science and digital technologies. Degree earned while attending evening classes.",
      logo: cnamLogo
    }
  ],

  skills: {
    technical: [
      {description: "LLMs, Prompt Engineering, RAG, MCP", level: "dev capabilities"},
      {description: "Python, Pandas, Flask", level: "dev capabilities"},
      {description: "TS, Node.js, Express", level: "lead dev capabilities"},
      {description: "Vue.js, Nuxt, React, Firebase", level: "lead dev capabilities"},
      {description: "Java, Kotlin, SpringBoot, JPA, Hibernate", level: "lead dev capabilities"},
      {description: "SQL / NoSQL", level: "lead dev capabilities"}
    ],
    tools: [
      "Docker", "Kubernetes", "CI/CD", "AWS", "GCP", "Azure"
    ],
    soft: [
      "Technical Leadership", "Product Design", "Team Development",
      "Strong Communication", "Analytical Mindset", "Creative Mindset"
    ]
  },

  languages: [
    {name: "French", level: "Native language"},
    {name: "English", level: "Full professional proficiency"}
  ],


  interests: [
    "Family life", "Street-workout athlete", "Body builder", "Electronic maker"
  ]
};