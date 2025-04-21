const Array = [
    [0, 0], [0, 1], [0, -1], [1, 0],
    [-1, 0], [4, 5], [4, 4], [3, 4],
    [4, 3], [3, 3], [11, 2], [5, 5],
    [6, 9], [3, 6], [1, 4], [9, 1],
    [7, 10], [4, -1], [-3, 0], [-5, 2],
    [0, 2], [0, 2], [3, 2],
    [-2, 0], [4, 5], [4, 4],
    [4, 6], [5, 3], [3, -1], [3, 0],
    [6, 9], [2, 6], [3, -7], [6, 7],
    [7, 10], [4, -1], [-5, 2], [-1, 2],
];
const CentralPoints = (Array) => {
    let countP = 0;
    Array.forEach(([x, y], i) => {
        let PointLeft = false;
        let PointRight = false;
        let PointUp = false;
        let PointDown = false;
        Array.forEach(([x2, y2], j) => {
        if (i === j) return;
        if (x2 < x && y2 === y) PointLeft = true;
        if (x2 > x && y2 === y) PointRight = true;
        if (x2 === x && y2 > y) PointUp = true;
        if (x2 === x && y2 < y) PointDown = true;
        });

        if (PointLeft && PointRight && PointUp && PointDown) countP++;
    });

    return countP;
};
console.log(CentralPoints(Array));
