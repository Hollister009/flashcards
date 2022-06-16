import { Link } from 'react-router-dom';
import './CategoryCard.scss';

const CategoryCard = ({ name, category }) => (
  <Link to={category}>
    <div className="category-card">
      <p>{name}</p>
    </div>
  </Link>
);

export default CategoryCard;
