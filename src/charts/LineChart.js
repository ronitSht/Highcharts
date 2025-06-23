import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = () => {
  const options = {
    title: {
      text: "Monthly Average Temperature",
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      title: {
        text: "Temperature (°C)",
      },
    },
    series: [
      {
        type: "line",
        name: "Tel Aviv",
        data: [12, 14, 18, 22, 27, 30],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;
