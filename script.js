//Assinging the margins to the svg
var svg = d3.select("svg"),
    margin = {
        top: 50,
        right: 20,
        bottom: 150,
        left: 100
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

  // define the x scale (horizontal) and the y scale (vertical)
var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

//scale to define colors for the bars
var color = d3.scaleOrdinal()
    .range(["#FDCEAA", "#99B998", "#E5EFC1"]);

//Tooltip library
var tool_tip = d3.tip()
    .attr("class", "d3-tip")
    .offset([-8, 0])
    .html(function (d) {
        return d.speakers + " People";
    });

svg.call(tool_tip);

//Creating the svg element in var G, inlcuding the added margins to create space

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Loading the data from data.tsv, and were mapping each data type to its scale
d3.tsv("data.tsv", function (d) {
    d.speakers = +d.speakers;
    return d;
}, function (error, data) {
    if (error) throw error;

    x.domain(data.map(function (d) {
        return d.language;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.speakers;
    })]);
    
//Creating another svg group for the y axis
    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(1))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end");
    
//Sellecting all the elements with .bar, giving them there position, height and colors
    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.language);
        })
        .attr("y", function (d) {
            return y(d.speakers);
        })
        .attr("width", x.bandwidth())
        .attr("height", function (d) {
            return height - y(d.speakers);
        })
        .attr("fill", function (d, i) {
            return color(i);
        })
//Adding the interactive tooltip when hovering over the bars
    .on('mouseover', tool_tip.show)
        .on('mouseout', tool_tip.hide);

//adding another svg group for the x axis, and rotating the labels
    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(-8," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-90)");
});