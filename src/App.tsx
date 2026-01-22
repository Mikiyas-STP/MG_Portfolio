// src/App.tsx
import { useState, useEffect } from 'react';

// 1. Import our custom logic and types
import { getProjects } from './utils/projectUtils';
import type { Project } from './types';

// 2. Import the "Frame" (Navbar + Footer)
import Layout from './components/layout/Layout';
import ProjectCard from './components/common/ProjectCard';

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
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-8">Selected Work</h1>
        
        {/* We use grid-cols-2 to show side-by-side cards on bigger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            // The Refactor: We pass the data into the component
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default App;