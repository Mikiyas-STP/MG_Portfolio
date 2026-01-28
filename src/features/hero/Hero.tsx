// src/features/hero/Hero.tsx - FINAL LAUNCH-READY VERSION

import { motion } from 'framer-motion';
import { useGitHubProfile } from '../../hooks/useGitHubProfile';
import StatCard from '../../components/common/StatCard';

const Hero = () => {
  // ⚠️ Ensure your GitHub username is correct here!
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.17, 0.55, 0.55, 1] } },
  };

  return (
    <section className="py-24 md:py-40 max-w-4xl mx-auto text-center px-4">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Job Title: Primary Color Highlight */}
        <motion.h2 
          variants={itemVariants} 
          className="text-lg md:text-xl text-cyan-400 font-semibold mb-3 tracking-widest uppercase"
        >
          Software Developer (PERN Specialist)
        </motion.h2>
        
        {/* Headline: Main Impact */}
        <motion.h1 
          variants={itemVariants} 
          className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-6 leading-tight"
        >
          Building products <br />
          with <span className="text-cyan-400">React & Node.</span>
        </motion.h1>
        
        {/* Subtext: Value Proposition */}
        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          I turn complex problem statements into elegant, scalable, and fully-tested applications using React, PostgreSQL, and modern cloud deployment strategies.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-12">
          <a 
            href="#projects" 
            className="bg-cyan-400 text-slate-900 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-cyan-300 transition-all"
          >
            View My Case Studies
          </a>
          <a 
            href="#contact" 
            className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Stats Section */}
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
        
        {/* Show error if necessary */}
        {error && (
            <p className="text-red-500 mt-4">Could not load GitHub stats. Please check the console for details.</p>
        )}
        
      </motion.div>
    </section>
  );
};

export default Hero;