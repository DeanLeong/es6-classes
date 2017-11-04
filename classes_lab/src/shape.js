class Shape {
  constructor (sideLengths) {
    this.sideLengths = sideLengths;
  }

  get sides () {
    return this.sideLengths.length;
  }

  // sum of all sides
  getPerimeter () {
    /* solution using forEach
     * let perim = 0;
     * this.sideLengths.forEach(side => perim += side);
     *
     * return perim;
     */
    
    // reduce the array of sides into a sum of their values
    return this.sideLengths.reduce((perim, side) => perim + side, 0);
  }
}
