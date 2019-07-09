import Sprite from '../blocks/app/sprite';

describe('Sprite methods test', () => {
  const sprite = new Sprite(3, 3);
  sprite.src = '../img/bird.png';
  console.log(sprite.spriteIndex);
  test('should be image', () => {
    expect(sprite).toBeInstanceOf(Image);
  });
  sprite.onload = test('index', () => {
    console.log(sprite.horizontIndex);
    
    // expect(sprite.index).toBeNull();

  });
});

// index
// horizontIndex
// verticalIndex
// spritePerRow
// spritePerCol
// sWidth
// sHeight
// sX
// sY
