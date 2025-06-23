import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DoughnutChart = () => {
  const options = {
    chart: { type: "pie" },
    title: { text: "Browser Usage" },
    plotOptions: {
      pie: {
        innerSize: "50%",
        dataLabels: { enabled: true },
      },
    },
    series: [
      {
        name: "Browsers",
        data: [
          { name: "Chrome", y: 65 },
          { name: "Firefox", y: 20 },
          { name: "Safari", y: 10 },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DoughnutChart;
