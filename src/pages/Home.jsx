import PageLayout from '../components/PageLayout';
import CategoryCard from '../components/CategoryCard';
import { useFlashCards } from '../context';

function HomePage() {
  const [categories] = useFlashCards();

  return (
    <PageLayout>
      <ul className="categories" style={{ listStyle: 'none' }}>
        {categories.map(({ id, label, name }) => (
          <li key={id}>
            <CategoryCard label={label} category={name} />
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}

export default HomePage;
