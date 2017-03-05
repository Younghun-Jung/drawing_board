// colors
var colors = [
	{r: 0, g: 0, b: 0, a: 1},
	{r: 128, g: 128, b: 128, a: 1},
	{r: 255, g: 255, b: 255, a: 1},
	{r: 255, g: 0, b: 0, a: 1},
	{r: 255, g: 165, b: 0, a: 1},
	{r: 255, g: 255, b: 0, a: 1},
	{r: 0, g: 255, b: 0, a: 1},
	{r: 0, g: 0, b: 255, a: 1},
	{r: 75, g: 0, b: 130, a: 1},
	{r: 238, g: 130, b: 238, a: 1}
];
var colorsUl = document.getElementById('colors')
var swatches = document.getElementsByClassName('swatch');
var curSwatch;
var active = document.getElementsByClassName('active');
// opacity
var opa = document.getElementById('opacity');
var opaBox = document.getElementById('opa_box');
var opaLyr = document.getElementById('opa_lyr');
var opaArrow = document.getElementById('opa_arrow');
var opaLine = document.getElementById('opa_line');
var opaLine_height = 90;
var opaBtn = document.getElementById('opa_bar');
var opaBtn_posY = 0;
var opaBtn_posY_min = 0;
var opaBtn_posY_max = 78;
var opaVal = document.getElementById('opaval');
var opaBtn_dragging = false;

// create color list element depending on colors
for(var i=0, n=colors.length; i<n; i++) {
	var swatch = document.createElement('li');
	swatch.className = 'swatch';
	swatch.style.backgroundColor = 'rgba(' + colors[i].r +','+ colors[i].g +','+ colors[i].b +','+ colors[i].a +')';
	swatch.addEventListener('click', setSwatch);
	colorsUl.appendChild(swatch);
}

// set initial color
setSwatch({target: colorsUl.firstElementChild});

// Add event to change opacity
opaArrow.addEventListener('click', function() {
	opacity.classList.toggle('on');
});
// mouse interaction on opacity box
opaBox.addEventListener('mousemove', moveBar);
opaBox.addEventListener('mouseup', function() {
	opaBtn_dragging = false;
});
opaBox.addEventListener('mousedown', function() {
	opaBtn_dragging = true;
});


// set color function
function setColor(color, alpha) {
	ctx.globalAlpha = alpha;
	ctx.fillStyle = color;
	ctx.strokeStyle = color;
}
// set active color list item
function setSwatch(e) {
	//identify swatch
	curSwatch = e.target;
	var parent = curSwatch.parentElement;
	//set color
	setColor(curSwatch.style.backgroundColor, opaVal.innerText);
	//remove active class among swatches
	for(var i=0, n=swatches.length; i<n; i++) {
		if(swatches[i].classList.contains('active')) {
			swatches[i].classList.remove('active');
		}
	}
	//give active class
	curSwatch.classList.add('active');
}

// set opacity through moving bar in opacity box
function moveBar(e) {
	if(opaBtn_dragging) {
		opaBtn_posY = e.offsetY - opaLine.offsetTop;
		if(opaBtn_posY < opaBtn_posY_min) {
			opaBtn_posY = opaBtn_posY_min;
		}else if(opaBtn_posY > opaBtn_posY_max) {
			opaBtn_posY = opaBtn_posY_max;
		}
		// mapping position of mouse and positoin of bar
		opaBtn.style.top = opaBtn_posY + "px";
		opaVal.innerText = ((opaBtn_posY/opaBtn_posY_max -1) * -1).toFixed(1);
		// change opacity
		setColor(curSwatch.style.backgroundColor, opaVal.innerText);
	}
}
