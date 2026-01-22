import { useState, useEffect } from 'react';
// Notice we might need to go up two levels (../../) to find utils and types
import { getProjects } from '../../utils/projectUtils';
import type { Project } from '../../types';
import ProjectCard from '../../components/common/ProjectCard';

const ProjectList = () => {
  // 1. The Logic lives here now
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  return (
    // 2. The ID 'projects' stays here so the Hero button still works!
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold mb-8">Selected Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;