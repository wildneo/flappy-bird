import addAttributes from '../../utils/addAttributes';
import Group from './Group';

export default attrs => (position = []) => {
  const [x, y, angle] = position;
  const newGroup = new Group(x, y, angle);
  if (attrs) {
    addAttributes(newGroup, attrs);
  }

  return newGroup;
};
