const el = document.getElementById("myCanvas");
const ctx = el.getContext("2d");

const minX = 100;
// I changed the range to 400 so with the new code below the circle will move all the way from left to right inside of my canvas (I think it looks better)
const rangeX = 400;
let p = 0;

animate();

function animate() {
    const x = minX + rangeX * p;
    p = p + 0.02;
    // to prevent the circle moving to the right all the way into infinity I write this statement:
    if (p > 1) {
        // so whenever p gets more than 1 the circle will jump back to the minX (start) position  
        p = 0;
    }

    // with the next line the circle that is drawn will disappear when another one is drawn, resulting in that it looks as if the circle is moving from te left to the right
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.beginPath();
    ctx.arc(x, 200, 20, 0, Math.PI*2);
    ctx.stroke();

    requestAnimationFrame(animate);
}

    // for the next steps I will continue in the main3.js file