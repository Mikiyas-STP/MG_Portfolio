import { useState, useEffect } from 'react';
import { getProjects } from './utils/projectUtils';
import type { Project } from './types';

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const data = getProjects();
    setProjects(data);
  }, []);

  return (
    <main>
      <h1>My Portfolio</h1>
      <section>
        <h2>Projects</h2>
        {projects.map((project) => (
          <div key={project.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>Tech: {project.technologies.join(', ')}</small>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;