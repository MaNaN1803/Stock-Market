import React from "react";
import Chart from "react-apexcharts";

const Mychart = () => {
  const series = [
    {
      name: "sentimental",
      data: [
        181.5, 177.9, 178.44, 179.97, 182.63, 181.03, 177.7, 177.33, 176.96,
        173.32, 172.41, 171.09, 173.13, 173.98, 176.39, 173, 171.71, 171.99,
        173.16, 173.62, 173.85, 173.02,
      ],
    },
    //additional data in this array..
    {
      name: "without sentiment",
      data: [
        180.63, 177.46, 177.32, 177.43, 178.04, 179.26, 176.93, 176.76, 176.57,
        173.11, 171.69, 170.52, 171.28, 173.45, 174.94, 172.58, 170.42, 171.8,
        171.47, 171, 172.17, 171.9,
      ],
    },
  ];
  const options = {
    xaxis: {
      categories: [
        "06/09/2023",
        "06/08/2023",
        "06/07/2023",
        "06/06/2023",
        "06/05/2023",
        "06/02/2023",
        "06/01/2023",
        "05/31/2023",
        "05/30/2023",
        "05/26/2023",
        "05/25/2023",
        "05/24/2023",
        "05/23/2023",
        "05/22/2023",
        "05/19/2023",
        "05/18/2023",
        "05/17/2023",
        "05/16/2023",
        "05/15/2023",
        "05/12/2023",
        "05/11/2023",
        "05/10/2023",
      ],
    },
  };

  return (
    <div>
      <Chart options={options} type="line" series={series} width="550" />
    </div>
  );
};

export default Mychart;
