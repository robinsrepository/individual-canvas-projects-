// alert("Test");

// I'm not going to ad all the details as comments of what I did, because this is a recap of the previous lectures

const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

// Specify minimum x coördinate, range for the eyes and set the percentage equal to zero
const minX = 170;
const rangeX = 60;
let p = 0;

// Add scarf file
const scarf = new Image();
scarf.src="scarf.png";

// Make the eyes follow the mouse
myCanvas.addEventListener("mousemove", function(info) {
    p = info.offsetX / myCanvas.width;
});



// ///////// Create Snowflakes

// let snowflakes = []; // Array to store all the snowflakes

// // Generate a certain amountof snowflakes
// function createSnowflakes(number) {
//     for (let i = 0; i < number; i++) {
//         let snowflake = {
//             xFlake: Math.random() * myCanvas.width, // Random x position
//             yFlake: Math.random() * myCanvas.height, //Random y position
//             // speed: Math.random() * 3 + 1
//         };
//         snowflakes.push(snowflake); // Add snowflakes to the array

//     }
// }
 
// // Call to function
// createSnowflakes(5);
// console.log(snowflakes);

// I copied tis function from one of the previous lectures for this
function drawSnowman(ball1X, ball1Y, ball1R, scaleFactor) {
    ctx.beginPath();
    ctx.arc(ball1X, ball1Y, ball1R, 0, Math.PI * 2);
    ctx.fillStyle="snow";
    ctx.fill();
    
    ctx.beginPath();
    const ball2R = ball1R * scaleFactor, ball2X = ball1X, ball2Y = ball1Y - ball1R - ball2R;
    ctx.arc(ball2X, ball2Y, ball2R, 0, Math.PI * 2);

    ctx.fill();
    
    ctx.beginPath();
    const ball3R = ball2R * scaleFactor, ball3X = ball2X, ball3Y = ball2Y - ball2R - ball3R;
    ctx.arc(ball3X, ball3Y, ball3R, 0, Math.PI * 2);
    ctx.fill();
    
    drawHat(ball3X, ball3Y, ball3R, scaleFactor);
}

// I copied tis function from one of the previous lectures for this
function drawHat(headX, headY, headR, scaleFactor) {
    ctx.beginPath();
    const w4 = headR * 2, h4 = headR / 2 -20, x4 = headX - w4 / 2, y4 = headY - headR + 10;
    ctx.rect(x4,y4,w4,h4);
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.fillStyle="black";
    ctx.fill();
    
    ctx.beginPath();
    const w5 = w4 * scaleFactor, h5 = headR, x5 = headX - w5 / 2, y5 = y4 - h5;
    ctx.rect(x5,y5,w5,h5)
    ctx.stroke();
    ctx.fill();    
    ctx.closePath();

    ctx.beginPath();
    const w6 = w4 * scaleFactor, h6 = headR / 4, x6 = headX - w6 / 2, y6 = headY - headR - 17;
    ctx.rect(x6,y6,w6,h6);
    ctx.strokeStyle="red";
    ctx.stroke();
    ctx.fillStyle="red";
    ctx.fill();
}

