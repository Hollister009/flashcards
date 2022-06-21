import './Badge.scss';

const Badge = ({ children, content }) => (
  <div className="badge">
    {children}
    {content && <span className="badge--content">{content}</span>}
  </div>
);

export default Badge;
