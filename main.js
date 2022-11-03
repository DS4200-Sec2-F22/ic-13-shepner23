const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 500;
const MARGINS = {left:25, right:25, top:25, bottom:25}

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

const FRAME1 = d3.select("#vis1")
				.append("svg")
					.attr("height", FRAME_HEIGHT)
					.attr("width", FRAME_WIDTH)
					.attr("class", "frame");

const cityhall_time_scale =  d3.scaleTime()
						.domain([new Date("2016-10-01 00:00:00"), new Date("2020-04-01 00:00:00")])
						.range([0, VIS_WIDTH]);

d3.csv("data/city-hall.csv").then((data) => {
	FRAME1.selectAll("circle")
			.data(data)
			.enter()
			.append("circle")
				.attr("cx", (d) => {return cityhall_time_scale(d.DateTime_Measured);})
				.attr("cy", (d) => {return d.Total_Amount_KW;})
				.attr("r", 5)
				.attr("class", "point")
});
