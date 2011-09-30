var canvas;
var context;
var keyboard;

var interval = 1000/20; // 20 fps

/// game entry point
main = function() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	keyboard = new Keyboard();
	
	setInterval(step, interval);
}

/// game step method
step = function() {
	var seconds = interval / 1000.0;
	
	// Wipe screen
	context.save();
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.restore();
}