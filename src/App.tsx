import Layout from './components/layout/Layout';
import Hero from './features/hero/Hero';
import ProjectList from './features/projects/ProjectList';

function App() {
  return (
    <Layout>
      <Hero />
      <ProjectList />
    </Layout>
  );
}

export default App;