// set canvas id to variable
var canvas = document.getElementById("loona");

// get canvas 2D context and set it to the correct size
var ctx = canvas.getContext("2d");
resize();

// resize canvas when window is resized
function resize() {
    ctx.canvas.width = window.innerWidth * 0.8;
    ctx.canvas.height = window.innerHeight - 20;
}

// add event listeners to specify when functions should be triggered
window.addEventListener("resize", resize);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

// last known position
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}

function colorValue(e) {
    var color = e.dataset.color;
    console.log(color);
}

function draw(e) {
    if (e.buttons !== 1) return; // if mouse is pressed.....

    var color = "000";

    ctx.beginPath(); // begin the drawing path

    ctx.lineWidth = 5; // width of line
    ctx.lineCap = "round"; // rounded end cap
    ctx.strokeStyle = color; // hex color of line

    ctx.moveTo(pos.x, pos.y); // from position
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to position

    ctx.stroke(); // draw it!
}