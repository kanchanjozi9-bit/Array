const e = require("./equalitychecker");

const testCase = [
    { value1: null, value2: null, expected: true, title: "nulls" },
    { value1: null, value2: 5, expected: false, title: "nulls and number" },
    { value1: NaN, value2: NaN, expected: true, title: "NaN" },

    { value1: NaN, value2: 4, expected: false, title: "NaN and number" },
    { value1: [], value2: {}, expected: false, title: "different objects" },

    { value1: 1, value2: 1, expected: true, title: "Equal numbers" },
    { value1: 1, value2: 2, expected: false, title: "different numbers" },
    { value1: "a", value2: "a", expected: true, title: "Equal string" },
    { value1: "2", value2: 2, expected: false, title: " string and number" },
    { value1: [], value2: [], expected: true, title: "null Array" },
    {
        value1: [1],
        value2: [1],
        expected: true,
        title: "array with same elements",
    },
    {
        value1: [2, 1],
        value2: [1, 2],
        expected: false,
        title: "array with different element",
    },
    {
        value1: { b: 1 },
        value2: { b: 1 },
        expected: true,
        title: "object with same key and value",
    },
    {
        value1: { b: 1 },
        value2: { a: 1 },
        expected: false,
        title: "object with different keys",
    },
    {
        value1: { a: { b: 1 } },
        value2: { a: { b: 1 } },
        expected: true,
        title: "nested object with same value",
    },
    {
        value1: { a: { c: 1 } },
        value2: { a: { b: 1 } },
        expected: false,
        title: "nested object with diff value",
    },
    {
        value1: { a: undefined },
        value2: { b: 1 },
        expected: false,
        title: "check with undefined",
    },
    {
        value1: { b: 1 },
        value2: { a: undefined },
        expected: false,
        title: "check with undefined",
    },
];

function test(testCase) {
    for (const test of testCase) {
        const result = e.isEqual(test.value1, test.value2);
        const symbol = result === test.expected ? "✅" : "❌";
        console.log(`${symbol} ${test.title}  `);
    }
}

test(testCase);
