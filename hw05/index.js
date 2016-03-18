/*
Mary McGreal
SoftDev pd 3
HW05-The Best Defense Against Tyranny...
2016-03-18
*/
var data = [4, 8, 15, 16, 23, 42];
  d3.select(".chart")
   .selectAll("div")
    .data(data)
    .enter().append("div")
      .style("width", function(d){
        return d*10+"px";})
      .text(function(d) {return d;});
