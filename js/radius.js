// radius
var minRad = 5;
var maxRad = 100;
var defaultRad = 20;
var interval = 5;
var radSpan = document.getElementById('radval');
var decRad = document.getElementById('decrad');
var incRad = document.getElementById('incrad');

// add event on radius control button
decRad.addEventListener('click', function() {
	setRadius(radius - interval);
});
incRad.addEventListener('click', function() {
	setRadius(radius + interval);
});

// apply radius value changed
function setRadius(newRadius) {
	if(newRadius < minRad) {
		newRadius = minRad;
	}else if(newRadius > maxRad) {
		newRadius = maxRad;
	}

	radius = newRadius;
	ctx.lineWidth = radius*2;
	radSpan.innerText = radius;
}
