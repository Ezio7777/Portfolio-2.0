import type { Experience, Project, SkillCategory, Education, SocialLink } from "@/types";

export const personalInfo = {
  name: "Sunit Pal",
  tagline: "AI + Full-Stack Engineer",
  bio: "I build high-performance, beautiful web and mobile applications. Specialising in React ecosystems, AI-integrated systems, and scalable full-stack architectures that users love.",
  location: "West Bengal, India",
  email: "sunitpal2000@gmail.com",
  phone: "7478876252",
  resumeUrl: "https://drive.google.com/file/d/1ZdaYdkym2N2anPgEvkSvc817bURPJPic/view?usp=sharing",
};

export const experiences: Experience[] = [
  {
    role: "React App Developer",
    company: "ProjectStudio.ai",
    duration: "Nov 2025 – Mar 2026",
    type: "Internship",
    bullets: [
      "Developed high-performance React Native mobile applications to streamline workflows for interior design studios and professional architects.",
      "Built sleek, responsive mobile interfaces in collaboration with design teams to ensure a high-quality and consistent user experience across both iOS and Android platforms.",
      "Integrated mobile components with backend APIs to ensure real-time data synchronization for all active on-site construction users.",
    ],
    link: "https://www.projectstudio.ai/",
    certLink: "https://drive.google.com/file/d/1h9MLvadzN8L_2nI0yr7px_O29rGJr3Co/view?usp=sharing",
  },
  {
    role: "Front-End Developer",
    company: "Studio137",
    duration: "Nov 2024 – Nov 2025",
    type: "Full-time",
    bullets: [
      "Engineered responsive web applications and reusable UI components using React.js to ensure consistent user experiences.",
      "Managed complex application state and optimized component performance using React hooks for smooth cross-device functionality.",
      "Integrated APIs for dynamic data fetching and resolved UI bottlenecks to maintain high-performance standards.",
    ],
    link: "https://www.studio137.co.za/",
    certLink: "https://drive.google.com/file/d/1omGE5PHsqwNVIjD3bQ9oN8ofW1HlwfOG/view?usp=sharing",
  },
];

export const projects: Project[] = [
  {
    title: "PDF GPT",
    description:
      "An AI-powered document chat system. Built a full-stack application with FastAPI implementing secure authentication, chat management, and semantic search using vector embeddings and Google Gemini AI.",
    techStack: [
      "FastAPI",
      "Python",
      "MongoDB Atlas",
      "LangChain",
      "Gemini AI",
      "HuggingFace",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
    ],
    githubUrl: "https://github.com/Ezio7777/PDF_GPT",
    liveUrl: "https://pdf-gpt-amber.vercel.app/",
  },
  {
    title: "E-Mandi",
    description:
      "A MERN-stack agricultural trading platform empowering digital connectivity between farmers and buyers. Features comprehensive dashboards, inventory control, order tracking, and a secure OTP-based verification system.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "OTP Auth",
      "REST APIs",
    ],
    githubUrl: "https://github.com/Ezio7777/E-Mandi",
    liveUrl: "https://e-mandi-eight.vercel.app/",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "Redux", "HTML", "CSS / SCSS", "Bootstrap"],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Auth", "Python"],
  },
  {
    category: "Database Management",
    icon: "🗄️",
    skills: ["MongoDB Atlas", "Vector Search", "PostgreSQL", "MySQL"],
  },
  {
    category: "AI / ML",
    icon: "🤖",
    skills: ["LangChain", "Vector Embeddings", "Semantic Search", "Google Gemini API", "HuggingFace Models"],
  },
  {
    category: "Languages",
    icon: "💻",
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++"],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor's Degree in Computer Science and Engineering",
    institution: "Jaypee University of Engineering and Technology",
    duration: "Nov 2021 – May 2025",
    type: "university",
  },
  {
    degree: "Senior Secondary (XII), Science",
    institution: "Bahula Sasi Smriti High School",
    duration: "Jan 2012 – Jul 2020",
    type: "school",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/Ezio7777", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/sunit-pal", icon: "linkedin" },
  { label: "LeetCode", url: "https://leetcode.com/Ezio_007", icon: "code" },
  { label: "Email", url: "mailto:sunitpal2000@gmail.com", icon: "mail" },
];
