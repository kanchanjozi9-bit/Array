function longRun(arr) {
    const a = [];
    let row = [];
    row.push(arr[0]);
    let check = 1;

    for (let i = 1; i < arr.length; i++) {
        const current = arr[i] >= row[i - 1] ? 1 : -1;
        if (current === 1) row.push(arr[i]);
        else {
            a.push(row);
            row = [];
        }
    }
    return a;
}

function main() {
    console.log(longRun([1, 2, 3, 2, 4, 1]));
}
main();
