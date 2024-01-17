import gsap from "gsap";

export default class Stars {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.direction = this.getRandomDirection();
      this.initPos = this.getInitPos();
      this.destinationPos = this.getDestination();
    }
  
    getRandomDirection() {
      const directions = ['top', 'bottom', 'right', 'left'];
      return directions[Math.floor(Math.random() * directions.length)];
    }
  
    getInitPos() {
      let randX, randY;
  
      switch (this.direction) {
        case 'top':
          randX = (this.width/2) + (gsap.utils.random(-20, 20));
          randY = (this.height/2) + (gsap.utils.random(-50, 0));
          break;
        case 'bottom':
          randX = (this.width/2) + (gsap.utils.random(-20, 20));
          randY = (this.height/2) + (gsap.utils.random(50, 0));
          break;
        case 'right':
          randX = (this.width/2) + (gsap.utils.random(50, 0));
          randY = (this.height/2) + (gsap.utils.random(-20, 20));
          break;
        case 'left':
          randX = (this.width/2) + (gsap.utils.random(-50, 0));
          randY = (this.height/2) + (gsap.utils.random(-20, 20));
          break;
        default:
          throw new Error('Invalid direction');
      }

      return {x: randX, y: randY};
    }

    getDestination() {
      switch (this.direction) {
        case 'top':
          return { x: gsap.utils.random(0, this.width), y: -100 };
        case 'bottom':
          return { x: gsap.utils.random(0, this.width), y: this.height + 100 };
        case 'left':
          return { x: -100, y: gsap.utils.random(0, this.height) };
        case 'right':
          return { x: this.width + 100, y: gsap.utils.random(0, this.height) };
        default:
          throw new Error('Invalid direction');
      }
    }
  
  }
  