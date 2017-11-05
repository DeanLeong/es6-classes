// define the Square class here
// remember to extend from Rectangle

// start off by defining the Square class
// like the other shapes
class Square extends Rectangle {

  constructor(sideLength) {
    // recall that the constructor for Rectangle takes a length and a height parameter
    super(sideLength, sideLength);
  }
}
