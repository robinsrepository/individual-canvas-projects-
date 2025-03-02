const el = document.getElementById("myCanvas");
const ctx = el.getContext("2d");

const minX = 100;
const rangeX = 400;
let p = 0;
let sign = 1;

animate();

function animate() {
    const x = minX + rangeX * p;
    p = p + 0.02 * sign;
    // the next lines of code are the exact same as in file main3.js ...
    // if (p > 1) {
    //     sign = -1;
    // }
    // if (p < 0) {
    //     sign = 1;
    // }

    // but down here I wrote it in another way ... (nothing about how the code works changed, it's just a better way of writing it)
    // so IF p is more than 1 OR smaller than 0 ...
    if (p > 1 || p < 0 ) {
        // sign has this value ...
        sign = sign * -1;
    }
//  ... meaning that whenever p > 1 
//      p = p + 0.02 * -1;
//      p = 1 + 0.02 * -1 = 0.02
//  ... and whenever p < 0
//      p = p + 0.02 * -1;
//      p = 0 + 0.02 * -1 = -0,98
    
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.beginPath();
    ctx.arc(x, 200, 20, 0, Math.PI*2);
    ctx.stroke();

    requestAnimationFrame(animate);
}

    // for the next steps I will continue in the main6.js file, main5.js is just something funny I like to show as an example of playing with the math of this code