// Dimensions of sunburst.
var width = 750;
var height = 600;
var radius = Math.min(width, height) / 2;
var colorsDefs = {
  lime:    '#01ff70',
  navy:    '#001f3f',
  teal:    '#39cccc',
  olive:   '#3d9970',
  maroon:  '#85144b',
  orange:  '#ff851b',
  purple:  '#b10dc9',
  yellow:  '#ffdc00',
  fuchsia: '#f012be',
  gray:    '#aaaaaa',
  black:   '#111111',
  silver:  '#dddddd',
  aqua:    '#7fdbff',
  blue:    '#0074d9',
  green:   '#2ecc40',
  red:     '#ff4136'
};
var colorArray = [];
for(var x in colorsDefs){
  colorArray.push(x);
}

// var jsonData =
// {
//   "className": "top",
//   "children": [
//     {
//       "pageX": "1022",
//       "pageY": "216",
//       "uri": "http://www.yelp.com/",
//       "className": "star-img stars_4",
//       "count": 2,
//       "children": [
//         {
//           "pageX": "1022",
//           "pageY": "219",
//           "uri": "http://www.yelp.com/",
//           "className": "star-img stars_4",
//           "count": 1,
//           "children": [
//             {
//               "pageX": "1022",
//               "pageY": "219",
//               "uri": "http://www.yelp.com/",
//               "className": "star-img stars_4",
//               "count": 1,
//               "children": [
//                 {
//                   "pageX": "1022",
//                   "pageY": "219",
//                   "uri": "http://www.yelp.com/",
//                   "className": "star-img stars_4",
//                   "count": 1,
//                   "children": [
//                     {
//                       "pageX": "1022",
//                       "pageY": "219",
//                       "uri": "http://www.yelp.com/",
//                       "className": "star-img stars_4",
//                       "count": 1,
//                       "children": [
//                         {
//                           "pageX": "1022",
//                           "pageY": "219",
//                           "uri": "http://www.yelp.com/",
//                           "className": "star-img stars_4",
//                           "count": 1,
//                           "children": [
//                             {
//                               "pageX": "558",
//                               "pageY": "686",
//                               "uri": "http://www.yelp.com/",
//                               "className": "star-img stars_5",
//                               "count": 1,
//                               "children": [
//                                 {
//                                   "pageX": "350",
//                                   "pageY": "703",
//                                   "uri": "http://www.yelp.com/",
//                                   "className": "category-title",
//                                   "count": 1,
//                                   "children": [
//                                     {
//                                       "pageX": "301",
//                                       "pageY": "775",
//                                       "uri": "http://www.yelp.com/",
//                                       "className": "category-title",
//                                       "count": 1,
//                                       "children": [
//                                         {
//                                           "pageX": "317",
//                                           "pageY": "820",
//                                           "uri": "http://www.yelp.com/",
//                                           "className": "category-title",
//                                           "count": 1,

//                                         }
//                                       ]
//                                     }
//                                   ]
//                                 }
//                               ]
//                             }
//                           ]
//                         }
//                       ]
//                     }
//                   ]
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "pageX": "319",
//       "pageY": "144",
//       "uri": "http://www.yelp.com/biz/greenhearts-family-farm-csa-san-francisco",
//       "className": "star-img stars_5",
//       "count": 1,
//       "children": [
//         {
//           "pageX": "353",
//           "pageY": "149",
//           "uri": "http://www.yelp.com/biz/greenhearts-family-farm-csa-san-francisco",
//           "className": "star-img stars_5",
//           "count": 1,
//           "children": [
//             {
//               "pageX": "664",
//               "pageY": "65",
//               "uri": "http://www.yelp.com/biz/greenhearts-family-farm-csa-san-francisco",
//               "className": "header-nav_link",
//               "count": 1,
//               "children": [
//                 {
//                   "pageX": "391",
//                   "pageY": "55",
//                   "uri": "http://www.yelp.com/biz/greenhearts-family-farm-csa-san-francisco",
//                   "className": "header-nav_link",
//                   "count": 1,
//                   "children": [
//                     {
//                       "pageX": "317",
//                       "pageY": "856",
//                       "uri": "http://www.yelp.com/",
//                       "className": "category-title",
//                       "count": 1,
//                     }
//                   ]
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "pageX": "469",
//       "pageY": "51",
//       "uri": "http://www.yelp.com/",
//       "className": "header-nav_link",
//       "count": 1,
//       "children": [
//         {
//           "pageX": "695",
//           "pageY": "167",
//           "uri": "http://www.yelp.com/chicago",
//           "className": "embossed-text-white",
//           "count": 1
//         }
//       ]
//     }
//   ]
// }

