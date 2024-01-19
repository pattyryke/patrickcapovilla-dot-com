import gsap from 'gsap';
import Mapper from './functions/Mapper';

export default class Star {
  constructor(width, height) {
    this.container = {
      width: width,
      height: height,
    };
    this.mapper = new Mapper(this.container.width, this.container.height);
    this.initPos = this.getInitPos();
    this.direction = this.getDirection();
    this.destinationPos = {
      x: 0,
      y: 0,
    };
  }

  getDirection() {
    if (this.initPos.x > this.mapper.x(0)) {
      if (this.initPos.y > this.mapper.y(0)) {
        // Bottom Right
        return 'bottom-right';
      } else {
        // Top Right
        return 'top-right';
      }
    } else {
      if (this.initPos.y > this.mapper.y(0)) {
        // Bottom Left
        return 'bottom-left';
      } else {
        // Top Left
        return 'top-left';
      }
    }
  }

  getInitPos() {
    return { x: this.mapper.x(gsap.utils.random(-100, 100)), y: this.mapper.y(gsap.utils.random(-100, 100)) };
  }

  getDestination() {
    let destination = { x: 0, y: 0 };
    switch (this.direction) {
      case 'top-left':
        if (this.initPos.x/this.container.width > this.initPos.y/this.container.height) {
          destination.x = this.mapper.x(-100);
          destination.y = this.getEndY(
            this.mapper.x(0), 
            this.mapper.y(0),
            this.initPos.x,
            this.initPos.y,
            this.mapper.x(-100),
          );
          break;
        } else if (this.initPos.x/this.container.width < this.initPos.y/this.container.height) {
          destination.x = this.getEndX(
            this.mapper.x(0), 
            this.mapper.y(0),
            this.initPos.x,
            this.initPos.y,
            this.mapper.y(-100),
          );
          destination.y = this.mapper.y(-100);
          break;
        } else {
          destination.x = this.mapper.x(-100);
          destination.y = this.mapper.y(-100);
          break;
        }
      case 'top-right':
        if (this.initPos.x/this.container.width > this.initPos.y/this.container.height) {
          destination.x = this.mapper.x(100);
          destination.y = this.getEndY(
            this.mapper.x(0), 
            this.mapper.y(0),
            this.initPos.x,
            this.initPos.y,
            this.mapper.x(100),
          );
          break;
        } else if (this.initPos.x/this.container.width < this.initPos.y/this.container.height) {
          destination.x = this.getEndX(
            this.mapper.x(0), 
            this.mapper.y(0),
            this.initPos.x,
            this.initPos.y,
            this.mapper.y(-100),
          );
          destination.y = this.mapper.y(-100);
          break;
        } else {
          destination.x = this.mapper.x(100);
          destination.y = this.mapper.y(-100);
          break;
        }
      case 'bottom-left':
        if (this.initPos.x/this.container.width > this.initPos.y/this.container.height) {
          destination.x = this.mapper.x(-100);
          destination.y = this.getEndY(
            this.mapper.x(0), 
            this.mapper.y(0),
            this.initPos.x,
            this.initPos.y,
            this.mapper.x(-100),
          );
          break;
        } else if (this.initPos.x/this.container.width < this.initPos.y/this.container.height) {
          destination.x = this.getEndX(
            this.mapper.x(0), 
            this.mapper.y(0),
            this.initPos.x,
            this.initPos.y,
            this.mapper.y(100),
          );
          destination.y = this.mapper.y(100);
          break;
        } else {
          destination.x = this.mapper.x(-100);
          destination.y = this.mapper.y(100);
          break;
        }
      case 'bottom-right':
        if (this.initPos.x/this.container.width > this.initPos.y/this.container.height) {
          destination.x = this.mapper.x(100);
          destination.y = this.getEndY(
            this.mapper.x(0), 
            this.mapper.y(0),
            this.initPos.x,
            this.initPos.y,
            this.mapper.x(100),
          );
          break;
        } else if (this.initPos.x/this.container.width < this.initPos.y/this.container.height) {
          destination.x = this.getEndX(
            this.mapper.x(0), 
            this.mapper.y(0),
            this.initPos.x,
            this.initPos.y,
            this.mapper.y(100),
          );
          destination.y = this.mapper.y(100);
          break;
        } else {
          destination.x = this.mapper.x(100);
          destination.y = this.mapper.y(100);
          break;
        }
    }
    return destination;
  }

  newDestination() {
    this.direction = this.getDirection();
    this.destinationPos = this.getDestination();
  }

  getEndX(x1, y1, x2, y2, y3) {
    var m = (y2 - y1) / (x2 - x1);
    var x = (y3 - y1) / m + x1;
    return x;
  }
  getEndY(x1, y1, x2, y2, x3) {
    var m = (y2 - y1) / (x2 - x1);
    var y = m * (x3 - x1) + y1;
    return y;
  }
}
