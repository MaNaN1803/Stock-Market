import React from "react";
import Chart from "react-apexcharts";

const MyCharts = () => {
  const series = [
    //data on the y-axis
    {
      name: "Temperature in Celsius",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: "bar-chart" },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="bar" width="450" />
    </div>
  );
};

export default MyCharts;
