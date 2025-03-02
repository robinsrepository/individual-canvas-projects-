// alert("Hello World!");

// first I put the HTML canvas element inside a JS variable
// 'el' is a commonly used variable and it is short for 'element'
const el = document.getElementById("myCanvas");

// then I access the so called 'canvas context' by declaring it to a variable 'ctx'
// below I'm getting the '2d context' of this canvas element and there are several options to choose from... you can even do 3d here, but I will focus on 2d for this explanation
const ctx = el.getContext("2d");
// the next line of code I will explain later on... (line 35)
ctx.beginPath();

// this context now has all the methods that we need to draw on the canvas, like '.moveTo()', '.lineTo()', '.stroke()' as seen below

// .moveTo() does exactly what is says, it moves to a specific location and in this case...
// ...100 is moving 100px on the x-axis
// ...300 is moving 300px on the y-axis
// remember, the canvas is 400 x 400 px (I declared this inside the HTML canvas element) 
// the x-axis runs from the top left corner (0) to the top right corner (400px to the right) of the canvas
// the y-axis runs from the top left corner (0) to the bottom left corner (400px down) of the canvas
ctx.moveTo(100,300);

// you can also draw a line to a location with the .lineTo() method
// between the parenthises () you declare the starting point and the end point of the line you like to draw
// to be able to SEE the line you will need .stroke() below .lineTo()!
ctx.lineTo(300,300);
// if you add more lines, you can draw a shape...
ctx.lineTo(300,100);
ctx.lineTo(200,50);
ctx.lineTo(100,100)
ctx.lineTo(100,300);
ctx.stroke();

// now I will draw a circle, but before I do that I need to move to another starting point in the canvas, or else I keep drawing from the end point of the last line I drew... you can see what I mean by commenting and uncommenting the line below
ctx.beginPath();
// with this method you "take your pen of the paper" so you can start drawing from another point on the canvas
// as I promised on line 11 I explained the above line of code and the reason it is also on line 12, is because of best practice: always start drawing on a canvas with .beginPath() even though it works without it

// with .arc() you can draw a circle
// the five parameters are:
// 1. the x-cooördinate of the center of the circle (in this case 200 is in the middle of 400)
// 2. the y-cooördinate of the center of the circle 
// 3. the radius of the circle
// 4. this is the startig point of where you draw the circle
//    try it yourself to see what it does, by changing the value
// 5. also with this one you can experiment with different values, but...
//    what happens when you type this:   2*3.14     ?
//    what happens when you type this:   2*MathPI   ? 
// The reason nothing changes in the browser is because the lenght of a circle is 2πR (π = pie) and in the third parameter you already specified the radius of the circle (R). That means that πR = half a circle or 3.14 and 2πR = a whole circle! MathPI is equal to 3.14 and some people like to use it because it makes it very clear you are reffering to a circle.
//    what happens when you type just MathPI or 3.14?
//    you will see exactly half a circle!
ctx.arc(200,160,50,0,7);
ctx.stroke();

// now lets draw an easy rectangle...
ctx.beginPath();
ctx.rect(100,300,200,20);
ctx.stroke();

// now you know how to draw basic shapes, what else would you like to draw? 
// maby a roof? a stick to sit on or even a bird? go ahead!

// roof:
ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(80,110)
ctx.lineTo(80,80);
ctx.lineTo(200,20);
ctx.lineTo(320,80);
ctx.lineTo(320,110);
ctx.lineTo(200,50);
ctx.stroke();

// stick:
ctx.beginPath();
ctx.arc(200,240,10,0,7);
ctx.stroke();