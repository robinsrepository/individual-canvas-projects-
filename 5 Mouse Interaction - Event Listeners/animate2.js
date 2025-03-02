// in this file I use the animate technique 

const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

const minRad = 10; 
const rangeRad = 20; 
let p = 0; 

let x = 200;
let y = 200;

// I now call the animate function
animate();

// and of course I declare the animate function
function animate() {
    // inside of this function I paste all of the code I cut out of the mousemove function
    p = p + 0.02;

    if (p > 1) {
        p = 0;
    }
    const rad = minRad + rangeRad * p;

    ctx.clearRect(0, 0, myCanvas.clientWidth, myCanvas.height); 
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.stroke();

    // then I add the key element requestAnimationFrame that is going to call animate again and this will cause an infinite loop
    requestAnimationFrame(animate);
}


myCanvas.addEventListener("mousemove", function(info) {
    x = info.offsetX;
    y = info.offsetY;
});

// what you now see if you refresh the page is the circle excactly in the middle of the canvas pulsing and when you move the mouse, the pulsing circle is following the direction of the mouse

// there are many more events you can use in JavaScript, mousemove is only one of them
// check out W3Schools.com for more event listeners
