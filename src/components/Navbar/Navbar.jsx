import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <h2>日本のフラッシュカード</h2>
    <ul className="navbar--links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/category">Category</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
