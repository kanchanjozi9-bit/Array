//Destructuring parameters#

const { RL_FUNC_SUBTRACT } = require("raylib");

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

const divide = function (divedent, divisor) {
    const quotient = divedent / divisor;
    const remainder = divedent % divisor;
    return { quotient, remainder };
};
const { quotient, remainder } = divide(17, 5);

//Entries#

const stock = { pens: 40, pencils: 0, erasers: 12, notebooks: 0 };

const outOfStock = function (stock) {
    const out = [];
    const entries = Object.entries(stock);
    for (const entrie of entries) {
        if (entrie[1] === 0) out.push(entrie[0]);
    }
    return out;
};

outOfStock(stock);
