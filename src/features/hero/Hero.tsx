// src/features/hero/Hero.tsx - FINAL COMPRESSED & OPTIMIZED VERSION

import { motion } from 'framer-motion';
import { useGitHubProfile } from '../../hooks/useGitHubProfile';
import StatCard from '../../components/common/StatCard';

const Hero = () => {
  // CONFIRMED USERNAME (This must be correct for the stats to appear)
  const { profile, loading, error } = useGitHubProfile('Mikiyas-STP'); 

  // Framer Motion Variants (Ensures smooth entrance animation)
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
    // Reduced Vertical Padding for a compact look
    <section className="py-16 md:py-28 max-w-4xl mx-auto text-center px-4"> 
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Line 1: The Personal Hook (Smaller Top Margin) */}
        <motion.p 
          variants={itemVariants} 
          className="text-xl md:text-2xl text-slate-200 font-medium mb-2" 
        >
          Hi, I'm Mikiyas.
        </motion.p>

        {/* Line 2: The Core Job Title (Largest, Tight Line Height) */}
        <motion.h1 
          variants={itemVariants} 
          // Reduced to 6xl/7xl for better vertical fit
          className="text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-2 leading-tight" 
        >
          Full-Stack Developer
        </motion.h1>
        
        {/* Line 3: The Tech Stack (The Callout) */}
        <motion.h2 
          variants={itemVariants} 
          // Reduced to 3xl/4xl
          className="text-3xl md:text-4xl font-extrabold mb-8 text-cyan-400" 
        >
          Specializing in the PERN Stack.
        </motion.h2>
        
        {/* Subtext: Value Proposition */}
        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed" 
        >
          I turn complex problem statements into elegant, scalable, and fully-tested solutions using React, TypeScript, and modern deployment strategies.
        </motion.p>
        
        {/* Buttons */}
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