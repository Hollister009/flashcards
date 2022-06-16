import './PageLayout.scss';

const PageLayout = ({ children }) => (
  <main className="layout">
    <div className="container">{children}</div>
  </main>
);

export default PageLayout;
