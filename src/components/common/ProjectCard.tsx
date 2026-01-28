// src/components/common/ProjectCard.tsx - FINAL, A++ VERSION

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
        // ADDED: cursor-pointer for excellent UX (and retained all visual styling)
        className="block h-full bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-700 cursor-pointer" 
      >
        {/* Image Container with Fixed 16:9 Aspect Ratio (The Fix for Consistency) */}
        <div className="aspect-video overflow-hidden bg-gray-100 border-b border-gray-300 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
            onError={(e) => {
              // Fallback to maintain the 16:9 aspect ratio if the image link is broken
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x225?text=NO+IMAGE'; 
            }}
          />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
        </div>

        {/* Content Section - Dark text on white card */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 text-slate-900">{project.title}</h3>
            <p className="text-slate-600 line-clamp-3 text-sm">
              {project.description}
            </p>
          </div>
          
          {/* Tech Tags */}
          <div className="mt-auto pt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="bg-gray-200 text-slate-700 text-xs font-medium px-2.5 py-0.5 rounded"
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