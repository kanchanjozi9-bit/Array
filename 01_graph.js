const r = require("raylib");

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;

    const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 11, 23, 23];
    const gap = 4;
    const largest = tallest(data);
    const currentHeight = 0.9 * HEIGHT;
    const barWidth = 30;

    const pallet = {
        0: r.BLUE,
        1: r.RED,
        bg: r.RAYWHITE,
    };
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Graph");
    r.SetTargetFPS(50);

    return {
        WIDTH,
        HEIGHT,
        pallet,
        data,
        gap,
        barWidth,
        largest,
        currentHeight,
    };
}

function tallest(data) {
    let largest = 0;

    for (const i of data) {
        largest = Math.max(largest, i);
    }
    return largest;
}

function sum(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum;
}
function average(data) {
    return sum(data) / data.length;
}
function avgY(world) {
    const avg = average(world.data);
    const h = getHeight(avg, world);
    return getY(world, h);
}
function drawAverage(world) {
    const y = avgY(world);
    r.DrawRectangle(0, y, world.WIDTH, 1, world.pallet[1]);
}

function getHeight(value, world) {
    const percentage = (value / world.largest) * 100;
    const height = (percentage * world.currentHeight) / 100;
    return height;
}

function getY(world, height) {
    return world.currentHeight - height + (world.HEIGHT - world.currentHeight);
}

function drawBar(world) {
    const rec = {};
    rec.width = world.barWidth;

    for (let i = 0; i < world.data.length; i++) {
        rec.height = getHeight(world.data[i], world);
        rec.x = i * (rec.width + world.gap);
        rec.y = getY(world, rec.height);
        r.DrawRectangleRec(rec, world.pallet[0]);
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(world.pallet.bg);
    drawBar(world);
    drawAverage(world);
    r.EndDrawing();
}
function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function main() {
    setup();
    const world = setup();
    loop(world);
}
main();
