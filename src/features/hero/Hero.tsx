import { motion } from 'framer-motion'; // 1. Import Motion
import { useGitHubProfile } from '../../hooks/useGitHubProfile';
import StatCard from '../../components/common/StatCard';

const Hero = () => {
  const { profile, loading, error } = useGitHubProfile('your-real-username'); // ⚠️ Put your username here again!

  // 2. Define Animation Variants (The Recipe)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child element
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly lower and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Float up
  };

  return (
    <section className="py-20 md:py-32 max-w-4xl mx-auto text-center px-4">
      {/* 3. Wrap everything in a motion container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Greeting */}
        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
          Hello, I'm [Your Name] 👋
        </motion.h2>
        
        {/* Headline */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          Building digital <br className="hidden md:block" />
          <span className="text-blue-600">products that matter.</span>
        </motion.h1>
        
        {/* Subtext */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          I am a Full-Stack Engineer focused on React and Node.js. 
          I transform complex problems into beautiful, scalable, and user-friendly web interfaces.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-12">
          <a href="#projects" className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors">
            View My Work
          </a>
          <a href="mailto:email@example.com" className="border border-gray-300 text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
            Contact Me
          </a>
        </motion.div>

        {/* Stats */}
        {!error && (
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
      </motion.div>
    </section>
  );
};

export default Hero;