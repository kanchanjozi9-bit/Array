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
