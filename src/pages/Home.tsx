import Hero from '../features/hero/Hero';
import ProjectList from '../features/projects/ProjectList';
import AboutMe from '../features/about/AboutMe'; 
import SkillsGrid from '../features/skills/SkillsGrid'; // ⬅️ NEW IMPORT

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <SkillsGrid />
      <ProjectList /> 
    </>
  );
};

export default Home;