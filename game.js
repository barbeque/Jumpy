var canvas;
var context;
var keyboard;

var interval = 1000/20; // 20 fps

var imagePaths = [ 'assets/block.png' ];
var images = new Array();

/// game entry point
main = function() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	keyboard = new Keyboard();
	
	// load images
	for(path in imagePaths) {
		streamedImage = new StreamedImage();
		streamedImage.image.src = path;
		images.push(streamedImage);
	}
	
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