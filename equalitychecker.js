function isEqual(first, sec) {
    if (typeof first === "object" && typeof sec === "object" && first !== null)
        return isObjectEqual(first, sec);
    return first === sec;
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
