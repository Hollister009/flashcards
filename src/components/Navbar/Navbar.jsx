import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">
      <h2>日本のフラッシュカード</h2>
    </Link>
    <Link to="/learned" className="icon-wrapper">
      <FaHeart />
    </Link>
  </nav>
);

export default Navbar;
