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
  distance(point) {
    return Math.sqrt((Math.pow((point.x-this.x),2))+(Math.pow((point.y-this.y),2)))
  }
}

const p1 = new Point(1, 2)
const p2 = new Point(10, 11)

console.log(p1.distance(p2))

exports.Point = Point