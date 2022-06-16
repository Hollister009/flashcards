import PageLayout from '../components/PageLayout';
import Grid from '../components/Grid';
import FlashCard from '../components/FlashCard';

function CategoryPage({ data = [] }) {
  return (
    <PageLayout>
      <div className="container">
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
      </div>
    </PageLayout>
  );
}

export default CategoryPage;