// This snowflake I drew myself after learning how to do that in one of the previous lectures
// The small lines I gave numbers, the 1st one is the top middle one and the rest is ordered clockwise
function drawSnowflake(xFlake, yFlake) {
    ctx.scale(0.15, 0.15);
    
    // Give lines white color
    ctx.strokeStyle="lightblue";
    ctx.lineWidth = 7;

    // Horizontal line
    ctx.beginPath();
    ctx.moveTo(xFlake + 70, yFlake + 200);
    ctx.lineTo(xFlake + 335, yFlake + 200);
    ctx.stroke();

    // Vertical line
    ctx.beginPath();
    ctx.moveTo(xFlake + 200, yFlake + 70);
    ctx.lineTo(xFlake + 200, yFlake + 330);
    ctx.stroke();

    // Diagonal line (top-left to right-bottom)
    ctx.beginPath();
    ctx.moveTo(xFlake + 100, yFlake + 100);
    ctx.lineTo(xFlake + 300, yFlake + 300);
    ctx.stroke();

    // Diagonal line (top-right to left-bottom)
    ctx.beginPath();
    ctx.moveTo(xFlake + 100, yFlake + 300);
    ctx.lineTo(xFlake + 300, yFlake + 100);
    ctx.stroke();

    // Inner connected line
    ctx.beginPath();
    ctx.moveTo(xFlake + 200, yFlake + 150);
    ctx.lineTo(xFlake + 235, yFlake + 165);
    ctx.lineTo(xFlake + 250, yFlake + 200);
    ctx.lineTo(xFlake + 235, yFlake + 235);
    ctx.lineTo(xFlake + 200, yFlake + 250);    
    ctx.lineTo(xFlake + 165, yFlake + 235); 
    ctx.lineTo(xFlake + 150, yFlake + 200); 
    ctx.lineTo(xFlake + 165, yFlake + 165); 
    ctx.lineTo(xFlake + 200, yFlake + 150); 
    ctx.stroke();
 
    // 1 Left lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 200, yFlake + 130);
    ctx.lineTo(xFlake + 170, yFlake + 110);
    ctx.stroke();
    // 1 Left higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 200, yFlake + 100);
    ctx.lineTo(xFlake + 180, yFlake + 90);
    ctx.stroke();
    // 1 Right lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 200, yFlake + 130);
    ctx.lineTo(xFlake + 230, yFlake + 110);
    ctx.stroke();
    // 1 Rigt higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 200, yFlake + 100);
    ctx.lineTo(xFlake + 220, yFlake + 90);
    ctx.stroke();

    // 2 Left lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 250, yFlake + 150);
    ctx.lineTo(xFlake + 245, yFlake + 115);
    ctx.stroke();
    // 2 Left higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 270, yFlake + 100);
    ctx.lineTo(xFlake + 270, yFlake + 130);
    ctx.stroke();
    // 2 Right lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 250, yFlake + 150);
    ctx.lineTo(xFlake + 290, yFlake + 155);
    ctx.stroke();
    // 2 Rigt higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 300, yFlake + 130);
    ctx.lineTo(xFlake + 270, yFlake + 130);
    ctx.stroke();

    // 3 Left lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 270, yFlake + 200);
    ctx.lineTo(xFlake + 295, yFlake + 170);
    ctx.stroke();
    // 3 Left higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 320, yFlake + 180);
    ctx.lineTo(xFlake + 300, yFlake + 200);
    ctx.stroke();
    // 3 Right lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 270, yFlake + 200);
    ctx.lineTo(xFlake + 295, yFlake + 230);
    ctx.stroke();
    // 3 Rigt higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 320, yFlake + 220);
    ctx.lineTo(xFlake + 300, yFlake + 200);
    ctx.stroke();

    // 4 Left lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 290, yFlake + 245);
    ctx.lineTo(xFlake + 250, yFlake + 250);
    ctx.stroke();
    // 4 Left higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 300, yFlake + 275);
    ctx.lineTo(xFlake + 275, yFlake + 275);
    ctx.stroke();
    // 4 Right lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 250, yFlake + 250);
    ctx.lineTo(xFlake + 245, yFlake + 290);
    ctx.stroke();
    // 4 Rigt higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 275, yFlake + 275);
    ctx.lineTo(xFlake + 275, yFlake + 300);
    ctx.stroke();

    // 5 Left lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 235, yFlake + 295);
    ctx.lineTo(xFlake + 200, yFlake + 270);
    ctx.stroke();
    // 5 Left higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 225, yFlake + 315);
    ctx.lineTo(xFlake + 200, yFlake + 300);
    ctx.stroke();
    // 5 Rigt higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 175, yFlake + 315);
    ctx.lineTo(xFlake + 200, yFlake + 300);
    ctx.stroke();
    // 5 Rigt higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 165, yFlake + 295);
    ctx.lineTo(xFlake + 200, yFlake + 270);
    ctx.stroke();

    // 6 Left lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 145, yFlake + 255);
    ctx.lineTo(xFlake + 150, yFlake + 290);
    ctx.stroke();
    // 6 Left higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 125, yFlake + 275);
    ctx.lineTo(xFlake + 125, yFlake + 300);
    ctx.stroke();
    // 6 Rigt lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 145, yFlake + 255);
    ctx.lineTo(xFlake + 105, yFlake + 250);
    ctx.stroke();
    // 6 Rigt higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 125, yFlake + 275);
    ctx.lineTo(xFlake + 100, yFlake + 275);
    ctx.stroke();

    // 7 Left lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 130, yFlake + 200);
    ctx.lineTo(xFlake + 100, yFlake + 235);
    ctx.stroke();
    // 7 Left higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 100, yFlake + 200);
    ctx.lineTo(xFlake + 85, yFlake + 220);
    ctx.stroke();
    // 7 Rigt lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 130, yFlake + 200);
    ctx.lineTo(xFlake + 100, yFlake + 165);
    ctx.stroke();
    // 7 Rigt higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 100, yFlake + 200);
    ctx.lineTo(xFlake + 85, yFlake + 180);
    ctx.stroke();

    // 8 Left lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 145, yFlake + 145);
    ctx.lineTo(xFlake + 105, yFlake + 150);
    ctx.stroke();
    // 8 Left higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 125, yFlake + 125);
    ctx.lineTo(xFlake + 100, yFlake + 125);
    ctx.stroke();
    // 8 Rigt lower line
    ctx.beginPath();
    ctx.moveTo(xFlake + 145, yFlake + 145);
    ctx.lineTo(xFlake + 150, yFlake + 110);
    ctx.stroke();
    // 8 Rigt higher line
    ctx.beginPath();
    ctx.moveTo(xFlake + 125, yFlake + 125);
    ctx.lineTo(xFlake + 125, yFlake + 100);
    ctx.stroke();

    // Close paths and reset scale
    ctx.closePath();
    ctx.setTransform(1,0,0,1,0,0);
}

