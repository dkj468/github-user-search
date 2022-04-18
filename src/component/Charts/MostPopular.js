import React from 'react';
import ReactFC from 'react-fusioncharts';
import fusioncharts from 'fusioncharts';

// chart type
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(fusioncharts, Column2D, FusionTheme);
// Preparing the chart data

const MostPopular = (props) => {      
      // configure chart
      const chartConfigs = {
          type: "Column2D", // The chart type
          dataFormat: "json", // Data type
          dataSource: {
            // Chart Configuration
            chart: {
              caption: "Most Popular",
              theme: "fusion"                 //Set the theme for your chart
            },
            data: props.data
          }
        };
    return(
        <ReactFC {...chartConfigs}/>
    )
}

export default MostPopular;