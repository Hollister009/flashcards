import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">
      <h2>日本のフラッシュカード</h2>
    </Link>
  </nav>
);

export default Navbar;
