import { useEffect, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCategories } from './context';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import CategoryPage from './pages/Category';
import LearnedPage from './pages/Learned';

const URL = 'http://localhost:4000/categories';

function App() {
  const [, setCategories] = useCategories();
  const isMounted = useRef(false);

  const fetchData = useCallback(async () => {
    const response = await fetch(URL).then((res) => res.json());
    setCategories(response);
  }, [setCategories]);

  useEffect(() => {
    if (!isMounted.current) {
      fetchData();
    }

    return () => {
      isMounted.current = true;
    };
  }, [fetchData]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/:id" element={<CategoryPage />} />
        <Route path="/learned" element={<LearnedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
