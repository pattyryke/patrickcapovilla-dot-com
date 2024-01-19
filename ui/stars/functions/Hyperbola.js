import gsap from "gsap";

export default class Hyperbola {
    constructor(a, b, width, height) {
      this.a = a;
      this.b = b;
      this.width = width;
      this.height = height;
    }
  
    getRandCoord(position) {
      let randX, randY;
      let xVals, yVals;
  
      switch (position) {
        case 'bottom':
            randY = this.randomCoord(this.height) + this.height / 2;
            xVals = this.calculateX(randY - this.height / 2);
            randX = gsap.utils.random(xVals.negX, xVals.posX) + this.width / 2;
            break;
        case 'top':
            randY = -this.randomCoord(this.height) + this.height / 2;
            xVals = this.calculateX(randY - this.height / 2);
            randX = gsap.utils.random(xVals.negX, xVals.posX) + this.width / 2;
            break;
        case 'right':
            randX = -this.randomCoord(this.width) + this.width / 2;
            yVals = this.calculateY(randX - this.width / 2);
            randY = gsap.utils.random(yVals.negY, yVals.posY) + this.height / 2;
            break;
        case 'left':
            randX = this.randomCoord(this.width) + this.width / 2;
            yVals = this.calculateY(randX - this.width / 2);
            randY = gsap.utils.random(yVals.negY, yVals.posY) + this.height / 2;
            break;
        default:
          throw new Error('Invalid direction');
      }
  
      return { x: randX, y: randY };
    }
  
    randomCoord(dimension) {
      // Generate a random coordinate within the range -dimension/2 to dimension/2
      return gsap.utils.random(-dimension / 2, dimension / 2);
    }
  
    calculateY(x) {
        const val = 1 + (x**2 / this.a**2);
        if (val >= 0) {
            const sqrtVal = this.b * Math.sqrt(val);
            return { negY: -sqrtVal, posY: sqrtVal };
        }
        return null;
    }      
  
    calculateX(y) {
        const val = 1 + (y**2 / this.b**2);
        if (val >= 0) {
            const sqrtVal = this.a * Math.sqrt(val);
            return { negX: -sqrtVal, posX: sqrtVal };
        }
        return null;
    }

    printHyperbola(containerRef) {
        if (!containerRef.current) return;
    
        const numberOfPoints = 100; // Adjust as needed for density of points
    
        for (let i = -this.width / 2; i <= this.width / 2; i += this.width / numberOfPoints) {
            const yVals = this.calculateY(i);
    
            if (yVals) {
                this.createPoint(i + this.width / 2, yVals.posY + this.height / 2, containerRef.current);
                this.createPoint(i + this.width / 2, yVals.negY + this.height / 2, containerRef.current);
            }
        }
    }

    createPoint(x, y, container) {
        const point = document.createElement('div');
        point.style.position = 'absolute';
        point.style.left = `${x}px`;
        point.style.top = `${y}px`;
        point.style.width = '1px'; // Adjust size as needed
        point.style.height = '1px'; // Adjust size as needed
        point.style.backgroundColor = 'red'; // Adjust color as needed
        point.style.borderRadius = '50%';
        point.style.zIndex = 10;

        container.appendChild(point);
    }
}
