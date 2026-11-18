const e = require("./equalitychecker");

const isBelongsTo = function (runs, element) {
    if (runs.length < 3) return true;
    const a = Math.sign(element - runs.at(-1));
    const b = Math.sign(runs.at(-1) - runs.at(-2));
    return a === b;
};

const findRuns = function (arr) {
    const runs = [];
    let currRun = [];

    for (const element of arr) {
        if (!isBelongsTo(arr, element)) {
            runs.push(currRun.slice());
            currRun = [];
            //currRun.push(element);
        }
        currRun.push(element);
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
    // test("desending array is same array", [[3, 2, 1]], [3, 2, 1]);
    // test("same value array is same array", [[3, 3, 3]], [3, 3, 3]);
    // test(
    //     "create new array if direction change",
    //     [
    //         [1, 2, 3, 4],
    //         [3, 2, 2],
    //     ],
    //     [1, 2, 3, 4, 3, 2, 2],
    // );

    test("an array with less than 3 elements should be same", [[1, 3]], [1, 3]);
};

main();
