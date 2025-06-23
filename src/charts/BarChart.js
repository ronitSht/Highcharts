import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BarChart = () => {
  const options = {
    chart: { type: "column" },
    title: { text: "Sales by Product" },
    xAxis: { categories: ["Apples", "Bananas", "Oranges"] },
    yAxis: { title: { text: "Sales" } },
    series: [
      { name: "2024", data: [5, 3, 4] },
      { name: "2025", data: [2, 2, 3] },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
