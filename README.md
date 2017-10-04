# Top languages by number of speaker - D3 datavisualization
This is a basic datavisualization project as part of a Front-end Development course. In the visualization we are comparing the top most spoken languages, presented in a Barchart.
![preview.png](https://github.com/LarsMarjew/fe3-assessment-1/blob/master/preview.png?raw=true)

## Background
This project focuses on rendering a map of Europe and displaying data about the countries on that map. Futhermore a range slider is implemented to scroll through the years that are present in the data set.

## Data
The data consits out of Tab-separated values (TSV) with 26 rows and two columns:

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
