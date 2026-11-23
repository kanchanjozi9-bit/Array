//Destructuring parameters#
// Default parameters
const statusof = function ({
    nameA = "kanchan",
    role = "intern",
    active = true,
}) {
    return `${nameA} is an ${role} which is ${active ? "active" : "not active"}`;
};

const intern = { nameA: "himani", role: "HR", active: false };
statusof(intern);

//  Return multiple values#

const divide = function (dividend, divisor) {
    const quotient = dividend / divisor;
    const remainder = dividend % divisor;
    return { quotient, remainder };
};
const { quotient, remainder } = divide(17, 5);

//Entries#

const stock = { pens: 40, pencils: 0, erasers: 12, notebooks: 0 };

const outOfStock = function (stock) {
    const out = [];
    for (const [key, value] of Object.entries(stock)) {
        if (value === 0) out.push(key);
    }
    return out;
};

outOfStock(stock);

// Destructure [10, 20, 30, 40] into first and rest. Print both.

const numbers = [10, 20, 30, 40];
const [first, ...other] = numbers;

first;
other;

// From { a: 1, b: 2, c: 3 }, take out a and collect everything else into others.

const s = { a: 1, b: 2, c: 3 };
const { a, ...others } = s;

a;
others;

//Write a function average that accepts any number of arguments and returns their average.
//  What should average() return?

const average = function (...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return `average of numbers ${numbers} :${total / numbers.length - 1} `;
};
average(1, 2, 6, 7);
average(10, 10, 20, 20);
