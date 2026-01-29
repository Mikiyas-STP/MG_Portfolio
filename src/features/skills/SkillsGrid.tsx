import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import * as LucideIcons from 'lucide-react';

const getIcon = (iconName: string, className: string) => {
    const IconComponent = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return IconComponent ? <IconComponent className={className} aria-hidden="true" /> : null;
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsGrid = () => {
    return (
        <section id="skills" className="py-12 md:py-20 relative z-10 max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-2">
                    My Technical Toolkit
                </h2>
                <p className="text-4xl font-extrabold text-white">
                    Skills & Future Aspirations
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((categoryData, index) => (
                    <motion.div
                        key={categoryData.category}
                        initial="hidden"
                        whileInView="visible"
                        variants={itemVariants}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-slate-800 shadow-xl"
                    >
                        <h3 className="text-xl font-bold text-white mb-2 border-b border-cyan-400/50 pb-2">
                            {categoryData.category}
                        </h3>
                        <p className="text-sm text-slate-400 mb-6">{categoryData.description}</p> 

                        <div className="flex flex-wrap gap-3">
                            {categoryData.skills.map((skill) => (
                                <span 
                                    key={skill.name}
                                    aria-label={skill.name}
                                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                                        categoryData.category === 'Aspirations' 
                                            ? 'border-slate-600 text-slate-400' 
                                            : 'bg-slate-800 border-cyan-400/50 text-cyan-400 hover:shadow-cyan-400/40 hover:shadow-lg' 
                                    }`}
                                >
                                    <span className="mr-2">
                                        {getIcon(skill.icon, "w-6 h-6")} 
                                    </span>
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsGrid;