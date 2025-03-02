const el = document.getElementById("myCanvas");
const ctx = el.getContext("2d");

const minX = 100;
const rangeX = 400;
// the last thing I wanted to do is modify the radius of the circle
// I start by adding a minimum radius of 10 and a range for the radius of 20
const minRad = 10;
const rangeRad = 20;
let p = 0;
let sign = 1;

animate();

function animate() {
    const x = minX + rangeX * p;
    // here I define a variable for the radius(similar to difining x)
    const rad = minRad + rangeRad * p;
    p = p + 0.02 * sign;
    if (p > 1 || p < 0 ) {
        sign = sign * -1;
    }

    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.beginPath();
    // and to make the 'rad' variable actually do something, I replace the radius of 20 in the code here below with the new 'rad' variable
    // ctx.arc(x, 200, 20, 0, Math.PI*2);
    ctx.arc(x, 200, rad, 0, Math.PI*2);
    ctx.stroke();

    requestAnimationFrame(animate);
}

// I put one more fun math example in file main7.js