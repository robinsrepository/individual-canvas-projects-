// in this extra file I want to make the circle pulse when the mouse is being moved

const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

const minRad = 10; // for that I need a minimum radius...
const rangeRad = 20; // ...and a range...
let p = 0; // ...and a percentage (how much from the minimum it is going to increase in radius according to the range)

myCanvas.addEventListener("mousemove", function(info) {
    const x = info.offsetX;
    const y = info.offsetY;

    // now here I change the value of p
    p = p + 0.02;
    // and then write a simple if statement to reset p
    if (p > 1) {
        p = 0;
    }
    // then the radius from this circle is going to come from the mimimum radius plus the range of the radius multiplied by p
    const rad = minRad + rangeRad * p;

    ctx.clearRect(0, 0, myCanvas.clientWidth, myCanvas.height); 
    ctx.beginPath();
    // because of declaring the radius on line 21 I have to replace the hardcoded value 20 with the variable rad
    // ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.stroke();
});

// in the animate.js file I combine the mousemove event with another event called animate to make the circle pulse, even when you don't move the mouse