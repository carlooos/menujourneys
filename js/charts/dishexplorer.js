//Constants for the SVG
var width = 960,
    height = 600;

//Set up the colour scale
var color = d3.scale.category20();

//Set up the force layout
var force = d3.layout.force()
    .charge(-120)
    .linkDistance(80)
    .size([width, height]);


//Drag and zoom

var margin = {top: -5, right: -5, bottom: -5, left: -5},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// var zoom = d3.behavior.zoom()
//      .scaleExtent([1, 10])
//      .on("zoom", zoomed);

 // var drag = d3.behavior.drag()
 //     .origin(function(d) { return d; })
 //     .on("dragstart", dragstarted)
 //     .on("drag", dragged)
 //     .on("dragend", dragended);

//Append a SVG to the body of the html page. Assign this SVG as an object to svg
var svg = d3.select("#divexplorer").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
   //  .append("g") //zooming
   //  .attr("transform", "translate(" + margin.left + "," + margin.right + ")")
   //  .call(zoom);

 // var rect = svg.append("rect")
 //     .attr("width", width)
 //     .attr("height", height)
 //     .style("fill", "none")
 //     .style("pointer-events", "all");
 //
 // var container = svg.append("g");

//Set up tooltip
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function (d) {
  return  d.name + "";
})
svg.call(tip);


//Read the data from the mis element
graph = mis;
graphRec=JSON.parse(JSON.stringify(graph)); //Add this line

//Creates the graph data structure out of the json data
force.nodes(graph.nodes)
    .links(graph.links)
    .start();

//Create all the line svgs but without locations yet
var link = svg.selectAll(".link")
    .data(graph.links)
    .enter().append("line")
    .attr("class", "link")
    .style("stroke-width", function (d) {
    return Math.sqrt(d.value);
});

//Do the same with the circles for the nodes - no
var node = svg.selectAll(".node")
    .data(graph.nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 8)
    .style("fill", function (d) {
    return color(d.group);
})
    .call(force.drag)
    .on('dblclick', connectedNodes) // highlighting nodes
    .on('mouseover', tip.show) //tool tip
    .on('mouseout', tip.hide); //tool tip

//Now we are giving the SVGs co-ordinates - the force layout is generating the co-ordinates which this code is using to update the attributes of the SVG elements
force.on("tick", function () {
    link.attr("x1", function (d) {
        return d.source.x;
    })
        .attr("y1", function (d) {
        return d.source.y;
    })
        .attr("x2", function (d) {
        return d.target.x;
    })
        .attr("y2", function (d) {
        return d.target.y;
    });

    node.attr("cx", function (d) {
        return d.x;
    })
        .attr("cy", function (d) {
        return d.y;
    });
    node.each(collide(0.5));

});

//adjust threshold
function threshold(thresh) {
    graph.links.splice(0, graph.links.length);
		for (var i = 0; i < graphRec.links.length; i++) {
			if (graphRec.links[i].value > thresh) {graph.links.push(graphRec.links[i]);}
		}
    restart();
}
//Restart the visualisation after any node and link changes
function restart() {
	link = link.data(graph.links);
	link.exit().remove();
	link.enter().insert("line", ".node").attr("class", "link");
	node = node.data(graph.nodes);
	node.enter().insert("circle", ".cursor").attr("class", "node").attr("r", 5).call(force.drag);
	force.start();
}


// Collision Detection
var padding = 1, // separation between circles
    radius=8;
function collide(alpha) {
  var quadtree = d3.geom.quadtree(graph.nodes);
  return function(d) {
    var rb = 2*radius + padding,
        nx1 = d.x - rb,
        nx2 = d.x + rb,
        ny1 = d.y - rb,
        ny2 = d.y + rb;
    quadtree.visit(function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d)) {
        var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y);
          if (l < rb) {
          l = (l - rb) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
}

//HIGHLIGHTING NODES
//Toggle stores whether the highlighting is on
var toggle = 0;
//Create an array logging what is connected to what
var linkedByIndex = {};
for (i = 0; i < graph.nodes.length; i++) {
    linkedByIndex[i + "," + i] = 1;
};
graph.links.forEach(function (d) {
    linkedByIndex[d.source.index + "," + d.target.index] = 1;
});
//This function looks up whether a pair are neighbours
function neighboring(a, b) {
    return linkedByIndex[a.index + "," + b.index];
}
function connectedNodes() {
    if (toggle == 0) {
        //Reduce the opacity of all but the neighbouring nodes
        d = d3.select(this).node().__data__;
        node.style("opacity", function (o) {
            return neighboring(d, o) | neighboring(o, d) ? 1 : 0.1;
        });
        link.style("opacity", function (o) {
            return d.index==o.source.index | d.index==o.target.index ? 1 : 0.1;
        });
        //Reduce the op
        toggle = 1;
    } else {
        //Put them back to opacity=1
        node.style("opacity", 1);
        link.style("opacity", 1);
        toggle = 0;
    }
}

// Search Nodes and Auto suggest
var optArray = [];

for (var i = 0; i < graph.nodes.length - 1; i++) {
    optArray.push(graph.nodes[i].name);
}

optArray = optArray.sort();
$(function () {
    $("#search").autocomplete({
        source: optArray
    });
});

function searchNode() {
    //find the node
    var selectedVal = document.getElementById('search').value;
    var node = svg.selectAll(".node");
    if (selectedVal == "none") {
        node.style("stroke", "white").style("stroke-width", "1");
    } else {
        var selected = node.filter(function (d, i) {
            return d.name != selectedVal;
        });
        selected.style("opacity", "0");
        var link = svg.selectAll(".link")
        link.style("opacity", "0");
        d3.selectAll(".node, .link").transition()
            .duration(5000)
            .style("opacity", 1);
    }
}

function zoomed() {
  svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}

// function dragstarted(d) {
//   d3.event.sourceEvent.stopPropagation();
//   d3.select(this).classed("dragging", true);
// }
//
// function dragged(d) {
//   d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
// }
//
// function dragended(d) {
//   d3.select(this).classed("dragging", false);
// }
