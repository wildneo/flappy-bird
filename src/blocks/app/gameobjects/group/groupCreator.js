import addAttributes from '../../utils/addAttributes';
import Group from './Group';

export default attrs => (parent) => {
  const newGroup = new Group(parent);
  if (attrs) {
    addAttributes(newGroup, attrs);
  }

  return newGroup;
};
