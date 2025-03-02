const el = document.getElementById("myCanvas");
const ctx = el.getContext("2d");

const minX = 100;
const rangeX = 400;
let p = 0;
// now I define another veriable
let sign = 1;

animate();

function animate() {
    const x = minX + rangeX * p;
    // then down here (where I'm updating p) I will multiply 0.02 by the sign value
    // so right now nothing is actually changing yet
    p = p + 0.02 * sign;
    if (p > 1) {
        // but when I change the next line (p = 0;) to sign = -1; something does change: the circle changed direction and moves to the left into infinity 
        // so instead of p moving plus (+) 0.02 it's now moving minus (-) 0.02 (on line 18)
        sign = -1;
    }
    // I wrote the same if statement as above but exactly the other way around, so now the circle will move to the right if p is smaller than 0 and to the left if p is bigger than 1
    // the circle is not moving into infinity anymore
    if (p < 0) {
        // now the sign value is positive (+) again, so the p value will then move plus (+) 0.02 again (on line 18)
        sign = 1;
    }

    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.beginPath();
    ctx.arc(x, 200, 20, 0, Math.PI*2);
    ctx.stroke();

    requestAnimationFrame(animate);
}

    // for the next steps I will continue in the main4.js file