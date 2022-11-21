// STEP 1 - Include Dependencies
// Include react
import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);



// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const w = () => {
  const widthOfDoc = window.innerWidth;
  let wod
  if (widthOfDoc <= 670) {
    wod = 400
  } else {
    wod = 900
  }
  return wod
}


const Bar3D = ({ data }) => {
  const chartConfigs = {
    type: "bar3d", // The chart type
    width: w(),// Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Most Forked",
        yAxisName: "Forks",
        xAxisName: "Repos",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px",
      },
      // Chart Data
      data
    }
  };
  return (<ReactFC {...chartConfigs} />);
}



export default Bar3D