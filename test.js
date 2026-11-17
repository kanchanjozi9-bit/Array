const e = require("./equalitychecker");

const testCase = [
    {
        value1: null,
        value2: null,
        expected: true,
        title: "two null values are equal",
    },
    {
        value1: null,
        value2: 5,
        expected: false,
        title: "null and number are not equal",
    },
    { value1: NaN, value2: NaN, expected: true, title: "two NaN are equal" },

    {
        value1: NaN,
        value2: 4,
        expected: false,
        title: "NaN and number are not equal ",
    },
    {
        value1: [],
        value2: {},
        expected: false,
        title: "array and object are not equal",
    },

    {
        value1: 1,
        value2: 1,
        expected: true,
        title: "two same integers are equal",
    },
    {
        value1: 1,
        value2: 2,
        expected: false,
        title: "diff integers are not equal",
    },
    {
        value1: "a",
        value2: "a",
        expected: true,
        title: "two same strings are equal",
    },
    {
        value1: "2",
        value2: 2,
        expected: false,
        title: " same string and number are not equal",
    },
    {
        value1: [],
        value2: [],
        expected: true,
        title: "two empty array are equal",
    },
    {
        value1: [1],
        value2: [1],
        expected: true,
        title: " two array with same elements are equal",
    },
    {
        value1: [2, 1],
        value2: [1, 2],
        expected: false,
        title: "two array with different element are not equal",
    },
    {
        value1: { b: 1 },
        value2: { b: 1 },
        expected: true,
        title: "two object with same key and value are equal",
    },
    {
        value1: { b: 1 },
        value2: { a: 1 },
        expected: false,
        title: "two object with different keys are not equal",
    },
    {
        value1: { a: { b: 1 } },
        value2: { a: { b: 1 } },
        expected: true,
        title: "two nested object with same value are equal",
    },
    {
        value1: { a: { c: 1 } },
        value2: { a: { b: 1 } },
        expected: false,
        title: "two nested object with diff value are not equal",
    },
    {
        value1: { a: undefined },
        value2: { b: 1 },
        expected: false,
        title: " two object containing undefined and number are not equal",
    },
    {
        value1: { b: "hello" },
        value2: { a: undefined },
        expected: false,
        title: "two object containig undefined and string are not equal",
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
