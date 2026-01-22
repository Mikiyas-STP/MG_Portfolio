import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails'; // 1. Import

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 2. The Dynamic Route. :id matches anything (1, 2, 99) */}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;