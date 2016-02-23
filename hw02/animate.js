/*
Mary McGreal
SoftDev pd 3
HW01a- Finding Your Path Around the Canvas
2016-02-11
*/

/*
var c = document.getElementById("ftb2maga");
var con = c.getContext("2d");
con.fillStyle="#FF0000"; //set rectangle fill color
con.fillRect(0,0,100,50); //draw filled-in rectancgle
con.strokeStyle="#FF0000"; //set stroke style
con.strokeRect(200,50,50,50); //draws the outline of a rectangle

//triangle
con.beginPath(); //start drawing
con.moveTo(100,400);//move the cursor to
con.lineTo(100,100);//draw line from initial point to this point
con.stroke(); //color the lines
con.lineTo(350,325);//draw line from last point to this point
con.lineTo(100, 400);//draw line from last point to this point
con.fill();//fill the shape
con.closePath();//stop drawing

//circle
con.arc (325, 200, 40, 0, 2*Math.PI, true); // draw circle
con.fill(); //fill circle with color
con.closePath(); //stop drawing

con.font = "30px arial" //sets font fillStyle
con.fillText("hello", 450, 200); //write the text
*/
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var clear = document.getElementById("clear");

var x;
var y;
var radius = 1;
var growing = true;
var s = 0;


function setup(){
	ctx.strokeRect(0,0,538,538); 
};

function drawDot(event) {

	event.preventDefault();   

	if (growing) {radius = radius + 1;}
	else {radius=radius-1;}

	if (radius == (c.width/2))
		growing=false;
	else if (radius ==0){
		growing=true;
	}
	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fill();

	window.requestAnimationFrame(drawDot);
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


