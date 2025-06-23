import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DualAxisChart = () => {
  const options = {
    chart: { zoomType: "xy" },
    title: { text: "Rainfall & Temperature" },
    xAxis: [{ categories: ["Jan", "Feb", "Mar", "Apr", "May"] }],
    yAxis: [
      {
        title: { text: "Rainfall (mm)" },
      },
      {
        title: { text: "Temperature (°C)" },
        opposite: true,
      },
    ],
    series: [
      {
        type: "column",
        name: "Rainfall",
        data: [49.9, 71.5, 106.4, 129.2, 144.0],
        yAxis: 0,
      },
      {
        type: "spline",
        name: "Temperature",
        data: [7.0, 6.9, 9.5, 14.5, 18.2],
        yAxis: 1,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DualAxisChart;
