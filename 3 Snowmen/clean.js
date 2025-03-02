// in this version I renamed some symbols by selecting them, rightclick - 'Rename Symbol'
const el = document.getElementById("myCanvas");
const ctx = el.getContext("2d");

drawSnowman(300, 450, 80, 0.8);
// drawSnowman(100, 450, 60, 0.8);
// drawSnowman(500, 450, 60, 0.8);

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

// in the loop.js file I continue with guess what...