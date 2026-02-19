import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../features/hero/Hero';
import ProjectList from '../features/projects/ProjectList';
import AboutMe from '../features/about/AboutMe'; 
import SkillsGrid from '../features/skills/SkillsGrid'; // ⬅️ NEW IMPORT

const Home = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);
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