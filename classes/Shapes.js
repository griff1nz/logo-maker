class Shape {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }
}
class Triangle extends Shape{
    constructor(color, text, sideOneLength, sideTwoLength, sideThreeLength) {
        super(color, text);
        this.sideOneLength = sideOneLength;
        this.sideTwoLength=sideTwoLength;
        this.sideThreeLength = sideThreeLength;
    }
}
class Square extends Shape{
    constructor(color, text, sideLength) {
        super(color, text);
        this.sideLength = sideLength;
    }
}
class Circle extends Shape{
    constructor(color, text, radius) {
        super(color, text);
        this.radius = radius;
    }
}

module.exports = Shape, Triangle, Square, Circle;