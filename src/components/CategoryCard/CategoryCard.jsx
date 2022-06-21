import { Link } from 'react-router-dom';
import './CategoryCard.scss';

const CategoryCard = ({ id, label }) => (
  <Link to={`categories/${id}`}>
    <div className="category-card">
      <p>{label}</p>
    </div>
  </Link>
);

export default CategoryCard;
