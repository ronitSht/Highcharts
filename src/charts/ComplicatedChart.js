import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ComplicatedChart = () => {
  const options = {
    chart: {
      zoomType: "xy",
    },
    title: {
      text: "Company Performance Overview",
    },
    subtitle: {
      text: "Revenue, Expenses & Growth",
    },
    xAxis: [
      {
        categories: ["Q1", "Q2", "Q3", "Q4"],
        crosshair: true,
      },
    ],
    yAxis: [
      {
        // Primary y-axis
        title: {
          text: "Amount (USD)",
        },
      },
      {
        // Secondary y-axis
        title: {
          text: "Growth (%)",
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      borderWidth: 1,
    },
    series: [
      {
        type: "column",
        name: "Revenue",
        data: [120000, 150000, 170000, 200000],
        color: "#4CAF50",
      },
      {
        type: "column",
        name: "Expenses",
        data: [90000, 110000, 130000, 160000],
        color: "#F44336",
      },
      {
        type: "spline",
        name: "Growth",
        data: [10, 12, 14, 16],
        yAxis: 1,
        color: "#2196F3",
        marker: {
          lineWidth: 2,
          lineColor: "#2196F3",
          fillColor: "white",
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ComplicatedChart;
