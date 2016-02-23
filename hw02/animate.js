/*
Mary McGreal
SoftDev pd 3
HW02- Animation
2016-02-23
*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var clear = document.getElementById("clear");

var radius = 0;
var growing = true;
var startDraw = document.getElementById("start");
var endDraw = document.getElementById("stop");
var requestID;
var counter =0; //prevents speeding up

function drawDot() {
	counter +=1;
	if (counter >1) //requestAnimationFrame can now only be called once- prevents speeding up.
		  window.cancelAnimationFrame(requestID);
	
  ctx.clearRect(0,0,c.width,c.height);
  ctx.strokeRect(0,0,c.width,c.height);

  if (growing == true) {
    radius = radius + 1;
  }
  else {
    radius = radius-1;
  }
	if (radius >= (c.width/2)) {
		growing=false;
  }
	if (radius <= 0) {
		growing=true;
	}
	ctx.beginPath();
	ctx.fillStyle = "#6600cc";
	ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fill();

  requestID = window.requestAnimationFrame(drawDot);
};

function stop() {
  ctx.clearRect(0,0,c.width,c.height); //clear canvas
  growing = true;
  counter=0;
  radius = 0;
  window.cancelAnimationFrame(requestID);
};

startDraw.addEventListener("click", drawDot);
endDraw.addEventListener("click", stop);

