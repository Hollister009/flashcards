import PageLayout from '../components/PageLayout';
import CategoryCard from '../components/CategoryCard';
import List from '../components/List';
import { useCategories } from '../context';

function HomePage() {
  const [categories] = useCategories();

  return (
    <PageLayout>
      <List>
        {categories.map(({ id, label }) => (
          <List.Item key={id}>
            <CategoryCard id={id} label={label} />
          </List.Item>
        ))}
      </List>
    </PageLayout>
  );
}

export default HomePage;
