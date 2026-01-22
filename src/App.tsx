import { Routes, Route } from 'react-router-dom'; // 1. Import Routing tools
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Layout>
      {/* 2. Define the Routing Table */}
      <Routes>
        {/* If URL is "/", show Home */}
        <Route path="/" element={<Home />} />
        
        {/* Future routes will go here (e.g., /project/:id) */}
      </Routes>
    </Layout>
  );
}

export default App;