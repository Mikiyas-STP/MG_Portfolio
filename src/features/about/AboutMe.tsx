// src/features/about/AboutMe.tsx - NEW COMPONENT

import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section id="about" className="py-12 md:py-20 relative z-10 max-w-4xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 md:p-12 border border-slate-800 shadow-2xl text-left"
            >
                <h2 className="text-3xl font-extrabold text-white mb-4 border-b border-cyan-400/50 pb-2">
                    About Me & Growth
                </h2>
                
                <div className="space-y-6 text-slate-300">
                    <p>
                        **Professional Story:** I began my journey by successfully completing a full-stack project using the PERN stack (PostgreSQL, Express, React, Node). This experience provided the foundation for engineering principles, leading to a deep focus on **React and TypeScript mastery.**
                    </p>
                    <p>
                        **Technical Focus:** My specialty lies in creating well-architected, performant front-end solutions. I prioritize clean code, automated testing, and functional programming patterns to ensure long-term maintainability. I treat code as a liability, not an asset, always striving for simplicity.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-cyan-400 pt-4">Beyond the Code</h3>
                    <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
                        <li>**Hobbies:** I enjoy [Your Hobby 1] and [Your Hobby 2], which helps me [Skill Transfer, e.g., apply creative problem-solving].</li>
                        <li>**Community:** I actively participate in [Local Dev Group] or contribute to [Small Open Source Project].</li>
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMe;