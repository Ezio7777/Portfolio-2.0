export interface Experience {
  role: string;
  company: string;
  duration: string;
  type: string;
  bullets: string[];
  link?: string;
  certLink?: string;
}

export interface Project {
  title: string;
  category?: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  type: "university" | "school";
}

export interface Certificate {
  title: string;
  issuer: string;
  url: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
