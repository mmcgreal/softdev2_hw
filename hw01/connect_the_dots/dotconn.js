/*
Mary McGreal
SoftDev pd 3
HW02a-Connect the Dots!
2016-02-12
*/

// http://homer.stuy.edu/~tofr/dots/  BROWN SOURCE CODE !!!!!

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var clear = document.getElementById("clear");

var x;
var y;
var count = 0;
var s = 0;

function setup(){
	ctx.strokeRect(0,0,538,538); 
};

function make(event) {

	event.preventDefault();   

	ctx.strokeRect(0,0,538,538); 

    if (count == 1) {
	var x1 = x;
	var y1 = y;
    }

    x = event.clientX-9;
    y = event.clientY-70;

    ctx.beginPath();
    ctx.arc(x,y,15,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "purple";
    ctx.fill();    
    ctx.closePath();
 
    if (count = 1) {	
	ctx.moveTo(x1,y1);
	ctx.beginPath();
	ctx.lineTo(x1,y1);
	ctx.lineTo(x,y);
	ctx.stroke();
	ctx.closePath();
    }
    
    if (count == 0) //count only = 0 if it's the first dot and there are 0 lines
		count = 1;
};

var clearBoard = function clearBoard(event){
	event.preventDefault();
    ctx.clearRect(0,0,538,538);
    ctx.strokeRect(0,0,538,538); 
    count = 0;
};

setup();
c.addEventListener("click", make);
clear.addEventListener("click", clearBoard);


