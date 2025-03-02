const el = document.getElementById("myCanvas");
const ctx = el.getContext("2d");

const minX = 100;
const rangeX = 400;
let p = 0;
let sign = 1;

animate();

function animate() {
    // just to show how you can play around with math inside of this code I added another * p to the next line of code:
    const x = minX + rangeX * p * p;
    p = p + 0.02 * sign;
    if (p > 1 || p < 0 ) {
        sign = sign * -1;
    }

    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.beginPath();
    ctx.arc(x, 200, 20, 0, Math.PI*2);
    ctx.stroke();

    requestAnimationFrame(animate);
}

// go to https://www.desmos.com/calculator?lang=nl
// in here you can see what happens with the motion of the circle for example if you add another * p like I did on line 13
// type x^2 inside of the input field
// the graph shows how the lines starts less steep at 0 and gets exponentially steeper when it moves away from 0 (both negative (-) or positive (+))
// the graph line shows the speed of the ball bouncing in the animation ...
// the closer the ball is at the start/minX (the closer the ball is at 0) the slower it moves and the farther away from 0 it is, the faster it moves
