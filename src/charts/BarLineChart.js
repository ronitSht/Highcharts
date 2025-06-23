import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BarLineChart = () => {
  const options = {
    title: { text: "Revenue & Growth" },
    xAxis: { categories: ["Q1", "Q2", "Q3", "Q4"] },
    yAxis: [
      {
        // Primary
        title: { text: "Revenue ($K)" },
      },
    ],
    series: [
      {
        type: "column",
        name: "Revenue",
        data: [300, 400, 350, 500],
      },
      {
        type: "line",
        name: "Growth (%)",
        data: [5, 7, 6, 9],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarLineChart;
