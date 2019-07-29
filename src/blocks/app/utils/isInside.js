export default (x, y, obj) => {
  // eslint-disable-next-line object-curly-newline
  const { left, top, right, bottom } = obj;

  return !(x < left || x > right || y < top || y > bottom);
};
