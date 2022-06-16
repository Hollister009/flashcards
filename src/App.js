import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import CategoryPage from './pages/Category';

import { data } from './fixture';
const categories = [
  {
    id: 1,
    name: '職業 profession',
    category: 'profession',
  },
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage categories={categories} />} />
        <Route path="/:category" element={<CategoryPage data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
