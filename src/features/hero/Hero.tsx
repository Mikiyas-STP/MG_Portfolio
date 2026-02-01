import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { useGitHubProfile } from '../../hooks/useGitHubProfile';
import StatCard from '../../components/common/StatCard';

const Hero = () => {
  const { profile, loading, error } = useGitHubProfile('Mikiyas-STP'); 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};
 

  return (
    <section className="py-16 md:py-28 max-w-4xl mx-auto text-center px-4"> 
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <motion.p 
          variants={itemVariants} 
          className="text-xl md:text-2xl text-slate-200 font-medium mb-2" 
        >
          Hi, I'm Mikiyas.
        </motion.p>

        <motion.h1 
          variants={itemVariants} 
          className="text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-2 leading-tight" 
        >
          Full-Stack Developer
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants} 
          className="text-3xl md:text-4xl font-extrabold mb-8 text-cyan-400" 
        >
          Specializing in the PERN Stack.
        </motion.h2>
        
        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed" 
        >
          I turn complex problem statements into elegant, scalable, and fully-tested solutions using React, TypeScript, and modern deployment strategies.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-12">
          <a 
            href="#projects" 
            className="bg-cyan-400 text-slate-900 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-cyan-300 transition-all"
          >
            View My Projects
          </a>
          <a 
            href="#contact" 
            className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        {!error && !loading && (
          <motion.div variants={itemVariants} className="flex justify-center gap-6 md:gap-10">
            <StatCard 
              label="Repos" 
              value={profile?.public_repos || 0} 
              loading={loading} 
            />
            <StatCard 
              label="Followers" 
              value={profile?.followers || 0} 
              loading={loading} 
            />
          </motion.div>
        )}        
        {error && (
            <p className="text-red-500 mt-4">Could not load GitHub stats. Please check the console for details.</p>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;