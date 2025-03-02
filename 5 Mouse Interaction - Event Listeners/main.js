const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

// the mousemove event triggers everytime you move the mouse, so what actually happens is that everytime the mouse moved a new circle is drawn
// So when you don't move the mouse no cicle is drawn
myCanvas.addEventListener("mousemove", function(info) {
    // const x = info.x;
    // const y = info.y;
    // try commenting the lines below and uncommenting the lines above
    // With the lines above the (default) margin somehow effects the position of the circle
    // if you set the parameter to offsetX and offsetY the margin does not effect the circle
    const x = info.offsetX;
    const y = info.offsetY;

    // draw a circle
    ctx.clearRect(0, 0, myCanvas.clientWidth, myCanvas.height); // see what happens if you comment this line of code which removes every circle that has been drawn when a new circle is beiing drawn
    // makes it look a like a drawing app, right?
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.stroke();
});

// in the pulse.js fule I make the circle pulse when you move the mouse
// in the animate.js files I combine the mousemove event with another event called animate to make the circle pulse, even when you don't move the mouse
