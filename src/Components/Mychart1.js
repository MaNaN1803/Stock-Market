import React from "react";
import Chart from "react-apexcharts";

const Mychart1 = () => {
  const series = [
    //data on the y-axis
    {
      name: "Price",
      data: [
        180.59, 178.6, 177.2, 181.9, 185, 187, 189, 190.5, 191.6, 193.5, 190.5,
        191.0,
      ],
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: "bar-charts" },
    xaxis: {
      categories: [
        "2023-06-11",
        "2023-06-12",
        "2023-06-13",
        "2023-06-14",
        "2023-06-15",
        "2023-06-16",
        "2023-06-17",
        "2023-06-18",
        "2023-06-19",
        "2023-06-20",
      ],
    },
  };

  return (
    <div id="predict">
      <Chart options={options} series={series} type="line" width="530" />
      {/* <Chart options={options} series={series} type="line" width="550" /> */}
    </div>
  );
};

export default Mychart1;
