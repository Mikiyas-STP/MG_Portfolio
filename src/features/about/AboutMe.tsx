// src/features/about/AboutMe.tsx - FINAL FORMATTING FIX (Preferred Dark Aesthetic)

import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section id="about" className="py-12 md:py-20 relative z-10 max-w-4xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                // Restoring preferred dark aesthetic
                className="bg-slate-800/70 backdrop-blur-md rounded-xl p-8 md:p-12 border border-slate-700 shadow-2xl text-left" 
            >
                <h2 className="text-3xl font-extrabold text-white mb-4 border-b border-cyan-400/50 pb-2">
                    About Me & Professional Growth
                </h2>
                
                <div className="space-y-6 text-slate-300">
                    
                    {/* 1. PROFESSIONAL STORY (Clear Bolding) */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Professional Story</h3>
                        <p className="leading-relaxed">
                            I began my journey with CodeYourFuture by successfully completing the Software Development Course and the Launch(Software Engineering) Module which allowed me to develop full-stack project using the PERN stack (PostgreSQL, Express, React, Node). This experience provided the foundation for engineering principles, leading to a deep focus on React and Node mastery.
                        </p>
                    </div>

                    {/* 2. TECHNICAL FOCUS (Clear Bolding) */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Technical Focus</h3>
                        <p className="leading-relaxed">
                            My specialty lies in creating well-architected full-stack solutions. I prioritize clean code, unit testing, and functional programming patterns to ensure long-term maintainability.
                        </p>
                    </div>

                    {/* 3. BEYOND THE CODE (List Format) */}
                    <div className="pt-4">
                        <h3 className="text-xl font-semibold text-cyan-400 mb-4">Beyond the Code</h3>
                        <ul className="list-inside space-y-2 pl-4 text-sm text-slate-400">
                            <li>
                                As a Hobby I enjoy Swimming and Socialising with friends and different communities, which helps me develop my soft skills such as communication and adaptability.
                            </li>
                            <li>
                                I actively participate in CodeYourFuture Community and contribute to group Projects which are mostly done with the PERN stack and Python.
                            </li>
                        </ul>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default AboutMe;