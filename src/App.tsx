// src/App.tsx
import { useState, useEffect } from 'react';

// 1. Import our custom logic and types
import { getProjects } from './utils/projectUtils';
import type { Project } from './types';

// 2. Import the "Frame" (Navbar + Footer)
import Layout from './components/layout/Layout';
import ProjectCard from './components/common/ProjectCard';
import Hero from './features/hero/Hero'; 

function App() {
  // State to hold the project list
  const [projects, setProjects] = useState<Project[]>([]);

  // Load data when the component mounts
  useEffect(() => {
    const data = getProjects();
    setProjects(data);
  }, []);

  return (
    <Layout>
      {/* 2. DISPLAY HERO AT THE TOP */}
      <Hero /> 

      <section id="projects" className="py-12">
        <h2 className="text-3xl font-bold mb-8">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default App;