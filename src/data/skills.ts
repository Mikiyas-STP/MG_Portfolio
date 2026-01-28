// src/data/skills.ts - FINAL ICON-DRIVEN STRUCTURE

export const skillCategories = [
    {
        category: 'Core Full-Stack',
        description: 'The languages and environments I use daily.',
        skills: [
            { name: 'React', icon: 'react' },
            //{ name: 'TypeScript', icon: 'type' },
            { name: 'Node.js/Express', icon: 'server' },
            { name: 'PostgreSQL', icon: 'database' },
            { name: 'JavaScript (ES6+)', icon: 'code' },
        ]
    },
    {
        category: 'Frontend & UI',
        description: 'Focus on performance, aesthetics, and user experience.',
        skills: [
            { name: 'Tailwind CSS', icon: 'layout-grid' },
            { name: 'Framer Motion', icon: 'move-horizontal' },
            { name: 'Advanced Routing', icon: 'route' },
            { name: 'Component Architecture', icon: 'component' },
        ]
    },
    {
        category: 'Backend & DevOps',
        description: 'Stability, security, and deployment pipeline experience.',
        skills: [
            { name: 'JWT Authentication', icon: 'shield-half' },
            { name: 'REST API Design', icon: 'link' },
            { name: 'Git/GitHub Flow', icon: 'git-fork' },
            { name: 'CI/CD (Netlify)', icon: 'cloud-lightning' },
        ]
    },
    {
        category: 'Aspirations (Next Steps)',
        description: 'My immediate goals for professional growth.',
        skills: [
            { name: 'Next.js (SSG/SSR)', icon: 'rocket' },
            { name: 'Unit Testing (Vitest)', icon: 'check-circle' },
            { name: 'WebSockets', icon: 'message-square-text' },
            { name: 'Cloud Basics (AWS/Azure)', icon: 'cloud' },
            { name: 'Python Backend Development', icon: 'rocket' },
        ]
    }
];