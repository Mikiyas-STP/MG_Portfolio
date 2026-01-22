import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link 
        to={`/project/${project.id}`} 
        className="block h-full border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col relative"
      >
        <span className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
        FULL-STACK
    </span>
        {/* 1. NEW: Image Section */}
        {/* We use h-48 to force a consistent height for all images */}
        <div className="h-48 overflow-hidden bg-gray-100 border-b border-gray-100">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            // Fallback if image fails
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x200?text=No+Image';
            }}
          />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 line-clamp-3 text-sm">
              {project.description}
            </p>
          </div>
          
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;