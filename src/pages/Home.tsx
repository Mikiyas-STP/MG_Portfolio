// src/pages/Home.tsx - FINAL VERSION
import Hero from '../features/hero/Hero';
import ProjectList from '../features/projects/ProjectList';
import AboutMe from '../features/about/AboutMe'; // ⬅️ NEW IMPORT

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe /> {/* ⬅️ NEW SECTION */}
      <ProjectList /> 
    </>
  );
};

export default Home;