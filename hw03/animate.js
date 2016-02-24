/*
Mary McGreal
SoftDev pd 3
HW03- Are we ever going to start the movie?
2016-02-24
*/

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var clear = document.getElementById("clear");

var radius = 0;
var growing = true;
var startDraw = document.getElementById("start");
var endDraw = document.getElementById("stop");
var dvd = document.getElementById("devede");
var requestID;
var counter =0; //prevents speeding up

var dir = 0;
var radius = 0;
var xcor = 100;
var ycor = 400;
var xdir = 1;
var ydir = 1;
var logo = new Image();
logo.src = "logo_dvd.jpg";

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
  radius = 0;
  counter=0;
  window.cancelAnimationFrame(requestID);
};

var dvdLogo = function(){
    ctx.clearRect(0,0,538,538);
    ctx.strokRect(0,0,538,538);

    ctx.drawImage(logo,xcor,ycor,75,50);
    xcor = xcor + (2 * xdir);
    ycor = ycor + (2 * ydir);
    if (xcor == (538-70) || xcor == 0){
        xdir = xdir * -1;
    }
    if (y == (538-50) || y == 0){
        ydir = ydir * -1;
    }
    requestId = window.requestAnimationFrame(dvd);
}

startDraw.addEventListener("click", drawDot);
endDraw.addEventListener("click", stop);
dvd.addEventListener("click", dvdLogo);

