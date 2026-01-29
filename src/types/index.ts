export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  repoLink: string;
  demoLink?: string; 
  image: string; 
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; 
}

export interface GitHubProfile {
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  html_url: string;
}