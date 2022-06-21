import './List.scss';

const List = ({ children, ...props }) => (
  <ul className="list" {...props}>
    {children}
  </ul>
);

const ListItem = ({ children, ...props }) => (
  <li className="list-item" {...props}>
    {children}
  </li>
);

List.Item = ListItem;

export default List;
