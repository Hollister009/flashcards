import { Link } from 'react-router-dom';
import './CategoryCard.scss';

const CategoryCard = ({ label, category }) => (
  <Link to={`categories/${category}`}>
    <div className="category-card">
      <p>{label}</p>
    </div>
  </Link>
);

export default CategoryCard;
