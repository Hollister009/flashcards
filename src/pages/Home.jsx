import PageLayout from '../components/PageLayout';
import CategoryCard from '../components/CategoryCard';

function HomePage({ categories = [] }) {
  return (
    <PageLayout>
      <ul className="categories" style={{ listStyle: 'none' }}>
        {categories.map(({ id, name, category }) => (
          <li key={id}>
            <CategoryCard name={name} category={category} />
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}

export default HomePage;
