const r = require("raylib");

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;

    //const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    const data = [10, 30, 20, 50, 40, 10, 70, 60, 50, 40, 50, 20];
    const gap = 30;
    const peaks = findPeaks(data);

    const largest = maxValue(data);
    const scaledHeight = 0.9 * HEIGHT;
    const scaleFactor = scaledHeight / largest;
    const pallet = {
        0: r.BLACK,
        1: r.RED,
        bg: r.WHITE,
    };
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Peaks");
    r.SetTargetFPS(50);

    return {
        WIDTH,
        HEIGHT,
        pallet,
        data,
        gap,
        peaks,
        largest,
        scaleFactor,
        scaledHeight,
    };
}

function maxValue(data) {
    let largest = 0;

    for (const i of data) {
        largest = Math.max(largest, i);
    }
    return largest;
}

function drawPeak(world) {
    for (let i = 0; i < world.peaks.length; i++) {
        const x = world.peaks[i] * world.gap;
        const y = getY(world.peaks[i], world);
        r.DrawCircle(x, y, 4, r.RED);
    }
}

function findPeaks(data) {
    const peakPoints = [];
    for (let i = 1; i <= data.length - 1; i++) {
        if (isPeak(data, i)) peakPoints.push(i);
    }
    return peakPoints;
}

function isPeak(data, i) {
    return data[i] > data[i - 1] && data[i] > data[i + 1];
}

function getY(i, w) {
    const height = w.data[i] * w.scaleFactor;
    const y = w.HEIGHT - height;
    return y;
}
function calculateAxis(i, world) {
    const startX = (i - 1) * world.gap;
    const startY = getY(i - 1, world);
    const endX = i * world.gap;
    const endY = getY(i, world);

    return { startX, startY, endX, endY };
}

function drawLine(world) {
    for (let i = 1; i < world.data.length; i++) {
        const { startX, startY, endX, endY } = calculateAxis(i, world);
        r.DrawLine(startX, startY, endX, endY, world.pallet[0]);
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(world.pallet.bg);
    drawLine(world);
    drawPeak(world);
    r.EndDrawing();
}
function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}
main();
