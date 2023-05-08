class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    const area = Math.PI * Math.pow(this.radius, 2);
    return area.toFixed(2);
  }

  getPerimeter() {
    const perimeter = 2 * Math.PI * this.radius;
    return perimeter.toFixed(2);
  }
}

// Example usage

const myCircle = new Circle(8);
console.log("Area:", myCircle.getArea());
console.log("Perimeter:", myCircle.getPerimeter());
