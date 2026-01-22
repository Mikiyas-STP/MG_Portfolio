import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { getProjectById } from '../utils/projectUtils';
import { useEffect } from 'react';

const ProjectDetails = () => {
  // 1. Get the ID from the URL (e.g., /project/1 -> id="1")
  const { id } = useParams<{ id: string }>();
  
  // 2. Find the project in our "Database"
  // We use Number() because URL params are always strings
  const project = getProjectById(Number(id));

  // 3. Scroll to top when opening a new page (UX Best Practice)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 4. Handle invalid IDs (Safety Check)
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <section className="py-20 md:py-32 max-w-4xl mx-auto px-4">
      {/* Back Button */}
      <Link to="/" className="inline-flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Projects
      </Link>

      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{project.title}</h1>
      <p className="text-xl text-gray-500 mb-8 max-w-2xl">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-12">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>

      {/* Links (Repo & Live Demo) */}
      <div className="flex gap-4 mb-16">
        <a 
          href={project.repoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <Github className="w-5 h-5" />
          View Code
        </a>
        {project.demoLink && (
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            Live Demo
          </a>
        )}
      </div>

      {/* Placeholder for Image (We will add real images in the final step) */}
      <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
        <p className="text-gray-400">Project Screenshot Placeholder</p>
      </div>
    </section>
  );
};

export default ProjectDetails;