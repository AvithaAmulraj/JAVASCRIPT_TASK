var point1;
var point2;
var move;
var showPoint;
var reflectX;
var rotate90;

move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

reflectX = function (point) {
    return {
        x: point.x,
        y: -point.y
    };
};

rotate90 = function (point) {
    return {
        x: -point.y,
        y: point.x
    };
};

point1 = { x : 2, y : 5 };

point2 = move(point1, { x : 4, y : -2 });

showPoint(point1);
console.log("Move 4 across and 2 down");
showPoint(point2);

// Example of reflectX function
var reflectedPoint = reflectX(point1);
console.log("Reflect point1 in the x-axis:");
showPoint(reflectedPoint);

// Example of rotate90 function
var rotatedPoint = rotate90(point1);
console.log("Rotate point1 by 90 degrees anticlockwise:");
showPoint(rotatedPoint);