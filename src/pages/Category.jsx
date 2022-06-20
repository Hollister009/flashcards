import PageLayout from '../components/PageLayout';
import Grid from '../components/Grid';
import FlashCard from '../components/FlashCard';
import { useCategoryById } from '../context';

function CategoryPage() {
  const data = useCategoryById(1); // TODO: pass id from path parameter

  return (
    <PageLayout>
      <Grid>
        {data.map(({ id, jap, hir, eng }) => (
          <FlashCard
            key={id}
            frontFace={
              <>
                <h2>{jap}</h2>
                {hir.length ? <span>{`(${hir})`}</span> : null}
              </>
            }
            backFace={<h2>{eng}</h2>}
          />
        ))}
      </Grid>
    </PageLayout>
  );
}

export default CategoryPage;
