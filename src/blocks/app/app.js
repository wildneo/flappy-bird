import { default as ready } from '../../js/utils/ready';




class Game {
    constructor() {
        this.canvas = document.querySelector('#game');
        this.context = this.canvas.getContext('2d');
        this.setScene(GameScene);
        this.initInput();
        this.start();
    }
    setScene(Scene) {
        this.activeScene = new Scene(this);
    }
    initInput() {
        this.keys = {};
        document.addEventListener('keydown', event => this.keys[event.which] = true);
        document.addEventListener('keyup', event => this.keys[event.which] = false);
        // console.log(this.keys);
        
    }
    checkKeyPress(charName) {
        this.keyPressed = !!this.keys[charName];
        this.lastState = this.lastState || {};

        if (this.lastState[charName] !== this.keyPressed) {
            this.lastState[charName] = this.keyPressed;
            return this.keyPressed;
        } else {
            return false;
        }
    }
    update() {
        this.activeScene.update();
    }
    render() {
        this.context.save();
        this.activeScene.render(this.context);
        this.context.restore();
        
    }
    start() {
        const draw = () => {
            this.update();
            this.render();
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    }
};

class GameScene {
    constructor(game) {
        this.game = game;
        this.degrees = 0;
        this.y = 0;
        this.currentSpeed = 0;
        this.gravity = 0.4;
    }
    update() {
        console.log(this.degrees);
        
        if (this.y > 500) this.y = 0;
        this.currentSpeed -= this.gravity;
        this.y -= this.currentSpeed;
        if (this.degrees < 20) this.degrees++;
        if (this.degrees < 80) this.degrees -= this.currentSpeed /4;
        if (this.game.checkKeyPress(32)) {
             this.degrees = -20;
            // console.log('Hello, World!');
            // this.game.setScene(Hello);
            this.currentSpeed = 8;
        }
    }
    render(context) {
        context.clearRect(0, 0, 500, 500);
        context.fillStyle = 'blue';
        context.fillRect(0, 0, 500, 500);
        context.fillStyle = '#ee4024';
        context.translate(250, this.y);
        context.rotate(this.degrees * Math.PI / 180);
        context.fillRect(-17, -12, 34, 24);
    }
};

// class Hello {
//     constructor(game) {
//         this.game = game;
//     }
//     update() {
//     // Nothing 
//     }
//     render() {
//         console.log('Hello, World!');
//         game.context.fillRect(10,10,100,100);
//     }
// };

class Object {
    constructor() {
        
    }
};

const game = new Game();