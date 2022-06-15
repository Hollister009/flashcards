import Grid from '../components/Grid';
import Card from '../components/Card';

function CategoryPage({ data = [] }) {
  return (
    <div className='container'>
      <Grid>
        {data.map(({ id, jap, hir, eng }) => (
          <Card
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
  );
}

export default CategoryPage;