var jsonData =
{
  "name":"top",
  "children":
  [
    {
      "pageX": "441",
      "pageY": "447",
      "uri": "http://www.yelp.com/chicago",
      "className": "",
      "count": 2,
      "children":
      [
      {
        "pageX": "1046",
        "pageY": "221",
        "uri": "http://www.yelp.com/chicago",
        "className": "star-img stars_5",
        "count": 1,
        "children":
        [
          {
            "pageX": "1291",
            "pageY": "101",
            "uri": "http://www.yelp.com/chicago",
            "className": "main-content-wrap main-content-wrap--box",
            "count": 1,
            "children":
            [
            {
              "pageX": "25",
              "pageY": "174",
              "uri": "http://www.yelp.com/chicago",
              "className": "main-content-wrap main-content-wrap--box",
              "count": 1,
              "children":
              [
              {
                "pageX": "393",
                "pageY": "55",
                "uri": "http://www.yelp.com/chicago",
                "className": "header-nav_link",
                "count": 1
              }
              ]
            }
            ]
          }
        ]
      }
      ]
    },
    {
      "pageX": "444",
      "pageY": "63",
      "uri": "http://www.yelp.com/oakland",
      "className": "header-nav_link",
      "count": 2,
      "children":
      [
      {
        "pageX": "1157",
        "pageY": "109",
        "uri": "http://www.yelp.com/oakland",
        "className": "main-box-toggle",
        "count": 1,
        "children":
        [
         {
          "pageX": "554",
          "pageY": "291",
          "uri": "http://www.yelp.com/oakland",
          "className": "clearfix",
          "count": 1,
          "children":
          [
           {
            "pageX": "1050",
            "pageY": "214",
            "uri": "http://www.yelp.com/oakland",
            "className": "star-img stars_5",
            "count": 1,
            "children":
            [
            {
              "pageX": "563",
              "pageY": "1266",
              "uri": "http://www.yelp.com/oakland",
              "className": "biz-name",
              "count": 1
            }
            ]
          }
          ]
        }
        ]
      }
      ]
    },
    {
      "pageX": "441",
      "pageY": "447",
      "uri": "http://www.yelp.com/chicago",
      "className": "",
      "count": 2,
      "children":
      [
      {
        "pageX": "1046",
        "pageY": "221",
        "uri": "http://www.yelp.com/chicago",
        "className": "star-img stars_5",
        "count": 1,
        "children":
        [
          {
            "pageX": "1291",
            "pageY": "101",
            "uri": "http://www.yelp.com/chicago",
            "className": "main-content-wrap main-content-wrap--box",
            "count": 1,
            "children":
            [
            {
              "pageX": "25",
              "pageY": "174",
              "uri": "http://www.yelp.com/chicago",
              "className": "main-content-wrap main-content-wrap--box",
              "count": 1,
              "children":
              [
              {
                "pageX": "393",
                "pageY": "55",
                "uri": "http://www.yelp.com/chicago",
                "className": "header-nav_link",
                "count": 1
              }
              ]
            }
            ]
          }
        ]
      }
      ]
    }


    //,
    // {
    //   "pageX": "440",
    //   "pageY": "453",
    //   "uri": "http://www.yelp.com/",
    //   "className": "",
    //   "count": 1
    // }

  ]
}

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 75, h: 30, s: 3, t: 10
};

