import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AssetCategories from './pages/AssetCategories';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AssetCategories />} />
      </Routes>
    </Router>
  );
}

export default App;

