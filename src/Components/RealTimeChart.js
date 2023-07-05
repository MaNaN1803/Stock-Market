// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';

// const RealTimeChart = () => {
//   const [data, setData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Real-time Data',
//         data: [],
//         fill: false,
//         backgroundColor: 'rgb(75, 192, 192)',
//         borderColor: 'rgb(75, 192, 192)',
//       },
//     ],
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newDataPoint = Math.floor(Math.random() * 100);
//       setData((prevData) => ({
//         labels: [...prevData.labels, new Date().toLocaleTimeString()],
//         datasets: [
//           {
//             ...prevData.datasets[0],
//             data: [...prevData.datasets[0].data, newDataPoint],
//           },
//         ],
//       }));
//     }, 60000);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div>
//       <h2>Real-time Chart</h2>
//       <Line data={data} />
//     </div>
//   );
// };
// export default RealTimeChart;