// Mapping of step names to colors.
var nameToColorMapping = {};
var colorToNamesMapping = {};
function mapNamesToColor(objData, index){
  nameToColorMapping[objData.className] = colorArray[index];
  if(!colorToNamesMapping[colorArray[index]]){
    colorToNamesMapping[colorArray[index]] = [];
  }
  colorToNamesMapping[colorArray[index]].push(objData.className);
  if(objData.children){
    for(var y in objData.children){
      index = (index < colorArray.length)?(index+1):0;
      mapNamesToColor(objData.children[y], index);
    }
  }
}
mapNamesToColor(jsonData,0);
console.log(nameToColorMapping);


// Total size of all segments; we set this later, after loading the data.
var totalSize = 0;

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.layout.partition()
    .size([2 * Math.PI, radius * radius])
    .value(function(d) { return d.count; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return d.x; })
    .endAngle(function(d) { return d.x + d.dx; })
    .innerRadius(function(d) { return Math.sqrt(d.y); })
    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

createVisualization(jsonData);

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

  // Basic setup of page elements.
  initializeBreadcrumbTrail();
  drawLegend();
  //d3.select("#togglelegend").on("click", toggleLegend);

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition.nodes(json)
      .filter(function(d) {
      return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
      });

  var path = vis.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { return nameToColorMapping[d.className]; })
      .style("opacity", 1)
      .on("mouseover", mouseover)
      .on("click",goToUrlIfLastNode);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.node().__data__.value;
 };

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

  var percentage = (100 * d.value / totalSize).toPrecision(3);
  var percentageString = percentage + "%";
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }

  d3.select("#percentage")
      .text(percentageString);

  d3.select("#explanation")
      .style("visibility", "");

  var sequenceArray = getAncestors(d);
  updateBreadcrumbs(sequenceArray, percentageString);

  // Fade all the segments.
  d3.selectAll("path")
      .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}
function goToUrlIfLastNode(d) {
  if(!d.children){
    window.location.assign(d.uri);
  }
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

  // Hide the breadcrumb trail
  d3.select("#trail")
      .style("visibility", "hidden");

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.selectAll("path")
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .each("end", function() {
              d3.select(this).on("mouseover", mouseover);
            });

  d3.select("#explanation")
      .style("visibility", "hidden");
}

// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
function getAncestors(node) {
  var path = [];
  var current = node;
  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
}

function initializeBreadcrumbTrail() {
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
      .attr("width", width)
      .attr("height", 50)
      .attr("id", "trail");
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {

  // Data join; key function combines name and depth (= position in sequence).
  var g = d3.select("#trail")
      .selectAll("g")
      .data(nodeArray, function(d) { return d.className + d.depth; });

  // Add breadcrumb and label for entering nodes.
  var entering = g.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
      .style("fill", function(d) { return nameToColorMapping[d.className]; });

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.className; });

  // Set position for entering and updating nodes.
  g.attr("transform", function(d, i) {
    return "translate(" + i * (b.w + b.s) + ", 0)";
  });

  // Remove exiting nodes.
  g.exit().remove();

  // Now move and update the percentage at the end.
  d3.select("#trail").select("#endlabel")
      .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(percentageString);

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");

}

