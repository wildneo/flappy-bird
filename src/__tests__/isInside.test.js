import isInside from '../blocks/app/utils/isInside';

describe('Add attributes', () => {
  const obj = {
    left: 10,
    top: 10,
    right: 20,
    bottom: 20,
  };
  const result = isInside(11, 15, obj);
  const result2 = isInside(0, 0, obj);

  test('should be true', () => {
    expect(result).toBeTruthy();
  });
  test('should be false', () => {
    expect(result2).toBeFalsy();
  });
});
