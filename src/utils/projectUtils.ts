import type { Project } from '../types';
import projectsData from '../data/projects.json';

export const getProjects = (): Project[] => {
  return projectsData as Project[];
};

export const getProjectById = (id: number): Project | undefined => {
  return (projectsData as Project[]).find((project) => project.id === id);
};