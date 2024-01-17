export default class Hyperbola {
    constructor(a, b, width, height) {
      this.a = a;
      this.b = b;
      this.width = width;
      this.height = height;
    }
  
    getRandCoord(position) {
      let randX, randY;
  
      switch (position) {
        case 'bottom':
          randX = this.randomCoord(this.width * 0.75) + this.width / 2;
          randY = this.calculateY(randX - this.width / 2) + this.height / 2;
          break;
        case 'top':
          randX = this.randomCoord(this.width * 0.75) + this.width / 2;
          randY = -this.calculateY(randX - this.width / 2) + this.height / 2;
          break;
        case 'left':
          randY = this.randomCoord(this.height * 0.75) + this.height / 2;
          randX = -this.calculateX(randY - this.height / 2) + this.width / 2;
          break;
        case 'right':
          randY = this.randomCoord(this.height * 0.75) + this.height / 2;
          randX = this.calculateX(randY - this.height / 2) + this.width / 2;
          break;
        default:
          throw new Error('Invalid direction');
      }
  
      return { x: randX, y: randY };
    }
  
    randomCoord(dimension) {
      // Generate a random coordinate within the range -dimension/2 to dimension/2
      return Math.random() * dimension - dimension / 2;
    }
  
    calculateY(x) {
      return this.a * Math.sqrt((x**2 / this.b**2) + 1);
    }
  
    calculateX(y) {
        const val = 1 + (y**2 / this.b**2);
        return val >= 0 ? this.a * Math.sqrt(val) : null;
    }
      
  }
