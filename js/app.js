// setting canvas
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

// unit: radius of circle
var radius = 10;

// mouse dragging within canvas
var dragging = false;

// canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// maintain state of canvas when window resizing
window.onresize = function() {
	var image = ctx.getImageData(0, 0, canvas.width, canvas.height);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	setRadius(radius);
	setColor(curSwatch.style.backgroundColor, opaVal.innerText);
	ctx.putImageData(image, 0, 0);
}

// line width
ctx.lineWidth = radius * 2;

// drawing tasks on canvas
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);

// mouse move and down
function putPoint(e) {
	if(dragging) {
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(e.offsetX, e.offsetY);
	}
}
// mouse down
function engage(e) {
	dragging = true;
	putPoint(e);
}
// mouse up
function disengage() {
	dragging = false;
	ctx.beginPath();
}
