const el = document.getElementById("myCanvas");
const ctx = el.getContext("2d");

const width = 400, height = 400;
let spacing = 70;
let scaleFactor = 0.7;

drawSnowmanGrid(spacing, width, height, scaleFactor);

function drawSnowmanGrid() {
    let x = spacing;
    while (x < width + 200) {
        let y = spacing;
        while (y < height + 200) {
            drawSnowman(x, y, 10, scaleFactor);
            y = y + spacing;
        }
        x = x + spacing;
    }
}

function drawSnowman(ball1X, ball1Y, ball1R, scaleFactor) {
    ctx.beginPath();
    ctx.arc(ball1X, ball1Y, ball1R, 0, Math.PI * 2);
    ctx.fillStyle="white";
    ctx.fill();
    
    ctx.beginPath();
    const ball2R = ball1R * scaleFactor, ball2X = ball1X, ball2Y = ball1Y - ball1R - ball2R;
    ctx.arc(ball2X, ball2Y, ball2R, 0, Math.PI * 2);
    ctx.fillStyle="white";
    ctx.fill();
    
    ctx.beginPath();
    const ball3R = ball2R * scaleFactor, ball3X = ball2X, ball3Y = ball2Y - ball2R - ball3R;
    ctx.arc(ball3X, ball3Y, ball3R, 0, Math.PI * 2);
    ctx.fillStyle="white";
    ctx.fill();
    
    drawHat(ball3X, ball3Y, ball3R, scaleFactor);
}

function drawHat(headX, headY, headR, scaleFactor) {
    ctx.beginPath();
    const w4 = headR * 2, h4 = headR / 2, x4 = headX - w4 / 2, y4 = headY - headR;
    ctx.rect(x4,y4,w4,h4)
    ctx.stroke();
    ctx.fillStyle="black";
    ctx.fill();
    
    ctx.beginPath();
    const w5 = w4 * scaleFactor, h5 = headR, x5 = headX - w5 / 2, y5 = y4 - h5;
    ctx.rect(x5,y5,w5,h5)
    ctx.stroke();
    ctx.fill();    
}

