import isOverlapped from '../blocks/app/utils/isOverlapped';

describe('Add attributes', () => {
  const obj = {
    left: 10,
    top: 10,
    right: 20,
    bottom: 20,
  };

  test('should be true', () => {
    const someObj = {
      left: 15,
      top: 15,
      right: 50,
      bottom: 20,
    };
    expect(isOverlapped(obj, someObj)).toBeTruthy();
  });
  test('should be false', () => {
    const someObj = {
      left: 50,
      top: 30,
      right: 50,
      bottom: 40,
    };
    expect(isOverlapped(obj, someObj)).toBeFalsy();
  });
});
