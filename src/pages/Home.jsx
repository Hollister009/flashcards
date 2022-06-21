import PageLayout from '../components/PageLayout';
import CategoryCard from '../components/CategoryCard';
import { useCategories } from '../context';

function HomePage() {
  const [categories] = useCategories();

  return (
    <PageLayout>
      <ul className="categories" style={{ listStyle: 'none' }}>
        {categories.map(({ id, label }) => (
          <li key={id}>
            <CategoryCard id={id} label={label} />
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}

export default HomePage;
