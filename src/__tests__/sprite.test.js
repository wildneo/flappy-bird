import Sprite from '../blocks/app/sprite';

describe('Sprite methods test', () => {
  const nemSprite = new Sprite(3, 3);
  nemSprite.src = '../img/bird.png';
  nemSprite.onload = test('should ', () => {
    expect(nemSprite).toBe(<img src="../img/bird.png" />);

  });
});

// horizontIndex
// verticalIndex
// frameWidth
// frameHight
// sX
// sY
