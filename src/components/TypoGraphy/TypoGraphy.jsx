import React, { Component } from "react";
import p5 from "p5";
import imgz from "../../Asesist/my.png";

class CanvasSketch extends Component {
  constructor(props) {
    super(props);

    this.WIDTH = 300;
    this.HEIGHT = 300;
    this.CIRCLE_SIZE = this.WIDTH / 150;

    this.img = null;
    this.circles = [];
  }

  componentDidMount() {
    this.canvas = new p5(this.sketch);
  }

  componentWillUnmount() {
    if (this.canvas) {
      this.canvas.remove();
    }
  }

  sketch = (p) => {
    let img;
    let circles = [];

    p.preload = () => {
      img = p.loadImage(imgz);
    };

    p.setup = () => {
      p.createCanvas(this.WIDTH, this.HEIGHT);
      p.pixelDensity(1);
      p.imageMode(p.CENTER);
      p.image(img, p.width / 2, p.height / 2);

      let matrix = getMatrixOfPixels();
      let newArrayOfAveragedPixels = getAverageMatrixValues(
        matrix,
        this.CIRCLE_SIZE
      );
      circles = createCircles(newArrayOfAveragedPixels, this.CIRCLE_SIZE, p);
    };

    p.draw = () => {
      p.background(0);
      drawCircles(circles);
    };

    function getMatrixOfPixels() {
      p.loadPixels();
      let groupPixels = [];
      for (let i = 0; i < p.pixels.length; i += 4) {
        let r = p.pixels[i];
        let g = p.pixels[i + 1];
        let b = p.pixels[i + 2];
        let a = p.pixels[i + 3];
        groupPixels.push([r, g, b, a]);
      }
      let matrix = [];
      for (let i = 0; i < p.width; i++) {
        matrix[i] = [];
        for (let j = 0; j < p.height; j++) {
          let index = i * p.width + j;
          matrix[i].push(groupPixels[index]);
        }
      }
      return matrix;
    }

    function getAverageMatrixValues(matrix, step) {
      const width = matrix.length;
      const height = matrix[0].length;
      let newMatrix = [];
      for (let i = 0; i < width; i += step) {
        for (let j = 0; j < height; j += step) {
          let totalValue = [0, 0, 0, 0];
          for (let x = 0; x < step; x++) {
            if (typeof newMatrix[i + x] === "undefined") {
              newMatrix[i + x] = [];
            }
            for (let y = 0; y < step; y++) {
              totalValue[0] += matrix[i + x][j + y][0];
              totalValue[1] += matrix[i + x][j + y][1];
              totalValue[2] += matrix[i + x][j + y][2];
              totalValue[3] += matrix[i + x][j + y][3];
            }
          }
          let averageValueR = totalValue[0] / (step * step);
          let averageValueG = totalValue[1] / (step * step);
          let averageValueB = totalValue[2] / (step * step);
          let averageValueA = totalValue[3] / (step * step);
          let averageValue = [
            averageValueR,
            averageValueG,
            averageValueB,
            averageValueA,
          ];
          let x = j + step / 2;
          let y = i + step / 2 - 80;
          let color = averageValue;
          if (!circleIsDarker(color)) {
            circles.push(new Vehicle(x, y, color, p));
          }
          for (let x = 0; x < step; x++) {
            for (let y = 0; y < step; y++) {
              newMatrix[i + x][j + y] = averageValue;
            }
          }
        }
      }
      return newMatrix;
    }

    function circleIsDarker(color) {
      return color[0] < 20 && color[1] < 20 && color[2] < 20;
    }

    function createCircles(matrix, step, p) {
      const circles = [];
      const width = matrix.length;
      const height = matrix[0].length;
      for (let i = 0; i < width; i += step) {
        for (let j = 0; j < height; j += step) {
          let x = j + step / 2;
          let y = i + step / 2 - 80;
          let color = matrix[i][j];
          if (!circleIsDarker(color)) {
            circles.push(new Vehicle(x, y, color, p));
          }
        }
      }
      return circles;
    }

    function drawCircles(circles) {
      circles.forEach((c) => {
        c.applyBehaviors();
        c.update();
        c.draw();
      });
    }

    class Vehicle {
      constructor(x, y, color, p) {
        this.pos = p.createVector(p.random(p.width), p.random(p.height));
        this.target = p.createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.acc = p.createVector();
        this.color = color;
        this.p = p;
      }

      update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
      }

      draw() {
        this.p.stroke([...this.color]);
        this.p.strokeWeight(this.CIRCLE_SIZE);
        this.p.point(this.pos.x, this.pos.y);
      }

      arrive(target) {
        const desired = p5.Vector.sub(target, this.pos);
        const distance = desired.mag();
        let speed = 10;
        if (distance < 150) {
          speed = this.p.map(distance, 0, 100, 0, 10);
        }
        desired.setMag(speed);
        const steer = p5.Vector.sub(desired, this.vel);
        steer.limit(1.5);
        return steer;
      }

      flee(target) {
        const desired = p5.Vector.sub(target, this.pos);
        const distance = desired.mag();
        if (distance < 150) {
          desired.setMag(10);
          desired.mult(-1);
          const steer = p5.Vector.sub(desired, this.vel);
          steer.limit(1.5);
          return steer;
        } else {
          return p.createVector(0, 0);
        }
      }

      applyForce(f) {
        this.acc.add(f);
      }

      applyBehaviors() {
        const arrive = this.arrive(this.target);
        const mouse = this.p.createVector(this.p.mouseX, this.p.mouseY);
        const flee = this.flee(mouse);
        arrive.mult(1);
        flee.mult(5);
        this.applyForce(arrive);
        this.applyForce(flee);
      }
    }
  };

  render() {
    return <canvas />;
  }
}

export default CanvasSketch;
