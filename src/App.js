import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import CategoryPage from './pages/Category';
import { useFlashCards } from './context';

import { data } from './fixture';
// const categories = [
//   {
//     id: 1,
//     name: '職業 profession',
//     category: 'profession',
//   },
// ];

const URL = 'http://localhost:4000/categories';

function App() {
  const [, setCategories] = useFlashCards();
  const isMounted = useRef(false);
  async function fetchData() {
    const response = await fetch(URL).then((res) => res.json());
    setCategories(response);
  }

  useEffect(() => {
    if (!isMounted.current) {
      fetchData();
    }

    return () => {
      isMounted.current = true;
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/:id" element={<CategoryPage data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
