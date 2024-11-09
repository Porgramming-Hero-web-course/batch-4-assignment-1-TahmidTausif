{
    type Circle = {
        shape: "circle",
        radius: number
    };

    type Rectangle = {
        shape: "rectangle",
        width: number,
        height: number,
    };

    type Shape = Circle | Rectangle;

    function calculateShapeArea(shape: Shape) {

        if (shape.shape === "circle") {
            return Math.PI * (shape.radius) * (shape.radius);
        }
        else if (shape.shape === "rectangle") {
            return (shape.height) * (shape.width)
        }
    }
}