import { useGitHubProfile } from '../../hooks/useGitHubProfile';
import StatCard from '../../components/common/StatCard';

const Hero = () => {
  // REPLACE with your actual GitHub username!
  const { profile, loading, error } = useGitHubProfile('your-real-username');

  return (
    <section className="py-20 md:py-32 max-w-4xl mx-auto text-center px-4">
      {/* ... (Keep your Greeting, Headline, and Subtext exactly as they are) ... */}
      
      <h2 className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
        Hello, I'm [Your Name] 👋
      </h2>
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
        Building digital <br className="hidden md:block" />
        <span className="text-blue-600">products that matter.</span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
        I am a Full-Stack Engineer focused on React and Node.js. 
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <a href="#projects" className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors">
          View My Work
        </a>
        <a href="mailto:email@example.com" className="border border-gray-300 text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
          Contact Me
        </a>
      </div>

      {/* NEW: Dynamic Stats Section */}
      {!error && (
        <div className="flex justify-center gap-6 md:gap-10">
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
        </div>
      )}
    </section>
  );
};

export default Hero;