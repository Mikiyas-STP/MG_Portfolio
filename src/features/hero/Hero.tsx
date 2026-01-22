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
  // NEW: Add background and subtle border/shadow to look like a frame
  className="bg-white p-4 md:p-8 rounded-xl shadow-xl border border-gray-100" 
>
        
        {/* Greeting */}
        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
          Hello, I'm Mikiyas 👋
        </motion.h2>
        
        {/* Headline */}
        <motion.h1 
        variants={itemVariants} 
        className="text-5xl md:text-7xl font-extrabold text-black tracking-tight mb-6"
    >
        <span className="text-gray-400 font-mono text-xl md:text-2xl block mb-4">Full-Stack Developer</span>
        Building 
        <span className="text-indigo-600"> Digital Products </span>
        <br className="hidden md:block" />
         that matter.
        
    </motion.h1>
        
        {/* Subtext */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          I am a Full-Stack Developer focused on React and Node.js. 
          I transform complex problems into beautiful, scalable, and user-friendly web interfaces.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-12">
          <a href="#projects" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-xl hover:bg-indigo-700 transition-all duration-300 transform hover:scale-[1.02]">
            View My Work
          </a>
          <a href="#contact" className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
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