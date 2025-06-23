import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart = () => {
  const options = {
    chart: { type: "pie" },
    title: { text: "Market Share" },
    series: [
      {
        name: "Share",
        data: [
          { name: "Chrome", y: 61.41 },
          { name: "Firefox", y: 10.85 },
          { name: "Edge", y: 4.67 },
          { name: "Safari", y: 4.18 },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
