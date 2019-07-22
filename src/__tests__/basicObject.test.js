import BasicObject from '../blocks/app/basicObject';

describe('Basic object test', () => {
  const obj = new BasicObject('BasicObject');
  const obj2 = new BasicObject('BasicObject');

  test('should be BasicObject', () => {
    expect(obj).toBeInstanceOf(BasicObject);
    expect(obj.type).toBe('BasicObject');
  });

  test('should be zero', () => {
    expect(obj.x).toBe(0);
    expect(obj.y).toBe(0);
    expect(obj.angle).toBe(0);
  });

  test('should be 10', () => {
    obj.angle = 10;
    expect(obj.angle).toBe(10);
  });

  test('should be 100', () => {
    obj.pos = [100, 100];
    expect(obj.x).toBe(100);
    expect(obj.y).toBe(100);
    expect(obj.angle).toBe(0);
  });

  test('distance to', () => {
    obj.pos = [200, 100];
    obj2.pos = [100, 200];
    const result = { dX: 100, dY: -100 };
    expect(obj.distanceTo(obj2)).toEqual(result);
  });
});

describe('Basic object test', () => {
  const obj = new BasicObject('BasicObject');
  obj.attrs = { x: 12, fuck: ['Hoo!'] };

  console.log(JSON.stringify(obj));

  // test('should be BasicObject', () => {
  //   expect(obj).toBeInstanceOf(BasicObject);
  //   expect(obj.type).toBe('BasicObject');
  // });
});