const width = 3000, height = 3000;
let spacing =  500;
let scaleFactor = 1;
let snowPosition = [];

// Generate random positions and speeds for flakes
function drawSnowflakesPosition() {
    let xFlake = 0;
    let yFlake = 0;
    xFlake = -200;
    while (xFlake < width) {
        yFlake = 0;
        while (yFlake < height) {
            let randomXOffset = Math.random() * (spacing);
            let randomYOffset = Math.random() * (spacing);
            let randomSpeed = 5 + Math.random() * 8; // Random speed between 0.5 and 2
            snowPosition.push({
                x: xFlake + randomXOffset,
                y: yFlake + randomYOffset,
                ySpeed: randomSpeed
            });
            yFlake += spacing;
        }
        xFlake += spacing;
    }
}

// Drawing snowflakes and letting it snow
function drawSnowflakesGrid() {
    snowPosition.forEach(position => {
        drawSnowflake(position.x, position.y, scaleFactor);

        // Updates snoflake position
        position.y += position.ySpeed;

        // Reset snowflake position when it reaches the end of the canvas
        if (position.y > height) {
            position.y = -100; // Resets snowflake above the canvas
        }
    })
}

drawSnowflakesPosition(); // Call to function

// First drawing the snowman again
function animate() {
    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
    // Drawing the snowman
    drawSnowman(200,640,160,0.7);
    
    // Drawing the dynamic eyes
    const x = minX + rangeX * p;
    ctx.beginPath();
    ctx.arc(x-25,170,15,0,Math.PI*2);
    ctx.arc(x+25,170,15,0,Math.PI*2);
    ctx.fillStyle = "black";
    ctx.fill();

    // Drawing thw scarf
    ctx.drawImage(scarf,145,240,110,160);

    // Request next animation frame (infinite loop)
    requestAnimationFrame(animate);

    drawSnowflakesGrid();
}

animate(); // Call to function





