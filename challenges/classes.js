// Copy and paste your prototype in here and refactor into class syntax.
// Copy and pasted below. Some code edited or removed to reflect refactoring.

class CuboidMaker {
  constructor(cuboidAttributes) {
    this.length = cuboidAttributes.length;
    this.width = cuboidAttributes.width;
    this.height = cuboidAttributes.height;
  }
  volume() {
    return (this.length * this.width * this.height);
  }
  surfaceArea() {
    return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
  }
}


class CubeMaker extends CuboidMaker {
  constructor(cubeAttributes) {
    super(cubeAttributes);
  }
  volume() {
    return (Math.pow(this.length, 3));
  }
  surfaceArea() {
    return (Math.pow(this.length, 2) * 6);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
})

const cube = new CubeMaker({
  length: 5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/