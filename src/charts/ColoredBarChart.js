import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColoredBarChart = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Sales by Product",
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges", "Grapes", "Pears"],
      title: { text: "Fruits" },
    },
    yAxis: {
      title: { text: "Sales (Units)" },
    },
    series: [
      {
        name: "2025",
        data: [
          { y: 10, color: "#FF5733" },
          { y: 15, color: "#33C1FF" },
          { y: 8, color: "#28A745" },
          { y: 12, color: "#FFC300" },
          { y: 6, color: "#9C27B0" },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ColoredBarChart;
