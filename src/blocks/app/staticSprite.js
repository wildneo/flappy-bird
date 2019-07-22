import Sprite from './sprite';
import drawSprite from './drawSprite';

export default class StaticSprite extends Sprite {
  render(ctx) {
    drawSprite(ctx, this);
  }
}
