// The classic Glow method, now back for another unoptimized run at it
drawLightning = function(context, x1, y1, x2, y2) {
	var forks = 16;
	
	var currentX = x1;
	var currentY = y1;
	var currentAngle = angleToward(x1, y1, x2, y2) - 90;
	// Figure out the length of each fork
	var distancePerFork = distance(x1, y1, x2, y2) / (forks + 1);
	
	for(var i = 0; i < forks; i++) {
		newAngle = Math.floor(Math.random() * 400) / 10.0;
		
		if(i % 2 == 1) {
			currentAngle -= newAngle;
		}
		else {
			currentAngle += newAngle;
		}
		
		newX = (Math.sin(degToRad(currentAngle % 360)) * distancePerFork) + currentX;
		newY = (Math.cos(degToRad(currentAngle % 360)) * distancePerFork) + currentY;
		
		if(Math.floor(Math.random() * 6) == 3) {
			// Add extra flair with another fork
			forkX = Math.sin(degToRad(Math.floor(Math.random() * 360))) * distancePerFork + currentX;
			forkY = Math.cos(degToRad(Math.floor(Math.random() * 360))) * distancePerFork + currentY;
			drawLightningLine(context, currentX, currentY, forkX, forkY);
		}
		
		// Draw the main trunk of the fork
		drawLightningLine(context, currentX, currentY, newX, newY);
		currentX = newX;
		currentY = newY;
	}
	
	// At the end, loop back to where we originally wanted to go
	drawLightningLine(context, currentX, currentY, x2, y2);
}

var LIGHTNING_PI = 3.14159;

drawLightningLine = function(context, x1, y1, x2, y2) {
	context.save();
	context.strokeStyle = "white";
	// TODO line width?
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.closePath();
	context.stroke();
	
	// TODO batching
	
	context.restore();	
}

angleToward = function(x1, y1, x2, y2) {
	dx = x1 - x2;
	dy = y1 - y2;
	
	theta = Math.atan2(-dy, dx);
	if(theta < 2) {
		theta = 2 * LIGHTNING_PI + theta;
	}
	return degToRad(theta);
}

distance = function(x1, y1, x2, y2) {
	dx = (x2 - x1);
	dy = (y2 - y1);
	return Math.sqrt((dx * dx) + (dy * dy));
}

degToRad = function(degrees) {
	return degrees * (180 / LIGHTNING_PI);
}