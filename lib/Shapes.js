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
        var returnThis = `<rect x='75' y='25' width='150' height='150' fill='${this.color}'/>`
        if (this.text !== '' && this.text !== undefined) {
            returnThis += `\n<text x="150" y="100" text-anchor='middle' alignment-baseline='middle' fill='${this.textColor}' font-weight='bold' font-size='60'>${this.text}</text>`;
        }
        returnThis += `\n</svg>`;
        return returnThis;
    }
}
class Triangle extends Shape{
    constructor(color, text, textColor, upsideDown) {
        super(color, text, textColor);
        this.upsideDown = upsideDown;
    }
    render() {
        if (this.upsideDown) {
            var returnThis = `<polygon points='150, 175 250, 25 50, 25' fill='${this.color}'/>`
            if (this.text !== '') {
            returnThis += `\n<text x="150" y="90" text-anchor='middle' alignment-baseline='middle' fill='${this.textColor}' font-weight='bold' font-size='50'>${this.text}</text>`;
        }
        }
        else {
            var returnThis = `<polygon points='150, 25 250, 175 50, 175' fill='${this.color}'/>`
            if (this.text !== '' && this.text !== undefined) {
                returnThis += `\n<text x="150" y="110" text-anchor='middle' alignment-baseline='middle' fill='${this.textColor}' font-weight='bold' font-size='50'>${this.text}</text>`
            }
        }
        returnThis += `\n</svg>`;
        return returnThis;
    }
}
class Circle extends Shape{
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render() {
        var returnThis = `<circle cx='150' cy='100' r='75' fill='${this.color}'/>`;
        if (this.text !== '' && this.text !== undefined) {
            returnThis += `\n<text x="150" y="100" text-anchor='middle' alignment-baseline='middle' fill='${this.textColor}' font-weight='bold' font-size='60'>${this.text}</text>`
        }
    
    returnThis += `\n</svg>`;
    return returnThis;
    }
}


module.exports =  {
    Triangle, 
    Square, 
    Circle
}; //https://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js
