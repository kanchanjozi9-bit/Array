const e = require("./equalitychecker");

const findRuns = function (arr) {
    const runs = [];
    let currRun = [];
    let direction = 0;

    for (let i = 0; i < arr.length; i++) {
        const curDirection = Math.sign(arr[i] - arr[i - 1]);

        if (
            curDirection !== direction &&
            direction !== 0 &&
            curDirection != 0
        ) {
            runs.push(currRun.slice());
            currRun = [];
            currRun.push(arr[i]);
            direction = curDirection;
        } else currRun.push(arr[i]);
    }
    runs.push(currRun.slice());
    console.log(runs);

    return runs;
};

const test = function (title, expected, array) {
    const result = findRuns(array);
    const symbol = e.isObjectEqual(expected, result) ? "✅" : "❌";
    console.log(`${symbol} ${title}  `);
};

const main = function () {
    test("ascending array is same array", [[1, 2, 3]], [1, 2, 3]);
    test("desending array is same array", [[3, 2, 1]], [3, 2, 1]);
    test("same value array is same array", [[3, 3, 3]], [3, 3, 3]);
    test(
        "create new array if direction change",
        [
            [1, 2, 3, 4],
            [3, 2, 2],
        ],
        [1, 2, 3, 4, 3, 2, 2],
    );
};

main();
