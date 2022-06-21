import PageLayout from '../components/PageLayout';

function LearnedPage({ data = [] }) {
  return (
    <PageLayout>{!data.length ? <h3>The Page is empty :(</h3> : null}</PageLayout>
  );
}

export default LearnedPage;
