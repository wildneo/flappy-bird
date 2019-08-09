import addAttributes from '../../utils/addAttributes';
import Group from './Group';

export default attrs => () => {
  const newGroup = new Group();
  if (attrs) {
    addAttributes(newGroup, attrs);
  }

  return newGroup;
};
