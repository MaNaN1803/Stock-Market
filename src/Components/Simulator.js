import React, { useState } from "react";

import pho1 from "./Apple.png";
import pho2 from "./Google.png";
import pho3 from "./Netflix.png";
import pho4 from "./Tesla.png";

// Stock data
const stockData = {
  AAPL: {
    "1 Week": 2 + 180,
    "1 Month": -4 + 180,
    "3 Months": 9 + 180,
  },
  GOOGL: {
    "1 Week": -4 + 122,
    "1 Month": 9 + 122,
    "3 Months": 7 + 120,
  },
  MSFT: {
    "1 Week": -8 + 420,
    "1 Month": -5 + 420,
    "3 Months": -1 + 420,
  },
};

const Simulator = () => {
  const [selectedStock, setSelectedStock] = useState("");
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("");
  const [predictedPrice, setPredictedPrice] = useState(0);

  const handleStockChange = (e) => {
    setSelectedStock(e.target.value);
  };

  const handleTimeFrameChange = (e) => {
    setSelectedTimeFrame(e.target.value);
  };

  const handleCalculateClick = () => {
    const price = stockData[selectedStock][selectedTimeFrame];
    setPredictedPrice(price);
  };

  return (
    <div className="container" id="simu" style={{ height: "720px" }}>
      <div className="container" style={{ height: "670px" }}>
        <div className="container-md">
          <div className="simulator-container ">
            <h2>Stock Price Predictor</h2>

            <table style={{ marginLeft: "40px" }}>
              <tr>
                <td>
                  <img
                    src={pho1}
                    alt=""
                    style={{ height: "80%", width: "80%" }}
                  />
                </td>
                <td>
                  {" "}
                  <img
                    src={pho2}
                    alt=""
                    style={{ height: "80%", width: "80%" }}
                  />
                </td>
                <td>
                  {" "}
                  <img
                    src={pho3}
                    alt=""
                    style={{ height: "80%", width: "80%" }}
                  />
                </td>
                <td>
                  {" "}
                  <img
                    src={pho4}
                    alt=""
                    style={{ height: "80%", width: "80%" }}
                  />
                </td>
              </tr>
              {/* <tr>
                <td>Column 2</td>
                <td>Column 2</td>
                <td>Column 2</td>
                <td>Column 2</td>
              </tr> */}
            </table>
            <div className="" style={{ marginTop: "30px" }}>
              <table>
                <tr>
                  <td>
                    <div>
                      <label htmlFor="stock-select">Select Stock:</label>
                      <select
                        id="stock-select"
                        value={selectedStock}
                        onChange={handleStockChange}
                      >
                        <option value="">Select</option>
                        <option value="AAPL">Apple</option>
                        <option value="GOOGL">Google</option>
                        <option value="MSFT">Netflix</option>
                        <option value="AAPL">Tesla</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <label htmlFor="timeframe-select">
                        Select Timeframe:
                      </label>
                      <select
                        id="timeframe-select"
                        value={selectedTimeFrame}
                        onChange={handleTimeFrameChange}
                      >
                        <option value="">Select</option>
                        <option value="1 Week">1 Week</option>
                        <option value="1 Month">1 Month</option>
                        <option value="3 Months">3 Months</option>
                      </select>
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <button onClick={handleCalculateClick}>Calculate</button>
            {predictedPrice > 0 && (
              <div className="predicted">
                <h3 style={{ color: "28262de0" }}>
                  Predicted Price : {predictedPrice}
                </h3>
              </div>
            )}
          </div>
          <div className="container mt-5 mb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Simulator;
