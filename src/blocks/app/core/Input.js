import isInside from '../utils/isInside';

export default class InputManager {
  constructor(game) {
    this.game = game;
    this.initKeyboard();
    this.initMouse();
  }

  initKeyboard() {
    this.keys = {};
    this.keyPressed = {};
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

  initMouse() {
    this.listened = [];
    this.clicked = [];

    this.game.cvs.addEventListener('click', (event) => {
      const { pageX, pageY } = event;
      const { offsetLeft, offsetTop } = this.game.cvs;
      const pos = [pageX - offsetLeft, pageY - offsetTop];
      this.listened.forEach((obj) => {
        if (isInside(...pos, obj)) {
          this.clicked = obj;
        }
      });
    });
  }

  pressKey(keyCode, cb) {
    if (this.checkKeyPress(keyCode)) {
      cb.call(this.game.activeScene);
    }
  }

  checkKeyPress(keyCode) {
    this.keyPressed = !!this.keys[keyCode];

    if (this.keysLastState[keyCode] !== this.keyPressed) {
      this.keysLastState[keyCode] = this.keyPressed;
      return this.keyPressed;
    }
    return false;
  }

  clickOn(object, cb) {
    if (object === this.clicked) {
      this.clicked = [];
      cb.call(this.game.activeScene);
    }
  }

  addToClick(...objects) {
    this.listened.push(...objects);
  }
}
