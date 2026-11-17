function type(value) {
    if (Number.isNaN(value)) return "NaN";
    return typeof value;
}

function areTypeEqual(a, b) {
    return type(a) === type(b);
}

function isEqual(first, sec) {
    if (first === sec) return true;
    if (!areTypeEqual(first, sec)) return false;

    switch (type(first)) {
        case "object":
            return isObjectEqual(first, sec);
        case "NaN":
            return true;
    }
    return false;
}

function isObjectEqual(first, sec) {
    for (const key in first) {
        const isPresent = key in sec && isEqual(first[key], sec[key]);
        if (!isPresent) return false;
    }
    return first.length === sec.length;
}

module.exports = {
    isEqual,
};
