// first I declare the canvas context again
const el = document.getElementById("myCanvas");
const ctx = el.getContext("2d");

// I can draw a figure inside of the canvas and I can also give it some styling, like this:
// ctx.beginPath();
// ctx.rect(100,100,200,200);
// ctx.lineWidth="2";
// ctx.strokeStyle="yellow";
// ctx.fillStyle="white";
// // .fill() shows the default color, black
// ctx.fill();
// ctx.stroke();

// 1.
// now I will show you how you can code the next figure in a couple of ways, here's the first one:
// ctx.beginPath();
// ctx.rect(0,0,400,400);
// ctx.fillStyle="blue";
// ctx.fill();

// ctx.beginPath();
// ctx.rect(50,50,300,300);
// ctx.fillStyle="white";
// ctx.fill();

// ctx.beginPath();
// ctx.rect(100,100,200,200);
// ctx.fillStyle="blue";
// ctx.fill();

// ctx.beginPath();
// ctx.rect(150,150,100,100);
// ctx.fillStyle="white";
// ctx.fill();

// 2.
// here's another way to do it:
// notice how this way is easier than the first one, because you can just simply copy-paste a lot more
// const thickness = 40;
// let x = 0, y = 0, w = 400, h = 400;

// ctx.beginPath();
// ctx.rect(x,y,w,h);
// ctx.fillStyle="blue";
// ctx.fill();
// x = x + thickness;
// y = y + thickness;
// w = w - thickness - thickness;
// h = h - thickness - thickness;

// ctx.beginPath();
// ctx.rect(x,y,w,h);
// ctx.fillStyle="white";
// ctx.fill();
// x = x + thickness;
// y = y + thickness;
// w = w - thickness - thickness;
// h = h - thickness - thickness;

// ctx.beginPath();
// ctx.rect(x,y,w,h);
// ctx.fillStyle="blue";
// ctx.fill();
// x = x + thickness;
// y = y + thickness;
// w = w - thickness - thickness;
// h = h - thickness - thickness;

// ctx.beginPath();
// ctx.rect(x,y,w,h);
// ctx.fillStyle="white";
// ctx.fill();
// x = x + thickness;
// y = y + thickness;
// w = w - thickness - thickness;
// h = h - thickness - thickness;

// ctx.beginPath();
// ctx.rect(x,y,w,h);
// ctx.fillStyle="blue";
// ctx.fill();
// x = x + thickness;
// y = y + thickness;
// w = w - thickness - thickness;
// h = h - thickness - thickness;

// 3. 
// one important rule of best practice that I learned is DRY - Don't Repeat Yourself... so the above we can write way shorter like this:
const thickness = 10;  // see what happens when you change this value to 10 for example
let x = 0, y = 0, w = 400, h = 400; // if the thickness is 10, what happens when you change the width to 200?

let i = 1;
while (i <= 10) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    if (i % 2 == 1) {
        ctx.fillStyle="blue";
    } else {
        ctx.fillStyle="white";
    }
    ctx.fill();
    x = x + thickness;
    y = y + thickness;
    w = w - thickness - thickness;
    h = h - thickness - thickness;
    i = i + 1;
}

// so to explain what I just did in the code above...
// first I changed the thickness to 20, because I wanted more blue and white lines for this example
// after declaring the x,y,w,h variables the same way as before, I declared another variable: let i = 1
// then I wrote a while loop to repeat the code that I this time only have to write once and don't have to repeat, so if i is equal or smaller then 10 (i <= 10), the code inside will be run again
// between the squirly brackets I write the same code as in the second example, but DRY this time
// at the end of that code I added i = i++ (i = i + 1 is the same) so that each loop i increments with 1 
// the last thing that I had to do was make an if condition for the color of the fillStyle...

// so that if - else statement speaks for itself, but let me explain what is happening inside of the if condition (i % 2 == 1)
// - the percentage sign (%) is called the 'remainder operator' in JavaScript
// - the number 2 represent by what you devide i
// the if condition says that if i is an even number (like 0, 2, 4, 6...) and you devide it by 2 the remainder is going to be 0 and if i is an odd number (like 1, 3, 5...) and you devide it by 2 the remainder is going to be 1
// that means that if i has a remainder of 1 the fullStyle will be blue and else (if i has a remainder of 0) the fullStyle will be white
// https://www.youtube.com/watch?v=JfHEtou8qb4&ab_channel=dcode // this video explains it very well

