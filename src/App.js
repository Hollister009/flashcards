import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/Home';
import CategoryPage from './pages/Category';

import './App.scss';
import { data } from './fixture';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
