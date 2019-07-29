import isInside from './utils/isInside';

export default class InputManager {
  constructor(game) {
    this.game = game;
    this.initKeyboard();
    this.initMouseClick();
  }

  initKeyboard() {
    this.keys = {};
    this.keysLastState = {};

    document.addEventListener('keydown', (event) => {
      const { which } = event;
      this.keys = { [which]: true };
    });
    document.addEventListener('keyup', (event) => {
      const { which } = event;
      this.keys = { [which]: false };
    });
  }

  initMouseClick() {
    this.listened = [];
    this.clicked = [];

    this.game.cvs.addEventListener('click', (event) => {
      const { pageX, pageY } = event;
      const { offsetLeft, offsetTop } = this.cvs;
      const pos = [pageX - offsetLeft, pageY - offsetTop];
      this.listened.forEach((obj) => {
        if (isInside(...pos, obj)) {
          this.clicked = obj;
        }
      });
    });
  }

  pressKey(keyCode, cb, scene) {
    const keyPressed = !!this.keys[keyCode];
    if (this.keysLastState[keyCode] !== keyPressed) {
      this.keysLastState[keyCode] = keyPressed;
      cb.call(scene);
    }
  }

  clickOn(object, cb, scene) {
    if (object === this.clicked) {
      this.clicked = [];
      cb.call(scene);
    }
    this.clickOn.add = (...objects) => {
      this.listened.push(...objects);
    };
  }
}
