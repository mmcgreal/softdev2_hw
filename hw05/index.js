/*
Mary McGreal
SoftDev pd 3
HW05-The Best Defense Against Tyranny...
2016-03-18
*/

var democrats = [
    {state: "Iowa", count: 44, allocated: 1},
    {state: "New Hampshire", count: 24, allocated: 1}, 
    {state: "Nevada", count: 35, allocated: 1},
    {state: "South Carolina", count: 53, allocated: 1},
    {state: "Alabama", count: 53, allocated: 1},
    {state: "Arkansas", count: 32, allocated: 1},
    {state: "Colorado", count: 66, allocated: 1},
    {state: "Georgia", count: 102, allocated: 1},
    {state: "Massachusetts", count: 91, allocated: 1},
    {state: "Minnesota", count: 77, allocated: 1},
    {state: "Oklahoma", count: 38, allocated: 1},
    {state: "Tennessee", count: 67, allocated: 1},
    {state: "Texas", count: 222, allocated: 1}, 
    {state: "Vermont", count: 16, allocated: 1},
    {state: "Virginia", count: 95, allocated: 1},
    {state: "Louisiana", count: 51, allocated: 1},
    {state: "Nebraska", count: 25, allocated: 1},
    {state: "Kansas", count: 33, allocated: 1},
    {state: "Maine", count: 25, allocated: 1},
    {state: "Mississippi", count: 36, allocated: 1},
    {state: "Michigan", count: 130, allocated: 1},
    {state: "Florida", count: 214, allocated: 1},
    {state: "Illinois", count: 156, allocated: 1},
    {state: "Missouri", count: 71, allocated: 1},
    {state: "North Carolina", count: 107, allocated: 1},
    {state: "Ohio", count: 143, allocated: 1},
    {state: "Arizona", count: 75, allocated: 0},
    {state: "Idaho", count: 23, allocated: 0},
    {state: "Utah", count: 33, allocated: 0},
    {state: "Alaska", count: 16, allocated: 0},
    {state: "Hawaii", count: 25, allocated: 0},
    {state: "Washington", count: 101, allocated: 0},
    {state: "Wisconsin", count: 86, allocated: 0},
    {state: "Wyoming", count: 14, allocated: 0},
    {state: "New York", count: 247, allocated: 0},
    {state: "Maryland", count: 95, allocated: 0},
    {state: "Connecticut", count: 55, allocated: 0},
    {state: "Delaware", count: 21, allocated: 0},
    {state: "Pennsylvania", count: 189, allocated: 0},
    {state: "Rhode Island", count: 24, allocated: 0},
    {state: "Indiana", count: 83, allocated: 0},
    {state: "West Virginia", count: 29, allocated: 0},
    {state: "Kentucky", count: 55, allocated: 0},
    {state: "Oregon", count: 61, allocated: 0},
    {state: "California", count: 475, allocated: 0},
    {state: "Montana", count: 21, allocated: 0},
    {state: "New Jersey", count: 126, allocated: 0},
    {state: "North Dakota", count: 18, allocated: 0},
    {state: "New Mexico", count: 34, allocated: 0},
    {state: "South Dakota", count: 20, allocated: 0},
    {state: "District of Columbia", count: 20, allocated: 0}
];

var display = function(d) {
    var bar = d3.select(this);
    var text = d.state + " | Delegates: " + d.count;
    for (var i = 0; i< text.length; i++) {
        var width = bar.append('tspan').text(text[i]);
        if (i > 0) { 
            width.attr('x', 0).attr('dy', '15');
        }
    }
};

  d3.select(".chart")
   .selectAll("div")
    .data(democrats)
    .enter().append("div")
      .style("width", function(d){
        return d.count*8+"px";})
      .style("background-color", function(d) {
        if (d.allocated != 0) {
            return "black";
        } else {
            return "steelblue";
        }
    })
      .each(display);
