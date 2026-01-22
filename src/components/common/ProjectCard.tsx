import { motion } from 'framer-motion'; // 1. Import
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    // 2. Change to motion.div
    <motion.div 
      initial={{ opacity: 0, y: 50 }} // Start invisible and 50px lower
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible when in screen
      transition={{ duration: 0.5 }} // Take 0.5 seconds
      viewport={{ once: true }} // Only animate once (don't keep flashing as you scroll up/down)
      className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white flex flex-col h-full"
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
    </motion.div>
  );
};

export default ProjectCard;