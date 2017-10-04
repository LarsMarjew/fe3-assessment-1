# Top languages by number of speaker - D3 datavisualization
This is a basic datavisualization project as part of a Front-end Development course. In the visualization we are comparing the top most spoken languages, presented in a Barchart.

![preview.png](https://github.com/LarsMarjew/fe3-assessment-1/blob/master/preview.png?raw=true)

## Background
This project focuses on rendering a map of Europe and displaying data about the countries on that map. Futhermore a range slider is implemented to scroll through the years that are present in the data set.

## Data
The data consists out of Tab-separated values (TSV) with 26 rows and two columns:

*   `language` — Name of language
*   `speakers` — Estimated number of total speakers

What stands out is that the comparable part of the data is the amount of speakers, with 1090000000 as largest number and 66000000 as he smalest.
The data is easy to read with relatively few lines. It would be interessting to visually compare the volume of all the large numbers next to each other.

* [`languages.tsv`](https://github.com/cmda-fe3/course-17-18/blob/master/assessment-1/languages.tsv) - Most spoken languages data
```tsv
language	speakers
Mandarin Chinese	1090000000
English	983000000
Hindustani	544000000
Spanish	527000000
Arabic	422000000
...
Marathi	74000000
Yue Chinese	72000000
Turkish	71000000
Vietnamese	68000000
Italian	66000000
```

## Workflow
1. I've chosen to use a Barchart, because it presents the comparison of volume in combination with labels more accurately than alternatives(like a bubblechart).;
2. First i'm using the [Basic Barchart](https://bl.ocks.org/mbostock/3885304) example of Mike Bostock as a begin.;
3. Then i'm loading in the data with [`languages.tsv`](https://github.com/cmda-fe3/course-17-18/blob/master/assessment-1/languages.tsv);
4. I have added a tooltip with [`d3-tip`](https://github.com/VACLab/d3-tip).;
5. Rearranged all the scales/labels and colors of the graph.;


## Features

### Added
* Tooltip to visually clean up the scales, and let the user dive in the visuaization.
* Colors to make the data more easily comparable.

### D3
* [d3-tip]((https://github.com/VACLab/d3-tip) - tooltip library.
* [ScaleOrdinal](https://bl.ocks.org/d3indepth/fabe4d1adbf658c0b73c74d3ea36d465) - create a ordinal scale(assign colors).
* [selectAll](https://github.com/d3/d3-selection/blob/master/README.md#selectAll) - selecting multiple elements.
* [attr](https://github.com/d3/d3-selection/blob/master/README.md#selection_attr) - create or change an attribute.
* [append](https://github.com/d3/d3-selection/blob/master/README.md#selection_append) - create or select new elements.
* [domain](https://github.com/d3/d3-scale/blob/master/README.md#continuous_domain) - give the input for a domain.
* [range](https://github.com/d3/d3-scale/blob/master/README.md#continuous_range) - set the range for a scale.

## Todo
* Add animations on loading the Barchart;
* Add interactivity to the Barchart, by letting the user compare different countries;
* Rearrange the strcuture of D3.js to more easily add features;

## License
[MIT](https://choosealicense.com/licenses/mit/) &copy; Lars Marjew
