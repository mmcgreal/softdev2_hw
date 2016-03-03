/*
Mary McGreal
SoftDev pd 3
HW04- SVG
2016-02-23
*/

var pic=document.getElementById("vimage");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var intervalID;

var radius = 0; 
var growing = true;
var delta_radius = 1;

var drawDot = function (x,y){ //setting of attributes that happen when i draw a dot
  var c = document.createElementNS ("http://www.w3.org/2000/svg", "circle"); //specifies the namespace
  c.setAttribute("cx", 250);
  c.setAttribute("cy", 250);
  c.setAttribute("r", "0"); //radius size has to be a string
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "blue");

  var animate = function(){
      c = document.getElementsByTagName("circle")[0];
      radius = parseInt(c.getAttribute("r"));
      //change size of the circle
      if (growing) {
        radius += delta_radius; 
      } 
      else {
        radius -= delta_radius;
      }
      
      //setting growing limits
      if (radius == 250){
        growing = false;
      }

      c.setAttribute("r", radius.toString());
      
  };

  intervalID = window.setInterval(animate,16);
  pic.appendChild(c);
};

var clicked = function (e){ //asks am i the element that was clicked??
  if (e.toElement == this){
    drawDot (e.offsetX, e.offsetY);
  }
};

var stopNow = function(){
    window.clearInterval(intervalID);
};

start.addEventListener("click", clicked);
stop.addEventListener("click", stopNow);


