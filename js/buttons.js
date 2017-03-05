var resetBtn = document.getElementById('reset'); // reset button
var saveBtn = document.getElementById('save'); // save button

// reset canvas
resetBtn.addEventListener('click', function() {
	clearCanvas(canvas);
});

// save image on canvas through new window
saveBtn.addEventListener('click', saveImage);

// clear canvas
function clearCanvas(c) {
	c.width = canvas.width; // redefine canvas's width
	// maintain previous radius, color and opacity
	setRadius(radius);
	setColor(curSwatch.style.backgroundColor, opaVal.innerText);
}

function saveImage() {
	// data URL scheme
	var data = canvas.toDataURL();
	// maintain previous color
	window.open(data, '_blank', 'location=0, menubar=0');
}
