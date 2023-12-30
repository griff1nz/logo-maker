const {Triangle, Circle, Square} = require('./Shapes.js');

// Create testing suite for shapes
describe('Shapes', () => {
    describe('triangle', () => {
        it('should create a SVG script that renders a triangle', () => {
            const shape = new Triangle();
            shape.setColor('red');
            expect(shape.render()).toEqual(`<polygon points='150, 25 250, 175 50, 175' fill='red'/>
</svg>`);
        });
    });
    describe('square', () => {
        it('should create a SVG script that renders a square', () => {
            const shape = new Square();
            shape.setColor('green');
            expect(shape.render()).toEqual(`<rect x='75' y='25' width='150' height='150' fill='green'/>
</svg>`);
        });
    });
    describe('triangle', () => {
        it('should create a SVG script that renders a circle', () => {
            const shape = new Circle();
            shape.setColor('blue');
            expect(shape.render()).toEqual(`<circle cx='150' cy='100' r='75' fill='blue'/>
</svg>`);
        });
    });
}
);