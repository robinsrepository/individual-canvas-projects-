const el = document.getElementById("myCanvas");
const ctx = el.getContext("2d");

// because I will make 3 big snowballs for my snowman, I will call the first 3 parameters of .arc() x1, y1, r1 - x2, y2, r2 - x3, y3, r3
ctx.beginPath();
const x1 = 300, y1 = 450, r1 = 80;
ctx.arc(x1, y1, r1, 0, Math.PI * 2);
ctx.fillStyle="white";
ctx.fill();

// the radius I declared first, because to declare it I will use the value of the y parameter
// I like the second snowball to be slightly smaller than the first one: 80% of the radius of the first one and I can do that by writing r2 = r1 * 0.8
// the x parameter of the second snowball can be the same as the x parameter of the first snowball
// the y parameter will end up in the perfect position if you use the location of first snowball minus the radius of both the first and second snowball... just visualize it and it makes sense!
ctx.beginPath();
const r2 = r1 * 0.8, x2 = x1, y2 = y1 - r1 - r2;
ctx.arc(x2, y2, r2, 0, Math.PI * 2);
ctx.fillStyle="white";
ctx.fill();

// for the third snowball you can use the same code as for the second snowball
// just change the numbers 1 to 2 and the numbers 2 to 3!
ctx.beginPath();
const r3 = r2 * 0.8, x3 = x2, y3 = y2 - r2 - r3;
ctx.arc(x3, y3, r3, 0, Math.PI * 2);
ctx.fillStyle="white";
ctx.fill();

// The cool thing about this way of coding the second and third snowball relative to the first one, is that when you change the values of the first snowball, the whole snowman will change size or position! Try it out...

// now I first make the brim of the hat
// therefore I like the width of it to be the same size as the width of the third snowball, I get that exact width by using the radius of the third snowball (r3) and multiply that with 2
// I like the height to be a little smaller than the radius of r3 so I divide it by 2
// the x parameter will be at the right spot (horizontally centered) when the value is the same as the x-position of the third snowball, minus the width of the hats brim, divided by 2
// the y-parameter will be at the right spot (on top of the third snowball) by using the y-position minus the radius of the third snowball
ctx.beginPath();
const w4 = r3 * 2, h4 = r3 / 2, x4 = x3 - w4 / 2, y4 = y3 - r3;
ctx.rect(x4,y4,w4,h4)
ctx.stroke();
ctx.fillStyle="black";
ctx.fill();

// lets finish the rest of the hat
// I don't think I need to explain again what I did, it's with the same way of thinking as with the brim
// I didn't set the fillStyle this time, because it was already set to black
ctx.beginPath();
const w5 = w4 * 0.8, h5 = r3, x5 = x3 - w5 / 2, y5 = y4 - h5;
ctx.rect(x5,y5,w5,h5)
ctx.stroke();
ctx.fill();

// to see a clean version of the code I wrote until now, uncomment the clean.js file inside of the HTML style element and comment this main.js one