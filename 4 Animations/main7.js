const el = document.getElementById("myCanvas");
const ctx = el.getContext("2d");

const minX = 100;
const rangeX = 400;
const minRad = 10;
const rangeRad = 20;
let p = 0;
let sign = 1;

animate();

function animate() {
    const x = minX + rangeX * p;
    // I replaced p with Math.sin(p * Math.PI)
    const rad = minRad + rangeRad * Math.sin(p * Math.PI);
    p = p + 0.02 * sign;
    if (p > 1 || p < 0 ) {
        sign = sign * -1;
    }

    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.beginPath();
    ctx.arc(x, 200, rad, 0, Math.PI*2);
    ctx.stroke();

    requestAnimationFrame(animate);
}

// this is what is happening now:
// go to https://www.desmos.com/calculator?lang=nl
// type sin(x) inside of the input field
// now zoom in (+) a little to take a closer look at the graph line

// now click the + (on the top left) to add antoher input field
// type sin(x * pi) in here   ->   sin(x • π)
// sin(x • π) is representing what is happening in this file on line 16     ->    Math.sin(p * Math.PI)
// sin() = Math.sin()
// x = p
// • π = * Math.PI

// notice how the blue line does not move beyond 1 or -1 vertically just like the red line
// but the blue line does also now make steps of 1 horizontally (while the red one makes steps of a little over 3)
// this blue line kind of looks like a loop right now
// that is why when you look at how the size of the circle now changes in the browser the movement on the left is now the same as on the right