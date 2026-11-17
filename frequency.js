function isObjectEqual(first, sec) {
    for (const key in first) {
        if (!(key in sec)) return false;
        if (first[key] !== sec[key]) return false;
    }
    return true;
}

function frequencyOfElementsIn(arr) {
    const f = {};
    for (const element of arr) {
        f[element] = (f[element] || 0) + 1;
    }
    return f;
}

function test(title, expected, array) {
    const result = frequencyOfElementsIn(array);
    const symbol = isObjectEqual(expected, result) ? "✅" : "❌";
    console.log(`${symbol} ${title}  `);
}

function main() {
    test(
        "frequency of strings",
        {
            apple: 3,
            banana: 2,
            orange: 1,
        },
        ["apple", "banana", "apple", "apple", "orange", "banana"],
    );

    test(
        "frequency of numbers",
        { 1: 2, 2: 2, 4: 1, 5: 1 },
        [1, 2, 1, 2, 4, 5],
    );
    test("frequency of boolen ", { true: 2, false: 1 }, [false, true, true]);
}
main();
