const Hero = () => {
  return (
    <section className="py-20 md:py-32 max-w-4xl mx-auto text-center">
      
      {/* 1. Greeting */}
      <h2 className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
        Hello, I'm [Your Name] 👋
      </h2>
      
      {/* 2. Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
        Building digital <br className="hidden md:block" />
        <span className="text-blue-600">products that matter.</span>
      </h1>
      
      {/* 3. Subtext */}
      <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
        I am a Full-Stack Engineer focused on React and Node.js. 
        I transform complex problems into beautiful, scalable, and user-friendly web interfaces.
      </p>
      
      {/* 4. Buttons */}
      <div className="flex justify-center gap-4">
        <a 
          href="#projects" 
          className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors"
        >
          View My Work
        </a>
        <a 
          href="mailto:your.email@example.com" 
          className="border border-gray-300 text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;