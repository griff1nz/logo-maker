class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;

        
    }
    setColor(newColor) {
        this.color = newColor;
    }
}
class Square extends Shape{
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render() {
        return 'square';
    }
}
class Triangle extends Shape{
    constructor(color, text, textColor, upsideDown) {
        super(color, text, textColor);
        this.upsideDown = upsideDown;
    }
    render() {
        return 'triangle';
    }
}
class Circle extends Shape{
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render() {
        return `<circle cx='150' cy='100' r='75' fill='${this.color}'/>
        
</svg>`;
    }
}


module.exports =  {
    Triangle, 
    Square, 
    Circle
}; //https://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js
