import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { getProjectById } from '../utils/projectUtils';
import { getCaseStudyById } from '../data/projectCaseStudies';
import { useEffect } from 'react';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = Number(id);
  const project = getProjectById(projectId);
  const caseStudy = getCaseStudyById(projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/" className="text-cyan-400 hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-20 max-w-5xl mx-auto px-4 relative z-10">
      <div className="bg-white p-6 md:p-12 rounded-xl shadow-2xl border border-gray-100 text-slate-900">

        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-cyan-400 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{project.title}</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl">{project.description}</p>
        
        <div className="flex gap-4 mb-10">
          <a 
            href={project.repoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Github className="w-5 h-5" />
            View Code
          </a>
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>
        <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg mb-12 border border-gray-200">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {caseStudy && (
            <>
                <h3 className="text-3xl font-bold mb-4 border-b pb-2">The Challenge</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                    {caseStudy.challenge}
                </p>
                <h3 className="text-3xl font-bold mb-4 border-b pb-2">My Solution</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                    {caseStudy.solution}
                </p>
                <h4 className="text-2xl font-bold mt-8 mb-3">Key Architectural Decisions</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                    {caseStudy.architectureDecisions.map((decision, index) => (
                        <li key={index}>{decision}</li>
                    ))}
                </ul>
            </>
        )}
        <h4 className="text-2xl font-bold mt-8 mb-3">Technology Used</h4>
        <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
                <span key={tech} className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {tech}
                </span>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;