function drawLegend() {

  // Dimensions of legend item: width, height, spacing, radius of rounded rect.
  var li = {
    w: 200, h: 60, s: 3, r: 3
  };
  // var newMapping = colorToNamesMapping

  var legend = d3.select("#legend").append("svg:svg")
      .attr("width", li.w)
      .attr("height", d3.keys(colorToNamesMapping).length * (li.h + li.s));

  var g = legend.selectAll("g")
      .data(d3.entries(colorToNamesMapping))
      .enter().append("svg:g")
      .attr("transform", function(d, i) {
              return "translate(0," + i * (li.h + li.s) + ")";
           });

  g.append("svg:rect")
      .attr("rx", li.r)
      .attr("ry", li.r)
      .attr("width", li.w)
      .attr("height", li.h)
      .style("fill", function(d) { return d.key; });

  g.append("svg:text")
      .attr("x", li.w / 2)
      .attr("y", li.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) {
        var str = "";
        for(var x in d.value){
          str += d.value[x] + '\n';
        }
        return str;
      });
}

function toggleLegend() {
  var legend = d3.select("#legend");
  if (legend.style("visibility") == "hidden") {
    legend.style("visibility", "");
  } else {
    legend.style("visibility", "hidden");
  }
}


var jsonDataFacebook = [
  {
    "pageX": "791",
    "pageY": "781",
    "uri": "http://www.yelp.com/palo-alto",
    "className": "star-img stars_4_half",
    "count": 1,
    "children": {
      "pageX": "799",
      "pageY": "887",
      "uri": "http://www.yelp.com/palo-alto",
      "className": "star-img stars_5",
      "count": 1,
      "children": {
        "pageX": "794",
        "pageY": "982",
        "uri": "http://www.yelp.com/palo-alto",
        "className": "star-img stars_4_half",
        "count": 1,
        "children": {
          "pageX": "553",
          "pageY": "715",
          "uri": "http://www.yelp.com/palo-alto",
          "className": "category-title",
          "count": 1,
          "children": {
            "pageX": "770",
            "pageY": "53",
            "uri": "http://www.yelp.com/palo-alto",
            "className": "header-nav_link",
            "count": 1,
            "children": {
              "pageX": "632",
              "pageY": "1299",
              "uri": "http://www.yelp.com/palo-alto",
              "className": "star-img stars_5",
              "count": 1,
              "children": {
                "pageX": "631",
                "pageY": "58",
                "uri": "http://www.yelp.com/",
                "className": "header-nav_link",
                "count": 1,
                "children": {
                  "pageX": "719",
                  "pageY": "59",
                  "uri": "http://www.yelp.com/",
                  "className": "header-nav_link",
                  "count": 1
                }
              }
            }
          }
        }
      }
    }
  },
  {
    "pageX": "1270",
    "pageY": "217",
    "uri": "http://www.yelp.com/palo-alto",
    "className": "star-img stars_5",
    "count": 1,
    "children": {
      "pageX": "794",
      "pageY": "1084",
      "uri": "http://www.yelp.com/palo-alto",
      "className": "star-img stars_4_half",
      "count": 1,
      "children": {
        "pageX": "642",
        "pageY": "1531",
        "uri": "http://www.yelp.com/palo-alto",
        "className": "star-img stars_5",
        "count": 3,
        "children": {
          "pageX": "641",
          "pageY": "2114",
          "uri": "http://www.yelp.com/palo-alto",
          "className": "star-img stars_5",
          "count": 2,
          "children": {
            "pageX": "547",
            "pageY": "2929",
            "uri": "http://www.yelp.com/palo-alto",
            "className": "biz-shim",
            "count": 1,
            "children": {
              "pageX": "1286",
              "pageY": "214",
              "uri": "http://www.yelp.com/palo-alto",
              "className": "star-img stars_5",
              "count": 1,
              "children": {
                "pageX": "705",
                "pageY": "58",
                "uri": "http://www.yelp.com/palo-alto",
                "className": "header-nav_link",
                "count": 1,
                "children": {
                  "pageX": "639",
                  "pageY": "62",
                  "uri": "http://www.yelp.com/about",
                  "className": "header-nav_link",
                  "count": 1
                }
              }
            }
          }
        }
      }
    }
  },
  {
    "pageX": "690",
    "pageY": "61",
    "uri": "http://www.yelp.com/palo-alto",
    "className": "header-nav_link",
    "count": 5,
    "children": {
      "pageX": "699",
      "pageY": "61",
      "uri": "http://www.yelp.com/about",
      "className": "header-nav_link",
      "count": 4,
      "children": {
        "pageX": "641",
        "pageY": "66",
        "uri": "http://www.yelp.com/about",
        "className": "header-nav_link",
        "count": 5,
        "children": {
          "pageX": "631",
          "pageY": "60",
          "uri": "http://www.yelp.com/about",
          "className": "header-nav_link",
          "count": 3,
          "children": {
            "pageX": "638",
            "pageY": "61",
            "uri": "http://www.yelp.com/la",
            "className": "header-nav_link",
            "count": 2,
            "children": {
              "pageX": "698",
              "pageY": "61",
              "uri": "http://www.yelp.com/la",
              "className": "header-nav_link",
              "count": 2,
              "children": {
                "pageX": "795",
                "pageY": "61",
                "uri": "http://www.yelp.com/la",
                "className": "header-nav_link",
                "count": 2,
                "children": {
                  "pageX": "903",
                  "pageY": "57",
                  "uri": "http://www.yelp.com/la",
                  "className": "header-nav_link",
                  "count": 1,
                  "children": {
                    "pageX": "619",
                    "pageY": "62",
                    "uri": "http://www.yelp.com/weekly_yelp",
                    "className": "header-nav_link",
                    "count": 1,
                    "children": {
                      "pageX": "1392",
                      "pageY": "110",
                      "uri": "http://www.yelp.com/la",
                      "className": "main-box-toggle",
                      "count": 1,
                      "children": {
                        "pageX": "588",
                        "pageY": "1125",
                        "uri": "http://www.yelp.com/oakland",
                        "className": "category-title",
                        "count": 1,
                        "children": {
                          "pageX": "552",
                          "pageY": "793",
                          "uri": "http://www.yelp.com/oakland",
                          "className": "category-title",
                          "count": 1,
                          "children": {
                            "pageX": "569",
                            "pageY": "903",
                            "uri": "http://www.yelp.com/oakland",
                            "className": "category-title",
                            "count": 1,
                            "children": {
                              "pageX": "577",
                              "pageY": "934",
                              "uri": "http://www.yelp.com/oakland",
                              "className": "category-title",
                              "count": 1,
                              "children": {
                                "pageX": "577",
                                "pageY": "677",
                                "uri": "http://www.yelp.com/oakland",
                                "className": "category-title",
                                "count": 1,
                                "children": {
                                  "pageX": "620",
                                  "pageY": "63",
                                  "uri": "http://www.yelp.com/nyc",
                                  "className": "header-nav_link",
                                  "count": 1,
                                  "children": {
                                    "pageX": "822",
                                    "pageY": "58",
                                    "uri": "http://www.yelp.com/nyc",
                                    "className": "header-nav_link",
                                    "count": 1,
                                    "children": {
                                      "pageX": "632",
                                      "pageY": "57",
                                      "uri": "http://www.yelp.com/about",
                                      "className": "header-nav_link",
                                      "count": 1,
                                      "children": {
                                        "pageX": "613",
                                        "pageY": "2544",
                                        "uri": "http://www.yelp.com/nyc",
                                        "className": "star-img stars_3",
                                        "count": 1,
                                        "children": {
                                          "pageX": "762",
                                          "pageY": "2740",
                                          "uri": "http://www.yelp.com/nyc",
                                          "className": "loading-msg",
                                          "count": 1
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  {
    "pageX": "812",
    "pageY": "3641",
    "uri": "http://www.yelp.com/nyc",
    "className": "biz-name",
    "count": 1,
    "children": {
      "pageX": "1209",
      "pageY": "311",
      "uri": "http://www.yelp.com/c/nyc/steak",
      "className": "biz-shim",
      "count": 1,
      "children": {
        "pageX": "1200",
        "pageY": "458",
        "uri": "http://www.yelp.com/c/nyc/steak",
        "className": "biz-shim",
        "count": 1,
        "children": {
          "pageX": "630",
          "pageY": "54",
          "uri": "http://www.yelp.com/c/nyc/steak",
          "className": "header-nav_link",
          "count": 1,
          "children": {
            "pageX": "699",
            "pageY": "60",
            "uri": "http://www.yelp.com/c/nyc/steak",
            "className": "header-nav_link",
            "count": 1,
            "children": {
              "pageX": "818",
              "pageY": "54",
              "uri": "http://www.yelp.com/c/nyc/steak",
              "className": "header-nav_link",
              "count": 1,
              "children": {
                "pageX": "899",
                "pageY": "66",
                "uri": "http://www.yelp.com/c/nyc/steak",
                "className": "header-nav_link",
                "count": 1,
                "children": {
                  "pageX": "998",
                  "pageY": "59",
                  "uri": "http://www.yelp.com/c/nyc/steak",
                  "className": "header-nav_link",
                  "count": 1,
                  "children": {
                    "pageX": "931",
                    "pageY": "1005",
                    "uri": "http://www.yelp.com/c/nyc/steak",
                    "className": "star-img stars_5",
                    "count": 1,
                    "children": {
                      "pageX": "608",
                      "pageY": "921",
                      "uri": "http://www.yelp.com/c/nyc/steak",
                      "className": "star-img stars_5",
                      "count": 1,
                      "children": {
                        "pageX": "608",
                        "pageY": "1005",
                        "uri": "http://www.yelp.com/c/nyc/steak",
                        "className": "star-img stars_4",
                        "count": 1,
                        "children": {
                          "pageX": "618",
                          "pageY": "65",
                          "uri": "http://www.yelp.com/nyc",
                          "className": "header-nav_link",
                          "count": 1
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  {
    "pageX": "691",
    "pageY": "55",
    "uri": "http://www.yelp.com/nyc",
    "className": "header-nav_link",
    "count": 1,
    "children": {
      "pageX": "680",
      "pageY": "433",
      "uri": "http://www.yelp.com/nyc",
      "className": "suggestion-content ieSucks",
      "count": 1,
      "children": {
        "pageX": "694",
        "pageY": "423",
        "uri": "http://www.yelp.com/nyc",
        "className": "biz-name",
        "count": 1,
        "children": {
          "pageX": "811",
          "pageY": "911",
          "uri": "http://www.yelp.com/menu/dominique-ansel-bakery-new-york/item/macchiato",
          "className": "star-img stars_4",
          "count": 1,
          "children": {
            "pageX": "739",
            "pageY": "94",
            "uri": "http://www.yelp.com/menu/dominique-ansel-bakery-new-york/item/macchiato",
            "className": "i-wrap ig-wrap-common i-breadcrumb-arrow-common-wrap breadcrumb-wrap",
            "count": 1,
            "children": {
              "pageX": "989",
              "pageY": "521",
              "uri": "http://www.yelp.com/advertise",
              "className": "ybtn ybtn-primary cta",
              "count": 1
            }
          }
        }
      }
    }
  },
  {
    "pageX": "578",
    "pageY": "99",
    "uri": "http://www.yelp.com/menu/dominique-ansel-bakery-new-york/item/house-blend",
    "className": "",
    "count": 3,
    "children": {
      "pageX": "752",
      "pageY": "39",
      "uri": "http://www.yelp.com/advertise/national/enhanced",
      "className": "header-nav_link",
      "count": 2,
      "children": {
        "pageX": "895",
        "pageY": "38",
        "uri": "http://www.yelp.com/advertise/agency/custom",
        "className": "header-nav_link",
        "count": 2,
        "children": {
          "pageX": "664",
          "pageY": "42",
          "uri": "http://www.yelp.com/nyc",
          "className": "main-header_search responsive-hidden-medium-only",
          "count": 1,
          "children": {
            "pageX": "389",
            "pageY": "58",
            "uri": "http://www.yelp.com/about",
            "className": "header-nav_link",
            "count": 1,
            "children": {
              "pageX": "388",
              "pageY": "53",
              "uri": "http://www.yelp.com/",
              "className": "header-nav_link",
              "count": 1
            }
          }
        }
      }
    }
  },
  {
    "pageX": "638",
    "pageY": "66",
    "uri": "http://www.yelp.com/biz/calave-palo-alto",
    "className": "header-nav_link",
    "count": 1
  },
  {
    "pageX": "1031",
    "pageY": "217",
    "uri": "http://www.yelp.com/palo-alto",
    "className": "star-img stars_5",
    "count": 3,
    "children": {
      "pageX": "566",
      "pageY": "152",
      "uri": "http://www.yelp.com/biz/keens-steakhouse-new-york",
      "className": "star-img stars_4",
      "count": 1,
      "children": {
        "pageX": "557",
        "pageY": "685",
        "uri": "http://www.yelp.com/palo-alto",
        "className": "star-img stars_5",
        "count": 2,
        "children": {
          "pageX": "622",
          "pageY": "58",
          "uri": "http://www.yelp.com/palo-alto",
          "className": "header-nav_link",
          "count": 1,
          "children": {
            "pageX": "572",
            "pageY": "154",
            "uri": "http://www.yelp.com/biz/keens-steakhouse-new-york",
            "className": "star-img stars_4",
            "count": 1,
            "children": {
              "pageX": "572",
              "pageY": "154",
              "uri": "http://www.yelp.com/biz/keens-steakhouse-new-york",
              "className": "star-img stars_4",
              "count": 1,
              "children": {
                "pageX": "572",
                "pageY": "154",
                "uri": "http://www.yelp.com/biz/keens-steakhouse-new-york",
                "className": "star-img stars_4",
                "count": 1,
                "children": {
                  "pageX": "572",
                  "pageY": "154",
                  "uri": "http://www.yelp.com/biz/keens-steakhouse-new-york",
                  "className": "star-img stars_4",
                  "count": 1,
                  "children": {
                    "pageX": "572",
                    "pageY": "154",
                    "uri": "http://www.yelp.com/biz/keens-steakhouse-new-york",
                    "className": "star-img stars_4",
                    "count": 1,
                    "children": {
                      "pageX": "634",
                      "pageY": "62",
                      "uri": "http://www.yelp.com/biz/keens-steakhouse-new-york",
                      "className": "header-nav_link",
                      "count": 1,
                      "children": {
                        "pageX": "1232",
                        "pageY": "614",
                        "uri": "http://www.yelp.com/biz/dominique-ansel-bakery-new-york",
                        "className": "menu-explore",
                        "count": 1
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  {
    "pageX": "693",
    "pageY": "57",
    "uri": "http://www.yelp.com/palo-alto",
    "className": "header-nav_link",
    "count": 1,
    "children": {
      "pageX": "799",
      "pageY": "684",
      "uri": "http://www.yelp.com/palo-alto",
      "className": "star-img stars_5",
      "count": 1
    }
  }
];
var result = [];
function wrapChildrenInArray(objData){

    for (key in objData) {
      if ( objData[key].children) {
          wrapChildrenInArray(objData[key].children);
          objData = [objData];
      }
    }

    return objData;
}

function generateProperJsonData(objData){
    var newObj  = {};
    newObj.children = objData;
    newObj.name = "top";
    if(newObj.children){
        newObj = wrapChildrenInArray(newObj.children);
    }
    return newObj;
}
// console.log("start");
// debugger;
// jsonData = generateProperJsonData(jsonDataFacebook);
// console.log(jsonData);
