class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  show() {
    console.log(`(${this.x}, ${this.y})`)
  }
  isEqual(point) {
    return this.x === point.x && this.y === point.y ? true : false
  }
  distance(point2) {
    let xa = this.x * this.x
    let xb = this.y * this.y
    let ya = point2.x * point2.x
    let yb = point2.y * point2.y

    return (Math.sqrt((xb - xa) + (yb - ya)))
  }
}

const p1 = new Point(1, 2)
const p2 = new Point(10, 11)

console.log(p1.distance(p2))

exports.Point = Point