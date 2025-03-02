// in this file I rearrange some code and move on to file animate2.js to show the animate event

const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

const minRad = 10; 
const rangeRad = 20; 
let p = 0; 

// I define x and y to the middle of the canvas by default
let x = 200;
let y = 200;

myCanvas.addEventListener("mousemove", function(info) {
    // I remove const before x and y because these are now the global variables I just declined
    // const x = info.offsetX;
    // const y = info.offsetY;
    x = info.offsetX;
    y = info.offsetY;
    // so now the x and y variable (on line 11 and 12) are going to change according to how we move the mouse 

    // next I will cut all of the code below and paste this in a new function that you will see in file animate2.js
    p = p + 0.02;

    if (p > 1) {
        p = 0;
    }
    const rad = minRad + rangeRad * p;

    ctx.clearRect(0, 0, myCanvas.clientWidth, myCanvas.height); 
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.stroke();
});

