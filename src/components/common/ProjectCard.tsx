import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // 1. Import Link
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
      className="h-full" // Ensure height consistency
    >
      {/* 2. Wrap the whole card in a Link */}
      <Link 
        to={`/project/${project.id}`} 
        className="block h-full border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white flex flex-col"
      >
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 line-clamp-3">
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
      </Link>
    </motion.div>
  );
};

export default ProjectCard;