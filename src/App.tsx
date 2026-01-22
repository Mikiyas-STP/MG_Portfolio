// src/App.tsx
import Layout from './components/layout/Layout';
import Hero from './features/hero/Hero';
import ProjectList from './features/projects/ProjectList';

// TEMPORARY: Import the hook
import { useGitHubProfile } from './hooks/useGitHubProfile';

function App() {
  // TEMPORARY: Test the hook
  // Replace 'your-username' with your REAL GitHub username (e.g., 'facebook')
  const { profile, loading, error } = useGitHubProfile('your-real-username-here');
  
  // Check the browser console
  console.log('GitHub Hook Data:', { profile, loading, error });

  return (
    <Layout>
      <Hero />
      <ProjectList />
    </Layout>
  );
}

export default App;