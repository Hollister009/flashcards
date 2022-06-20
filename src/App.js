import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import CategoryPage from './pages/Category';

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
  const [categories, setCategories] = useState([]);
  const isMounted = useRef(false);
  async function fetchData() {
    const response = await fetch(URL).then((res) => res.json());
    setCategories(response);
  }

  useEffect(() => {
    if (!isMounted.current) {
      fetchData();
    }

    isMounted.current = true;
  }, []);

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
