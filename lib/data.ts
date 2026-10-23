import type {
  Experience,
  Project,
  SkillCategory,
  Education,
  Certificate,
  SocialLink,
} from "@/types";

export const personalInfo = {
  name: "Sunit Pal",
  tagline: "AI + Full-Stack Engineer",
  bio: "I build high-performance, beautiful web and mobile applications. Specialising in React ecosystems, AI-integrated systems, and scalable full-stack architectures that users love.",
  location: "Bangalore, Karnataka (Open to Relocate)",
  email: "sunitpal2000@gmail.com",
  phone: "+91-7478876252",
  resumeUrl:
    "https://drive.google.com/file/d/1ZdaYdkym2N2anPgEvkSvc817bURPJPic/view?usp=sharing",
};

export const experiences: Experience[] = [
  {
    role: "AI & Agentic AI Developer",
    company: "Independent AI Projects",
    duration: "Apr 2026 – Present",
    type: "Self-driven",
    bullets: [
      "Building agentic AI systems end to end, including E-Mandi, a farmer marketplace where five LangGraph agents handle grading, pricing, buyer matching, voice and fraud flagging on FastAPI, PostgreSQL (pgvector), Redis and AWS S3.",
      "Shipping retrieval-augmented generation (RAG) features such as PDF GPT: semantic Q&A over PDFs using FAISS/HuggingFace embeddings and Gemini AI, with JWT auth and multi-session chat history.",
      "Adding OpenAI vision grading, payment webhooks and an admin AI control center, backed by 283+ automated tests to keep LLM-driven workflows reliable.",
    ],
  },
  {
    role: "Software Developer",
    company: "ProjectStudio.ai",
    duration: "Nov 2025 – Mar 2026",
    type: "Internship",
    bullets: [
      "Developed 10+ full-stack modules from scratch, including Warehouse, Manpower, Leave Management, and Stocks, architecting 20+ core React Native screens and reusable UI components across Next.js/React Native (frontend) and Node.js (backend) for an interior design SaaS platform.",
      "Implemented multi-language support across the entire app using i18next for a multi-region user base.",
      "Built an in-app AI chatbot powered by GPT, cutting manual task creation time by 20% and adopted by 30+ site teams for budget calculations and real-time material rates.",
    ],
    link: "https://www.projectstudio.ai/",
    certLink:
      "https://drive.google.com/file/d/1h9MLvadzN8L_2nI0yr7px_O29rGJr3Co/view?usp=sharing",
  },
  {
    role: "Software Developer",
    company: "Studio137",
    duration: "Nov 2024 – Nov 2025",
    type: "Full-time",
    bullets: [
      "Led development of 20+ reusable UI components across 5+ projects, optimizing performance through memoization and lazy loading to cut average feature delivery time by 15% and page load time by 24%.",
      "Built and optimized backend APIs for an assessment system, implementing rate limiting and request de-duplication to handle high concurrent load, along with query-level optimizations for faster response times.",
    ],
    link: "https://www.studio137.co.za/",
    certLink:
      "https://drive.google.com/file/d/1omGE5PHsqwNVIjD3bQ9oN8ofW1HlwfOG/view?usp=sharing",
  },
];

export const projects: Project[] = [
  {
    title: "E-Mandi",
    category: "Agentic AI Marketplace",
    description:
      "An agentic AI marketplace for farmers. Five LangGraph agents handle grading, pricing, buyer matching, voice and fraud flagging on FastAPI, PostgreSQL (pgvector), Redis and AWS S3, with OpenAI vision grading, payment webhooks, an admin AI control center and 283+ tests.",
    techStack: [
      "FastAPI",
      "LangGraph",
      "OpenAI",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "AWS S3",
      "Next.js",
      "TypeScript",
    ],
    githubUrl: "https://github.com/Ezio7777/E-Mandi",
    liveUrl: "https://e-mandi-2-0.vercel.app/",
    images: [
      "/images/E-Mandi/image1.png",
      "/images/E-Mandi/image2.png",
      "/images/E-Mandi/image3.png",
      "/images/E-Mandi/image4.png",
    ],
  },
  {
    title: "PDF GPT",
    category: "RAG Document Chat",
    description:
      "A full-stack RAG platform for semantic Q&A over PDFs using FAISS/HuggingFace embeddings and Gemini AI, with JWT auth and multi-session chat history.",
    techStack: [
      "FastAPI",
      "LangChain",
      "Gemini AI",
      "MongoDB Atlas",
      "Vector Search",
      "FAISS",
      "HuggingFace",
      "React.js",
      "TypeScript",
    ],
    githubUrl: "https://github.com/Ezio7777/PDF_GPT",
    liveUrl: "https://pdf-gpt-amber.vercel.app/",
    images: [
      "/images/PDF_GPT/image1.png",
      "/images/PDF_GPT/image2.png",
      "/images/PDF_GPT/image3.png",
      "/images/PDF_GPT/image4.png",
      "/images/PDF_GPT/image5.png",
    ],
  },
  {
    title: "TeamFlow",
    category: "Real-time Collaboration",
    description:
      "A full-stack, real-time team collaboration platform featuring role-based access control, a drag-and-drop Kanban board, live team chat, and an integrated AI-powered assistant for task management.",
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Firebase Auth",
    ],
    githubUrl: "https://github.com/Ezio7777/TeamFlow",
    liveUrl: "https://team-flow-sable.vercel.app/",
    images: [
      "/images/TeamFlow/image1.png",
      "/images/TeamFlow/image2.png",
      "/images/TeamFlow/image3.png",
      "/images/TeamFlow/image4.png",
    ],
  },
  // {
  //   title: "MyQuiz",
  //   category: "Quiz Platform",
  //   description:
  //     "An interactive quiz platform built with the MERN stack: customizable quizzes, real-time monitoring and analytics through a dashboard, and unique access codes for participants to join and interact.",
  //   techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
  //   githubUrl: "https://github.com/Ezio7777/MyQuiz",
  //   liveUrl: "https://my-quiz-plum.vercel.app/",
  //   images: [
  //     "/images/MyQuiz/image1.png",
  //     "/images/MyQuiz/image2.png",
  //     "/images/MyQuiz/image3.png",
  //     "/images/MyQuiz/image4.png",
  //   ],
  // },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "💻",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: ["React.js", "Next.js", "React Native", "Redux", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Nest.js", "FastAPI", "REST APIs"],
  },
  {
    category: "Database Management",
    icon: "🗄️",
    skills: ["MongoDB", "SQL", "MySQL", "PostgreSQL"],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    skills: ["LangChain", "LangGraph", "Agentic AI", "Vector Embeddings", "Semantic Search", "OpenAI", "HuggingFace Models"],
  },
  {
    category: "Tools & Technologies",
    icon: "🛠️",
    skills: ["Git", "GitHub", "BitBucket", "Postman", "VS Code", "Vercel", "Render", "Jira"],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor's Degree in Computer Science and Engineering",
    institution: "Jaypee University of Engineering and Technology",
    duration: "Nov 2021 – May 2025",
    type: "university",
  },
];

export const certificates: Certificate[] = [
  {
    title: "The Complete JavaScript Course",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-5acd7718-b640-45d4-8200-9e91a2e585f0/",
  },
  {
    title: "Build Responsive Real-World Websites",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-a3a53d1e-593b-4474-a829-d36e1940d705/",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/Ezio7777", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/sunit-pal/", icon: "linkedin" },
  { label: "LeetCode", url: "https://leetcode.com/Ezio_007", icon: "code" },
  { label: "Email", url: "mailto:sunitpal2000@gmail.com", icon: "mail" },
];
