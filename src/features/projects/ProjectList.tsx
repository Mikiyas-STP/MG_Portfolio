// src/features/projects/ProjectList.tsx - FINAL VERSION

import { useState, useEffect } from 'react';
import { getProjects } from '../../utils/projectUtils';
import type { Project } from '../../types';
import ProjectCard from '../../components/common/ProjectCard';

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  return (
    // Add padding for breathing room
    <section id="projects" className="py-20 relative z-10"> 
      
      {/* 1. New Professional Section Header */}
      <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-2">
              My Work
          </h2>
          <p className="text-4xl font-extrabold text-white">
              Recent Projects & Case Studies
          </p>
          <p className="text-md text-slate-400 mt-4 max-w-xl mx-auto">
              Each project demonstrates a commitment to clean code, performance, and modern architecture. Click a card to view the technical deep dive.
          </p>
      </div>

      {/* 2. Project Grid (Floating Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;