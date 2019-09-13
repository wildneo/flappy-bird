export default class Pause {
  constructor(game, layer, parentScene) {
    this.game = game;
    this.parentScene = parentScene;
    this.layer = layer;
    this.parentSceneLayer = this.parentScene.layer;

    this.play = this.game.addTo(this.layer, 'play', [10, 10]);

    this.game.input.addToClick(this.play);
  }

  update() {
    // Resume
    this.game.input.clickOn(this.play, () => {
      this.game.resumeTo(this.parentScene);
    });
  }

  render(dt, cvs, ctx) {
    this.parentSceneLayer.render(dt, cvs, ctx);
  }
}
