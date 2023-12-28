class Shape {
    constructor(color, text) {
        this.color = color;
        this.text = text;

        const setColor = (newColor) => {
            this.color = newColor;
        }
    }
}
class Triangle extends Shape{
    constructor(color, text, upsideDown) {
        super(color, text);
        this.upsideDown = upsideDown;
    }
}
class Square extends Shape{
    constructor(color, text) {
        super(color, text);
    }
}
class Circle extends Shape{
    constructor(color, text, radius) {
        super(color, text);
        this.radius = radius;
    }
}

module.exports = Shape, Triangle, Square, Circle;