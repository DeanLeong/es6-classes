class Rectangle extends Shape {

  // define a constructor that takes a width and height argument
  // call super with the right argument(s)
  // set the width and height properties
  
  constructor(width, height) {
    // first call super with arguments wrapped in array
    // take note these are doubled since a Rectangle has
    // doubled width and height lengths
    super([width, height, width, height]);

    // now set the width and height properties as noted above
    this.width = width;
    this.height = height;
  }

  // define an `area` getter here
  get area() {
    // the area getter method just returns
    // the rect width multipled by height
    return this.width * this.height;
  }
}
