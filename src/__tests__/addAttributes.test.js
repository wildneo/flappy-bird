import addAttributes from '../blocks/app/utils/addAttributes';

describe('Add attributes', () => {
  const expected = {
    opacity: 100,
    position: { x: 0, y: 0 },
    animation: { flag: true, framerate: 30 }
  };
  const origin = { position: { x: 0, y: 0 }, animation: { flag: true } };
  const attrs = { opacity: 100, animation: { framerate: 30 } };
  const result = addAttributes(origin, attrs);

  test('#1', () => {
    expect(result).toEqual(expected);
  });
});
