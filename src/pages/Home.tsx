// src/pages/Home.tsx - FINAL VERSION

import Hero from '../features/hero/Hero';
import ProjectList from '../features/projects/ProjectList';
import AboutMe from '../features/about/AboutMe'; 
import SkillsGrid from '../features/skills/SkillsGrid'; // ⬅️ NEW IMPORT

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <SkillsGrid /> {/* ⬅️ NEW SECTION: Skills Grid */}
      <ProjectList /> 
    </>
  );
};

export default Home;