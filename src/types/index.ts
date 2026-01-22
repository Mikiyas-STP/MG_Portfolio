export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[]; //An array of strings
  repoLink: string;
  demoLink?: string; //Optional: Not all projects have a live demo
  image: string;     //Path to the image
}

export interface SocialLink {
  platform: string; //e.g., "GitHub", "LinkedIn"
  url: string;
  icon: string;     //We will store the icon name here later
}

// ... (Your Project and SocialLink interfaces are above this)

export interface GitHubProfile {
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  html_url: string;
}