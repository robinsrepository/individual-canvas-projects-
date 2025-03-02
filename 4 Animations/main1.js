const el = document.getElementById("myCanvas");
const ctx = el.getContext("2d");

// the movement will start at 100px and ends at 300px, so the range is therefore 200
const minX = 100;
const rangeX = 200;
let p = 0; // p is in this case the percentage

animate();

function animate() {
    // first I define and update the X cooördinate:
    const x = minX + rangeX * p;
    // now I want to increase the percentage each frame by a small amount, in this case 0.02 
    p = p + 0.02;

    // then I draw a circle
    ctx.beginPath();
    ctx.arc(x, 200, 20, 0, Math.PI*2);
    ctx.stroke();

    // requestAnimationFrame() is a function of which the parameter is another function
    // so in this case requestAnimationFrame() will call the animate function (on line 11) again and again and again, so it makes an infinate loop that shows the circle as fast as possible (typically for around 60 frames per second) 
    requestAnimationFrame(animate);
    // with only this function you see a circle beiing drawn over and over again while it's moving to the right, out of the canvas
}

    // for the next steps I will continue in the main2.js file