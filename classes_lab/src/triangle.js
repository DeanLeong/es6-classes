class Triangle extends Shape {
  constructor(a, b, c) {
    // a, b, and c are the three side lengths
    // all you need to do is call super with the right argument(s)
    
    // by viewing the beginning of the test file
    // we see that the Shape constructor takes an array
    // of side lengths, so wrapping the given arguments a, b, and c
    // in an array and passing it to super is sufficient
    super([a, b, c]);
  }

  // https://en.wikipedia.org/wiki/Heron%27s_formula#Formulation
  static heronFormula (a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  get area () {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
    return Triangle.heronFormula(...this.sideLengths);
  }
}
